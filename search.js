// ============================================================
// ملف البحث المتقدم — نسخة تعمل 100%
// ============================================================

(function() {
    'use strict';

    // ===== إنشاء واجهة البحث =====
    function createSearchUI() {
        const container = document.getElementById('searchContainer');
        if (!container) {
            console.warn('⚠️ عنصر searchContainer غير موجود.');
            return;
        }

        // منع التكرار
        if (container.querySelector('#searchInput')) return;

        container.innerHTML = `
            <div style="position:relative;display:inline-block;">
                <input type="text" id="searchInput" 
                       placeholder="🔍 بحث..." 
                       style="
                           padding: 8px 14px;
                           border-radius: 30px;
                           border: 1px solid var(--border);
                           background: var(--bg);
                           color: var(--text);
                           font-size: 14px;
                           width: 160px;
                           transition: all 0.3s ease;
                           outline: none;
                           font-family: inherit;
                       "
                       onfocus="this.style.width='220px'"
                       onblur="this.style.width='160px'"
                />
                <div id="searchResults" style="
                    display: none;
                    position: absolute;
                    top: 42px;
                    right: 0;
                    width: 360px;
                    max-height: 380px;
                    overflow-y: auto;
                    background: var(--card);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                    padding: 6px 0;
                    z-index: 9999;
                "></div>
            </div>
        `;

        const input = document.getElementById('searchInput');
        const results = document.getElementById('searchResults');

        if (!input || !results) return;

        input.addEventListener('input', function(e) {
            const query = this.value.trim();
            if (query.length < 2) {
                results.style.display = 'none';
                return;
            }
            const data = performSearch(query);
            displayResults(data, results);
        });

        // إغلاق النتائج عند النقر خارجها
        document.addEventListener('click', function(e) {
            if (!container.contains(e.target)) {
                results.style.display = 'none';
            }
        });

        console.log('✅ تم تفعيل شريط البحث.');
    }

    // ===== وظيفة البحث =====
    function performSearch(query) {
        const results = { lessons: [], projects: [], challenges: [] };
        const lowerQuery = query.toLowerCase();

        // البحث في الدروس
        if (window.APP_DATA && window.APP_DATA.tracks) {
            window.APP_DATA.tracks.forEach(track => {
                track.levels.forEach((level, idx) => {
                    const title = level.title || '';
                    const content = level.content?.fullExplanation || '';
                    const code = level.content?.codeExample || '';
                    
                    if (title.toLowerCase().includes(lowerQuery) ||
                        content.toLowerCase().includes(lowerQuery) ||
                        code.toLowerCase().includes(lowerQuery)) {
                        results.lessons.push({
                            track: track.name,
                            trackId: window.APP_DATA.tracks.indexOf(track),
                            level: idx,
                            title: title,
                            preview: content.substring(0, 80) + '...'
                        });
                    }
                });
            });
        }

        // البحث في المشاريع
        if (window.PROJECTS) {
            Object.entries(window.PROJECTS).forEach(([lang, projects]) => {
                Object.entries(projects).forEach(([level, project]) => {
                    const name = project.name || '';
                    const desc = project.description || '';
                    if (name.toLowerCase().includes(lowerQuery) ||
                        desc.toLowerCase().includes(lowerQuery)) {
                        results.projects.push({
                            lang: lang,
                            level: level,
                            name: name,
                            preview: desc.substring(0, 80) + '...'
                        });
                    }
                });
            });
        }

        // البحث في التحديات
        if (window.CHALLENGES) {
            const today = window.CHALLENGES.today;
            if (today) {
                const title = today.title || '';
                const desc = today.description || '';
                if (title.toLowerCase().includes(lowerQuery) ||
                    desc.toLowerCase().includes(lowerQuery)) {
                    results.challenges.push({
                        title: title,
                        preview: desc.substring(0, 80) + '...',
                        points: today.points || 0
                    });
                }
            }
        }

        return results;
    }

    // ===== عرض النتائج =====
    function displayResults(data, container) {
        const total = data.lessons.length + data.projects.length + data.challenges.length;
        if (total === 0) {
            container.innerHTML = `
                <div style="padding:20px;text-align:center;opacity:0.6;">
                    <i class="fas fa-search" style="font-size:20px;"></i>
                    <p style="margin-top:6px;font-size:14px;">لا توجد نتائج</p>
                </div>
            `;
            container.style.display = 'block';
            return;
        }

        let html = '';

        // الدروس
        if (data.lessons.length > 0) {
            html += `<div style="padding:6px 14px;background:var(--bg);font-weight:700;font-size:12px;color:var(--primary);">📚 دروس (${data.lessons.length})</div>`;
            data.lessons.forEach(item => {
                html += `
                    <div class="search-result-item" 
                         onclick="openTrackBySearch(${item.trackId}, ${item.level})" 
                         style="padding:8px 14px;cursor:pointer;border-bottom:1px solid var(--border);transition:0.2s;font-size:13px;"
                         onmouseover="this.style.background='var(--bg)'" 
                         onmouseout="this.style.background='transparent'">
                        <div style="font-weight:600;">${item.title}</div>
                        <div style="font-size:11px;opacity:0.6;">${item.track} • مستوى ${item.level + 1}</div>
                    </div>
                `;
            });
        }

        // المشاريع
        if (data.projects.length > 0) {
            html += `<div style="padding:6px 14px;background:var(--bg);font-weight:700;font-size:12px;color:var(--primary);margin-top:4px;">🛠️ مشاريع (${data.projects.length})</div>`;
            data.projects.forEach(item => {
                html += `
                    <div class="search-result-item" 
                         style="padding:8px 14px;border-bottom:1px solid var(--border);font-size:13px;">
                        <div style="font-weight:600;">${item.name}</div>
                        <div style="font-size:11px;opacity:0.6;">${item.lang} • ${item.level}</div>
                    </div>
                `;
            });
        }

        // التحديات
        if (data.challenges.length > 0) {
            html += `<div style="padding:6px 14px;background:var(--bg);font-weight:700;font-size:12px;color:var(--primary);margin-top:4px;">🏆 تحديات (${data.challenges.length})</div>`;
            data.challenges.forEach(item => {
                html += `
                    <div class="search-result-item" 
                         style="padding:8px 14px;border-bottom:1px solid var(--border);font-size:13px;">
                        <div style="font-weight:600;">${item.title}</div>
                        <div style="font-size:11px;opacity:0.6;">⭐ ${item.points} نقطة</div>
                    </div>
                `;
            });
        }

        container.innerHTML = html;
        container.style.display = 'block';
    }

    // ===== فتح درس من نتيجة البحث =====
    window.openTrackBySearch = function(trackId, levelId) {
        if (typeof openTrack === 'function') {
            openTrack(trackId);
            setTimeout(() => {
                if (typeof renderLevel === 'function') {
                    renderLevel(trackId, levelId);
                }
            }, 150);
        }
        // إغلاق نتائج البحث
        const results = document.getElementById('searchResults');
        if (results) results.style.display = 'none';
        const input = document.getElementById('searchInput');
        if (input) input.value = '';
    };

    // ===== تشغيل البحث بعد تحميل الصفحة =====
    function initSearch() {
        // تأكد من وجود container
        if (!document.getElementById('searchContainer')) {
            const navActions = document.querySelector('.nav-actions');
            if (navActions) {
                const container = document.createElement('div');
                container.id = 'searchContainer';
                container.style.cssText = 'display:inline-block;margin-left:12px;';
                navActions.prepend(container);
            }
        }
        createSearchUI();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearch);
    } else {
        initSearch();
    }

    // تأكيد إضافي بعد 1 ثانية
    setTimeout(initSearch, 1000);

})();
