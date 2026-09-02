// ============================================================
// ملف البحث المتقدم — يبحث في جميع محتويات المنصة
// ============================================================

(function() {
    'use strict';

    // ===== 1. إنشاء واجهة البحث =====
    function createSearchUI() {
        // التحقق من وجود شريط البحث مسبقاً
        if (document.getElementById('searchContainer')) return;

        const navbar = document.querySelector('.nav-actions');
        if (!navbar) return;

        const searchContainer = document.createElement('div');
        searchContainer.id = 'searchContainer';
        searchContainer.style.cssText = `
            position: relative;
            display: inline-block;
            margin-left: 12px;
        `;

        searchContainer.innerHTML = `
            <input type="text" id="searchInput" placeholder="🔍 ابحث عن درس، مشروع، أو تحدي..." 
                   style="
                       padding: 8px 16px;
                       border-radius: 30px;
                       border: 1px solid var(--border);
                       background: var(--bg);
                       color: var(--text);
                       font-size: 14px;
                       width: 220px;
                       transition: all 0.3s ease;
                       outline: none;
                   "
                   onfocus="this.style.width='280px'"
                   onblur="this.style.width='220px'"
            />
            <div id="searchResults" style="
                display: none;
                position: absolute;
                top: 45px;
                right: 0;
                width: 400px;
                max-height: 400px;
                overflow-y: auto;
                background: var(--card);
                border: 1px solid var(--border);
                border-radius: 16px;
                box-shadow: var(--shadow);
                padding: 8px 0;
                z-index: 1000;
            "></div>
        `;

        navbar.appendChild(searchContainer);

        // ربط الأحداث
        const input = document.getElementById('searchInput');
        const results = document.getElementById('searchResults');

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
            if (!searchContainer.contains(e.target)) {
                results.style.display = 'none';
            }
        });
    }

    // ===== 2. وظيفة البحث =====
    function performSearch(query) {
        const results = {
            lessons: [],
            projects: [],
            challenges: []
        };

        const lowerQuery = query.toLowerCase();

        // البحث في الدروس
        if (window.APP_DATA && window.APP_DATA.tracks) {
            window.APP_DATA.tracks.forEach(track => {
                track.levels.forEach(level => {
                    const title = level.title || '';
                    const content = level.content?.fullExplanation || '';
                    const code = level.content?.codeExample || '';
                    
                    if (title.toLowerCase().includes(lowerQuery) ||
                        content.toLowerCase().includes(lowerQuery) ||
                        code.toLowerCase().includes(lowerQuery)) {
                        results.lessons.push({
                            track: track.name,
                            level: level.id,
                            title: title,
                            preview: content.substring(0, 100) + '...'
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
            if (window.CHALLENGES.weekly) {
                window.CHALLENGES.weekly.forEach(ch => {
                    const title = ch.title || '';
                    const desc = ch.description || '';
                    if (title.toLowerCase().includes(lowerQuery) ||
                        desc.toLowerCase().includes(lowerQuery)) {
                        results.challenges.push({
                            title: title,
                            preview: desc.substring(0, 80) + '...',
                            points: ch.points || 0
                        });
                    }
                });
            }
        }

        return results;
    }

    // ===== 3. عرض النتائج =====
    function displayResults(data, container) {
        const total = data.lessons.length + data.projects.length + data.challenges.length;
        if (total === 0) {
            container.innerHTML = `
                <div style="padding:16px;text-align:center;opacity:0.7;">
                    <i class="fas fa-search" style="font-size:24px;"></i>
                    <p style="margin-top:8px;">لا توجد نتائج لبحثك</p>
                </div>
            `;
            container.style.display = 'block';
            return;
        }

        let html = '';

        // الدروس
        if (data.lessons.length > 0) {
            html += `<div style="padding:8px 16px;background:var(--bg);font-weight:700;font-size:13px;color:var(--primary);">📚 دروس (${data.lessons.length})</div>`;
            data.lessons.forEach(item => {
                html += `
                    <div class="search-result-item" onclick="openTrackBySearch('${item.track}', ${item.level})" 
                         style="padding:10px 16px;cursor:pointer;border-bottom:1px solid var(--border);transition:0.2s;"
                         onmouseover="this.style.background='var(--bg)'" 
                         onmouseout="this.style.background='transparent'">
                        <div style="font-weight:600;">${item.title}</div>
                        <div style="font-size:12px;opacity:0.7;">${item.track} • مستوى ${item.level + 1}</div>
                        <div style="font-size:12px;opacity:0.6;margin-top:4px;">${item.preview}</div>
                    </div>
                `;
            });
        }

        // المشاريع
        if (data.projects.length > 0) {
            html += `<div style="padding:8px 16px;background:var(--bg);font-weight:700;font-size:13px;color:var(--primary);margin-top:4px;">🛠️ مشاريع (${data.projects.length})</div>`;
            data.projects.forEach(item => {
                html += `
                    <div class="search-result-item" style="padding:10px 16px;cursor:pointer;border-bottom:1px solid var(--border);transition:0.2s;"
                         onmouseover="this.style.background='var(--bg)'" 
                         onmouseout="this.style.background='transparent'">
                        <div style="font-weight:600;">${item.name}</div>
                        <div style="font-size:12px;opacity:0.7;">${item.lang} • ${item.level}</div>
                        <div style="font-size:12px;opacity:0.6;margin-top:4px;">${item.preview}</div>
                    </div>
                `;
            });
        }

        // التحديات
        if (data.challenges.length > 0) {
            html += `<div style="padding:8px 16px;background:var(--bg);font-weight:700;font-size:13px;color:var(--primary);margin-top:4px;">🏆 تحديات (${data.challenges.length})</div>`;
            data.challenges.forEach(item => {
                html += `
                    <div class="search-result-item" style="padding:10px 16px;border-bottom:1px solid var(--border);">
                        <div style="font-weight:600;">${item.title}</div>
                        <div style="font-size:12px;opacity:0.7;">⭐ ${item.points} نقطة</div>
                        <div style="font-size:12px;opacity:0.6;margin-top:4px;">${item.preview}</div>
                    </div>
                `;
            });
        }

        container.innerHTML = html;
        container.style.display = 'block';
    }

    // ===== 4. فتح درس من نتيجة البحث =====
    window.openTrackBySearch = function(trackName, levelId) {
        if (!window.APP_DATA) return;
        const trackIndex = window.APP_DATA.tracks.findIndex(t => t.name === trackName);
        if (trackIndex === -1) return;
        // إغلاق نتائج البحث
        const results = document.getElementById('searchResults');
        if (results) results.style.display = 'none';
        const input = document.getElementById('searchInput');
        if (input) input.value = '';
        // فتح المسار
        if (typeof openTrack === 'function') {
            openTrack(trackIndex);
            // الانتقال إلى المستوى المطلوب
            setTimeout(() => {
                if (typeof renderLevel === 'function') {
                    renderLevel(trackIndex, levelId);
                }
            }, 100);
        }
    };

    // ===== 5. تشغيل البحث عند تحميل الصفحة =====
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createSearchUI);
    } else {
        createSearchUI();
    }

})();
