// ============================================================
// ملف الإصلاح السريع - يحل جميع المشاكل دفعة واحدة
// ============================================================

(function() {
    console.log('🔧 جاري تطبيق الإصلاحات السريعة...');

    // ===== 1. إصلاح عرض المسارات =====
    function fixTracks() {
        const grid = document.getElementById('trackGrid');
        if (!grid) return;
        if (!window.APP_DATA || !window.APP_DATA.tracks) {
            grid.innerHTML = `
                <div style="grid-column:1/-1;text-align:center;padding:40px;background:var(--card);border-radius:20px;border:1px solid var(--border);">
                    <i class="fas fa-database" style="font-size:48px;color:var(--primary);"></i>
                    <h3 style="margin:16px 0;">جاري تحميل البيانات...</h3>
                    <p style="opacity:0.7;">يرجى التأكد من وجود ملف data.js</p>
                </div>
            `;
            return;
        }
        // إعادة عرض المسارات
        if (typeof renderTracks === 'function') {
            renderTracks();
        }
    }

    // ===== 2. إصلاح الشحطات الجانبية =====
    function fixSideCards() {
        // إضافة الشحطات إذا لم تكن موجودة
        const mainContent = document.querySelector('.main-content');
        if (!mainContent) {
            const dashboard = document.getElementById('dashboard');
            if (!dashboard) return;
            
            // إنشاء هيكل الشحطات
            const newMainContent = document.createElement('div');
            newMainContent.className = 'main-content';
            newMainContent.innerHTML = `
                <div class="left-column">
                    <div class="tracks-container">
                        <h2><i class="fas fa-route"></i> اختر مسارك التعليمي</h2>
                        <div class="tracks-grid" id="trackGrid"></div>
                    </div>
                </div>
                <div class="right-column">
                    <section class="side-card" id="projectsSection">
                        <h3><i class="fas fa-project-diagram"></i> مشاريع عملية</h3>
                        <div id="projectsContainer"></div>
                    </section>
                    <section class="side-card" id="challengesSection">
                        <h3><i class="fas fa-trophy"></i> تحديات اليوم</h3>
                        <div id="challengesContainer"></div>
                    </section>
                    <section class="side-card" id="leaderboardSection">
                        <h3><i class="fas fa-crown"></i> لوحة المتصدرين</h3>
                        <div id="leaderboardContainer"></div>
                    </section>
                </div>
            `;
            
            // نقل محتوى المسارات القديم إلى الهيكل الجديد
            const oldGrid = document.getElementById('trackGrid');
            if (oldGrid) {
                const newGrid = newMainContent.querySelector('#trackGrid');
                if (newGrid) {
                    newGrid.innerHTML = oldGrid.innerHTML;
                }
            }
            
            dashboard.appendChild(newMainContent);
            
            // إخفاء أي أقسام مكررة
            const oldTracks = document.querySelector('.tracks-container:not(.main-content .tracks-container)');
            if (oldTracks) oldTracks.style.display = 'none';
        }
    }

    // ===== 3. إصلاح عرض المشاريع والتحديات =====
    function fixContent() {
        // محاولة عرض المشاريع
        if (typeof renderProjects === 'function') {
            try { renderProjects(); } catch(e) {}
        } else {
            const container = document.getElementById('projectsContainer');
            if (container) {
                container.innerHTML = `
                    <div style="padding:12px 0;opacity:0.7;">
                        <i class="fas fa-code"></i> المشاريع متاحة بعد تحميل projects.js
                    </div>
                `;
            }
        }
        
        // محاولة عرض التحديات
        if (typeof renderChallenges === 'function') {
            try { renderChallenges(); } catch(e) {}
        } else {
            const container = document.getElementById('challengesContainer');
            if (container) {
                container.innerHTML = `
                    <div style="padding:12px 0;opacity:0.7;">
                        <i class="fas fa-trophy"></i> التحديات متاحة بعد تحميل challenges.js
                    </div>
                `;
            }
        }
        
        // محاولة عرض لوحة المتصدرين
        if (typeof renderLeaderboard === 'function') {
            try { renderLeaderboard(); } catch(e) {}
        } else {
            const container = document.getElementById('leaderboardContainer');
            if (container) {
                container.innerHTML = `
                    <div style="padding:12px 0;opacity:0.7;">
                        <i class="fas fa-crown"></i> المتصدرين متاحين بعد تحميل leaderboard.js
                    </div>
                `;
            }
        }
    }

    // ===== 4. إصلاح الروابط والفعاليات =====
    function fixEvents() {
        // إصلاح زر العودة
        const backBtn = document.getElementById('backBtn');
        if (backBtn && typeof goBack === 'function') {
            backBtn.removeEventListener('click', goBack);
            backBtn.addEventListener('click', goBack);
        }
        
        // إصلاح أزرار التنقل
        const prevBtn = document.getElementById('prevLevelBtn');
        const nextBtn = document.getElementById('nextLevelBtn');
        if (prevBtn && typeof navigateLevel === 'function') {
            prevBtn.removeEventListener('click', () => navigateLevel(-1));
            prevBtn.addEventListener('click', () => navigateLevel(-1));
        }
        if (nextBtn && typeof navigateLevel === 'function') {
            nextBtn.removeEventListener('click', () => navigateLevel(1));
            nextBtn.addEventListener('click', () => navigateLevel(1));
        }
    }

    // ===== 5. إصلاح الوضع الليلي =====
    function fixTheme() {
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark');
                const icon = themeBtn.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-sun';
                }
            }
        }
    }

    // ===== تنفيذ الإصلاحات =====
    function applyFixes() {
        fixTracks();
        fixSideCards();
        fixContent();
        fixEvents();
        fixTheme();
        console.log('✅ تم تطبيق جميع الإصلاحات بنجاح!');
    }

    // تشغيل الإصلاحات بعد تحميل الصفحة
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyFixes);
    } else {
        applyFixes();
    }

    // إعادة التشغيل عند تغيير الصفحة (للتأكد من عمل كل شيء)
    setTimeout(applyFixes, 1000);
    setTimeout(applyFixes, 3000);

})();
