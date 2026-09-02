// ============================================================
// ملف الإصلاح التلقائي الكامل — يعمل بدون أي تدخل
// ============================================================

(function() {
    'use strict';
    console.log('🤖 جاري تشغيل الإصلاح التلقائي...');

    // ===== 1. البيانات الافتراضية الكاملة =====
    const DEFAULT_DATA = {
        tracks: [
            {
                id: "python",
                name: "Python",
                icon: "fa-brands fa-python",
                uses: {
                    overview: "🐍 Python هي لغة برمجة عالية المستوى، سهلة التعلم، تستخدم في مجالات متعددة.",
                    fields: ["تطوير الويب", "تحليل البيانات", "الذكاء الاصطناعي", "أتمتة المهام"],
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
                            summary: ["📌 Python لغة سهلة التعلم.", "📌 تستخدم في مجالات متعددة.", "📌 مجتمعها كبير ومكتباتها غنية."]
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
                    },
                    {
                        id: 1,
                        title: "المتغيرات وأنواع البيانات",
                        content: {
                            fullExplanation: "📘 **المتغيرات وأنواع البيانات**\n\nالمتغيرات هي أماكن لتخزين البيانات في الذاكرة.\n\n**الأنواع الأساسية:**\n- int: الأعداد الصحيحة (مثال: 5).\n- float: الأعداد العشرية (مثال: 3.14).\n- str: النصوص (مثال: 'Ahmed').\n- bool: القيم المنطقية (True/False).",
                            codeExample: "x = 5\nname = 'Ahmed'\nis_student = True",
                            codeExplanation: "هذا الكود يعرف ثلاثة متغيرات: رقم، نص، وقيمة منطقية.",
                            summary: ["📌 المتغيرات تخزن البيانات.", "📌 Python يحدد النوع تلقائياً.", "📌 اختر أسماء متغيرات واضحة."]
                        },
                        quiz: {
                            multiple: [
                                { question: "ما هو نوع المتغير x = 5؟", options: ["int", "str", "float", "bool"], correct: 0 }
                            ],
                            truefalse: [
                                { question: "Python يحدد نوع المتغير تلقائياً.", correct: true }
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
                    fields: ["تطوير الواجهات الأمامية", "تطوير الخوادم", "تطبيقات الهواتف", "الألعاب"],
                    companies: ["Google", "Facebook", "Microsoft", "Netflix", "Uber"]
                },
                levels: [
                    {
                        id: 0,
                        title: "المقدمة",
                        content: {
                            fullExplanation: "🌐 **مقدمة إلى JavaScript**\n\nJavaScript هي لغة البرمجة النصية للويب، تستخدم في تطوير الواجهات الأمامية والخوادم. تعتبر JavaScript لغة حيوية تجعل المواقع تفاعلية.",
                            codeExample: "console.log('Hello, World!');",
                            codeExplanation: "هذا الكود يطبع Hello, World! في وحدة التحكم.",
                            summary: ["📌 JavaScript لغة الويب الأساسية.", "📌 تستخدم في المتصفح والخادم.", "📌 مجتمعها ضخم."]
                        },
                        quiz: {
                            multiple: [
                                { question: "ما هي دالة الطباعة في JavaScript؟", options: ["console.log()", "print()", "echo()", "write()"], correct: 0 }
                            ],
                            truefalse: [
                                { question: "JavaScript تعمل في المتصفح فقط.", correct: false }
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
                    fields: ["تطبيقات الأندرويد", "الأنظمة المؤسسية", "الخوادم عالية الأداء", "تطبيقات Big Data"],
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
                            summary: ["📌 Java لغة محمولة.", "📌 تستخدم في المؤسسات.", "📌 لغة قوية الأنواع."]
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
                    fields: ["تطوير الألعاب", "الأنظمة المدمجة", "التطبيقات عالية الأداء", "محركات قواعد البيانات"],
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
                            summary: ["📌 C++ لغة عالية الأداء.", "📌 تستخدم في الألعاب.", "📌 توفر تحكمًا في الذاكرة."]
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
                    fields: ["تطبيقات ويندوز", "ألعاب (Unity)", "تطبيقات الويب", "تطبيقات الهواتف"],
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
                            summary: ["📌 C# لغة متعددة الاستخدامات.", "📌 تستخدم في Unity.", "📌 تدعمها مايكروسوفت."]
                        },
                        quiz: {
                            multiple: [
                                { question: "ما هي دالة الطباعة في C#؟", options: ["Console.WriteLine()", "print()", "console.log()", "write()"], correct: 0 }
                            ],
                            truefalse: [
                                { question: "C# تستخدم في تطوير الألعاب.", correct: true }
                            ]
                        }
                    }
                ]
            }
        ]
    };

    // ===== 2. التأكد من وجود البيانات =====
    function ensureData() {
        if (window.APP_DATA && window.APP_DATA.tracks && window.APP_DATA.tracks.length > 0) {
            console.log('✅ البيانات موجودة.');
            return true;
        }
        console.warn('⚠️ البيانات غير موجودة، جاري إنشاء بيانات افتراضية...');
        window.APP_DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));
        console.log('✅ تم إنشاء البيانات الافتراضية.');
        return true;
    }

    // ===== 3. عرض المسارات =====
    function renderTracksForce() {
        const grid = document.getElementById('trackGrid');
        if (!grid) {
            console.warn('⚠️ عنصر trackGrid غير موجود.');
            return;
        }

        if (!window.APP_DATA || !window.APP_DATA.tracks) {
            grid.innerHTML = '<p style="text-align:center;padding:20px;color:red;">⚠️ لا توجد بيانات.</p>';
            return;
        }

        grid.innerHTML = window.APP_DATA.tracks.map(function(track, index) {
            return `
                <div class="track-card" onclick="openTrack(${index})">
                    <div class="track-icon"><i class="${track.icon}"></i></div>
                    <h3>${track.name}</h3>
                    <div class="progress-bar"><div class="progress-fill" style="width:0%"></div></div>
                    <span class="badge">0/${track.levels.length}</span>
                    <button class="start-btn">ابدأ التعلم →</button>
                </div>
            `;
        }).join('');

        console.log('✅ تم عرض المسارات.');
    }

    // ===== 4. إضافة الشحطات =====
    function addSideCards() {
        if (document.querySelector('.main-content')) {
            console.log('✅ الشحطات موجودة.');
            return;
        }

        const dashboard = document.getElementById('dashboard');
        if (!dashboard) {
            console.warn('⚠️ dashboard غير موجود.');
            return;
        }

        const mainContent = document.createElement('div');
        mainContent.className = 'main-content';
        mainContent.innerHTML = `
            <div class="left-column">
                <div class="tracks-container">
                    <h2><i class="fas fa-route"></i> اختر مسارك التعليمي</h2>
                    <div class="tracks-grid" id="trackGrid"></div>
                </div>
            </div>
            <div class="right-column">
                <section class="side-card" id="projectsSection">
                    <h3><i class="fas fa-project-diagram"></i> مشاريع عملية</h3>
                    <div id="projectsContainer"><p style="opacity:0.7;">المشاريع متاحة بعد تحميل projects.js</p></div>
                </section>
                <section class="side-card" id="challengesSection">
                    <h3><i class="fas fa-trophy"></i> تحديات اليوم</h3>
                    <div id="challengesContainer"><p style="opacity:0.7;">التحديات متاحة بعد تحميل challenges.js</p></div>
                </section>
                <section class="side-card" id="leaderboardSection">
                    <h3><i class="fas fa-crown"></i> لوحة المتصدرين</h3>
                    <div id="leaderboardContainer"><p style="opacity:0.7;">المتصدرين متاحين بعد تحميل leaderboard.js</p></div>
                </section>
            </div>
        `;

        dashboard.appendChild(mainContent);
        console.log('✅ تم إضافة الشحطات الجانبية.');
    }

    // ===== 5. إصلاح الوضع الليلي =====
    function fixTheme() {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            document.body.classList.add('dark');
            const btn = document.getElementById('themeToggle');
            if (btn) {
                const icon = btn.querySelector('i');
                if (icon) icon.className = 'fas fa-sun';
            }
        }
    }

    // ===== 6. إصلاح الأزرار =====
    function fixButtons() {
        // إصلاح زر العودة
        const backBtn = document.getElementById('backBtn');
        if (backBtn && typeof goBack === 'function') {
            backBtn.onclick = goBack;
        }

        // إصلاح أزرار التنقل
        const prevBtn = document.getElementById('prevLevelBtn');
        const nextBtn = document.getElementById('nextLevelBtn');
        if (prevBtn && typeof navigateLevel === 'function') {
            prevBtn.onclick = function() { navigateLevel(-1); };
        }
        if (nextBtn && typeof navigateLevel === 'function') {
            nextBtn.onclick = function() { navigateLevel(1); };
        }
    }

    // ===== 7. تشغيل الكل =====
    function applyAllFixes() {
        console.log('🔄 جاري تطبيق الإصلاحات...');
        ensureData();
        addSideCards();
        renderTracksForce();
        fixTheme();
        fixButtons();
        console.log('✅ تم تطبيق جميع الإصلاحات بنجاح!');
    }

    // تنفيذ الإصلاحات
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyAllFixes);
    } else {
        applyAllFixes();
    }

    // تأكيد إضافي
    setTimeout(applyAllFixes, 1000);
    setTimeout(applyAllFixes, 3000);

})();
