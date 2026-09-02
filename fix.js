// ============================================================
// ملف الإصلاح السريع — يحل جميع المشاكل دفعة واحدة
// ============================================================

(function() {
    'use strict';
    console.log('🔧 جاري تشغيل fix.js...');

    // ===== 1. التأكد من وجود البيانات =====
    function ensureData() {
        if (typeof window.APP_DATA !== 'undefined' && window.APP_DATA && window.APP_DATA.tracks) {
            console.log('✅ البيانات موجودة بالفعل.');
            return true;
        }

        console.warn('⚠️ البيانات غير موجودة، جاري إنشاء بيانات افتراضية...');
        
        window.APP_DATA = {
            tracks: [
                {
                    id: "python",
                    name: "Python",
                    icon: "fa-brands fa-python",
                    uses: {
                        overview: "🐍 Python هي لغة برمجة عالية المستوى، سهلة التعلم، تستخدم في مجالات متعددة.",
                        fields: [
                            "تطوير الويب (Django, Flask)",
                            "تحليل البيانات والذكاء الاصطناعي",
                            "أتمتة المهام والبرمجة النصية",
                            "تطبيقات العلم والهندسة",
                            "تطوير الألعاب (Pygame)"
                        ],
                        companies: ["Google", "Facebook", "Netflix", "Spotify", "NASA"]
                    },
                    levels: [
                        {
                            id: 0,
                            title: "المقدمة وتركيب البيئة",
                            content: {
                                fullExplanation: "🐍 **مقدمة إلى Python**\n\nPython هي لغة برمجة عالية المستوى، سهلة التعلم، وتستخدم في مجالات متعددة مثل تحليل البيانات، الذكاء الاصطناعي، تطوير الويب، والأتمتة.\n\n**لماذا Python؟**\n- سهلة القراءة والكتابة.\n- مجتمع ضخم ومكتبات غنية.\n- تستخدم في الشركات الكبرى مثل Google و Facebook.\n\n**تركيب البيئة:**\n1. قم بتحميل Python من python.org.\n2. استخدم محرر نصوص مثل VS Code.\n3. اكتب أول برنامج: print('Hello, World!')",
                                codeExample: "print('Hello, World!')",
                                codeExplanation: "هذا الكود يطبع النص Hello, World! في الشاشة.",
                                summary: [
                                    "📌 Python لغة سهلة التعلم.",
                                    "📌 تستخدم في مجالات متعددة.",
                                    "📌 مجتمعها كبير ومكتباتها غنية."
                                ]
                            },
                            quiz: {
                                multiple: [
                                    { question: "ما هي دالة الطباعة في Python؟", options: ["print()", "echo()", "console.log()", "write()"], correct: 0 },
                                    { question: "أي من التالي يمثل نوع بيانات نصي في Python؟", options: ["int", "str", "float", "bool"], correct: 1 }
                                ],
                                truefalse: [
                                    { question: "Python هي لغة برمجة عالية المستوى.", correct: true },
                                    { question: "Python تستخدم فقط في تطوير الويب.", correct: false }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "javascript",
                    name: "JavaScript",
                    icon: "fa-brands fa-js",
                    uses: {
                        overview: "🌐 JavaScript هي لغة البرمجة النصية للويب، تستخدم في تطوير الواجهات الأمامية والخوادم.",
                        fields: [
                            "تطوير الواجهات الأمامية (React, Vue)",
                            "تطوير الخوادم (Node.js)",
                            "تطبيقات الهواتف (React Native)",
                            "الألعاب (Phaser)",
                            "تطبيقات سطح المكتب (Electron)"
                        ],
                        companies: ["Google", "Facebook", "Microsoft", "Netflix", "Uber"]
                    },
                    levels: [
                        {
                            id: 0,
                            title: "المقدمة",
                            content: {
                                fullExplanation: "🌐 **مقدمة إلى JavaScript**\n\nJavaScript هي لغة البرمجة النصية للويب، تستخدم في تطوير الواجهات الأمامية والخوادم. تعتبر JavaScript لغة حيوية تجعل المواقع تفاعلية.",
                                codeExample: "console.log('Hello, World!');",
                                codeExplanation: "هذا الكود يطبع النص Hello, World! في وحدة التحكم.",
                                summary: [
                                    "📌 JavaScript لغة الويب الأساسية.",
                                    "📌 تستخدم في تطوير الواجهات والخوادم.",
                                    "📌 مجتمعها ضخم ومتنوع."
                                ]
                            },
                            quiz: {
                                multiple: [
                                    { question: "ما هي دالة الطباعة في JavaScript؟", options: ["console.log()", "print()", "echo()", "write()"], correct: 0 }
                                ],
                                truefalse: [
                                    { question: "JavaScript تستخدم فقط في المتصفح.", correct: false }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "java",
                    name: "Java",
                    icon: "fa-brands fa-java",
                    uses: {
                        overview: "☕ Java هي لغة برمجة كائنية التوجه تستخدم في التطبيقات المؤسسية والأندرويد.",
                        fields: [
                            "تطبيقات الأندرويد",
                            "الأنظمة المؤسسية (Spring Boot)",
                            "الخوادم عالية الأداء",
                            "تطبيقات Big Data"
                        ],
                        companies: ["Google", "Amazon", "Netflix", "Twitter", "LinkedIn"]
                    },
                    levels: [
                        {
                            id: 0,
                            title: "المقدمة",
                            content: {
                                fullExplanation: "☕ **مقدمة إلى Java**\n\nJava هي لغة برمجة كائنية التوجه، تستخدم في التطبيقات المؤسسية والأندرويد. تتميز Java بأنها محمولة (تعمل على أي نظام تشغيل).",
                                codeExample: "public class Main {\n    public static void main(String[] args) {\n        System.out.println('Hello, World!');\n    }\n}",
                                codeExplanation: "هذا الكود يطبع Hello, World! في Java.",
                                summary: [
                                    "📌 Java لغة محمولة.",
                                    "📌 تستخدم في التطبيقات المؤسسية.",
                                    "📌 لغة قوية الأنواع."
                                ]
                            },
                            quiz: {
                                multiple: [
                                    { question: "ما هي دالة الطباعة في Java؟", options: ["System.out.println()", "print()", "console.log()", "write()"], correct: 0 }
                                ],
                                truefalse: [
                                    { question: "Java تعمل على أي نظام تشغيل.", correct: true }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "cpp",
                    name: "C++",
                    icon: "fa-solid fa-c",
                    uses: {
                        overview: "⚡ C++ هي لغة برمجة قوية تستخدم في التطبيقات عالية الأداء.",
                        fields: [
                            "تطوير الألعاب (Unreal Engine)",
                            "الأنظمة المدمجة",
                            "التطبيقات عالية الأداء",
                            "محركات قواعد البيانات"
                        ],
                        companies: ["Microsoft", "Google", "Apple", "Adobe", "Intel"]
                    },
                    levels: [
                        {
                            id: 0,
                            title: "المقدمة",
                            content: {
                                fullExplanation: "⚡ **مقدمة إلى C++**\n\nC++ هي لغة برمجة قوية تستخدم في التطبيقات عالية الأداء مثل الألعاب والأنظمة المدمجة.",
                                codeExample: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << 'Hello, World!';\n    return 0;\n}",
                                codeExplanation: "هذا الكود يطبع Hello, World! في C++.",
                                summary: [
                                    "📌 C++ لغة عالية الأداء.",
                                    "📌 تستخدم في الألعاب والأنظمة.",
                                    "📌 توفر تحكمًا كاملاً في الذاكرة."
                                ]
                            },
                            quiz: {
                                multiple: [
                                    { question: "ما هي دالة الطباعة في C++؟", options: ["cout", "printf", "console.log", "write"], correct: 0 }
                                ],
                                truefalse: [
                                    { question: "C++ تستخدم في تطوير الألعاب.", correct: true }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "csharp",
                    name: "C#",
                    icon: "fa-solid fa-code",
                    uses: {
                        overview: "🖥️ C# هي لغة برمجة من مايكروسوفت تستخدم في تطوير تطبيقات ويندوز والألعاب.",
                        fields: [
                            "تطبيقات ويندوز",
                            "ألعاب (Unity)",
                            "تطبيقات الويب (ASP.NET)",
                            "تطبيقات الهواتف (Xamarin)"
                        ],
                        companies: ["Microsoft", "Unity", "Stack Overflow", "Intel", "Dell"]
                    },
                    levels: [
                        {
                            id: 0,
                            title: "المقدمة",
                            content: {
                                fullExplanation: "🖥️ **مقدمة إلى C#**\n\nC# هي لغة برمجة من مايكروسوفت، تستخدم في تطوير تطبيقات ويندوز والألعاب باستخدام Unity.",
                                codeExample: "using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine('Hello, World!');\n    }\n}",
                                codeExplanation: "هذا الكود يطبع Hello, World! في C#.",
                                summary: [
                                    "📌 C# لغة متعددة الاستخدامات.",
                                    "📌 تستخدم في الألعاب وتطبيقات ويندوز.",
                                    "📌 تدعمها مايكروسوفت بشكل كبير."
                                ]
                            },
                            quiz: {
                                multiple: [
                                    { question: "ما هي دالة الطباعة في C#؟", options: ["Console.WriteLine()", "print()", "console.log()", "write()"], correct: 0 }
                                ],
                                truefalse: [
                                    { question: "C# تستخدم في تطوير الألعاب باستخدام Unity.", correct: true }
                                ]
                            }
                        }
                    ]
                }
            ]
        };
        console.log('✅ تم إنشاء البيانات الافتراضية بنجاح.');
        return true;
    }

    // ===== 2. عرض المسارات =====
    function renderTracksFix() {
        if (typeof renderTracks === 'function') {
            try {
                renderTracks();
                console.log('✅ تم عرض المسارات باستخدام renderTracks().');
                return;
            } catch (e) {
                console.warn('⚠️ حدث خطأ في renderTracks():', e);
            }
        }

        // إذا لم تعمل renderTracks، نعرض المسارات يدوياً
        const grid = document.getElementById('trackGrid');
        if (!grid) {
            console.warn('⚠️ عنصر trackGrid غير موجود.');
            return;
        }

        if (!window.APP_DATA || !window.APP_DATA.tracks) {
            grid.innerHTML = '<p style="text-align:center;padding:20px;color:red;">⚠️ لا توجد بيانات لعرضها.</p>';
            return;
        }

        grid.innerHTML = window.APP_DATA.tracks.map(function(track) {
            return `
                <div class="track-card" onclick="openTrack(${window.APP_DATA.tracks.indexOf(track)})">
                    <div class="track-icon"><i class="${track.icon}"></i></div>
                    <h3>${track.name}</h3>
                    <div class="progress-bar"><div class="progress-fill" style="width:0%"></div></div>
                    <span class="badge">0/${track.levels.length}</span>
                    <button class="start-btn">ابدأ التعلم →</button>
                </div>
            `;
        }).join('');
        console.log('✅ تم عرض المسارات يدوياً.');
    }

    // ===== 3. إضافة الشحطات الجانبية =====
    function addSideCards() {
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            console.log('✅ الشحطات الجانبية موجودة بالفعل.');
            return;
        }

        const dashboard = document.getElementById('dashboard');
        if (!dashboard) {
            console.warn('⚠️ عنصر dashboard غير موجود.');
            return;
        }

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

        // نقل محتوى المسارات القديم
        const oldGrid = document.getElementById('trackGrid');
        if (oldGrid) {
            const newGrid = newMainContent.querySelector('#trackGrid');
            if (newGrid) {
                newGrid.innerHTML = oldGrid.innerHTML;
            }
        }

        dashboard.appendChild(newMainContent);
        
        // إخفاء الأقسام المكررة
        const oldTracks = document.querySelector('.tracks-container:not(.main-content .tracks-container)');
        if (oldTracks) oldTracks.style.display = 'none';
        
        console.log('✅ تم إضافة الشحطات الجانبية.');
    }

    // ===== 4. محاولة عرض المحتوى =====
    function tryRenderContent() {
        // عرض المشاريع
        if (typeof renderProjects === 'function') {
            try { renderProjects(); } catch(e) { console.warn('⚠️ خطأ في renderProjects:', e); }
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

        // عرض التحديات
        if (typeof renderChallenges === 'function') {
            try { renderChallenges(); } catch(e) { console.warn('⚠️ خطأ في renderChallenges:', e); }
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

        // عرض لوحة المتصدرين
        if (typeof renderLeaderboard === 'function') {
            try { renderLeaderboard(); } catch(e) { console.warn('⚠️ خطأ في renderLeaderboard:', e); }
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

    // ===== 5. إصلاح الوضع الليلي =====
    function fixTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            const themeBtn = document.getElementById('themeToggle');
            if (themeBtn) {
                const icon = themeBtn.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-sun';
                }
            }
        }
    }

    // ===== 6. تشغيل كل شيء =====
    function applyAllFixes() {
        console.log('🔄 جاري تطبيق الإصلاحات...');
        ensureData();
        addSideCards();
        renderTracksFix();
        tryRenderContent();
        fixTheme();
        console.log('✅ تم تطبيق جميع الإصلاحات بنجاح!');
    }

    // تشغيل الإصلاحات
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyAllFixes);
    } else {
        applyAllFixes();
    }

    // إعادة التشغيل للتأكد
    setTimeout(applyAllFixes, 1000);
    setTimeout(applyAllFixes, 3000);

})();
