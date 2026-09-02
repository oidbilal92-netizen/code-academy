// ============================================================
// ملف الإصلاح النهائي — يعمل 100%
// ============================================================

(function() {
    'use strict';
    console.log('🔧 جاري تشغيل fix.js (النسخة النهائية)...');

    // ===== البيانات الافتراضية القوية =====
    function createDefaultData() {
        return {
            tracks: [
                {
                    id: "python",
                    name: "Python",
                    icon: "fa-brands fa-python",
                    uses: {
                        overview: "🐍 Python هي لغة برمجة عالية المستوى، سهلة التعلم.",
                        fields: ["تطوير الويب", "تحليل البيانات", "الذكاء الاصطناعي"],
                        companies: ["Google", "Facebook", "Netflix"]
                    },
                    levels: [
                        {
                            id: 0,
                            title: "المقدمة",
                            content: {
                                fullExplanation: "🐍 **مقدمة إلى Python**\n\nPython هي لغة برمجة سهلة التعلم.",
                                codeExample: "print('Hello, World!')",
                                codeExplanation: "هذا الكود يطبع Hello, World!",
                                summary: ["Python سهلة", "مناسبة للمبتدئين"]
                            },
                            quiz: {
                                multiple: [
                                    { question: "ما هي دالة الطباعة؟", options: ["print()", "echo()", "log()"], correct: 0 }
                                ],
                                truefalse: [
                                    { question: "Python لغة سهلة.", correct: true }
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
                        overview: "🌐 JavaScript هي لغة الويب.",
                        fields: ["واجهات أمامية", "خوادم", "تطبيقات"],
                        companies: ["Google", "Facebook", "Microsoft"]
                    },
                    levels: [
                        {
                            id: 0,
                            title: "المقدمة",
                            content: {
                                fullExplanation: "🌐 **مقدمة إلى JavaScript**\n\nJavaScript هي لغة البرمجة النصية للويب.",
                                codeExample: "console.log('Hello, World!');",
                                codeExplanation: "هذا الكود يطبع Hello, World!",
                                summary: ["JavaScript لغة الويب", "تستخدم في المتصفح"]
                            },
                            quiz: {
                                multiple: [
                                    { question: "ما هي دالة الطباعة في JS؟", options: ["console.log()", "print()", "echo()"], correct: 0 }
                                ],
                                truefalse: [
                                    { question: "JavaScript تعمل في المتصفح.", correct: true }
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
                        overview: "☕ Java هي لغة كائنية التوجه.",
                        fields: ["أندرويد", "مؤسسات", "خوادم"],
                        companies: ["Google", "Amazon", "Netflix"]
                    },
                    levels: [
                        {
                            id: 0,
                            title: "المقدمة",
                            content: {
                                fullExplanation: "☕ **مقدمة إلى Java**\n\nJava هي لغة برمجة كائنية التوجه.",
                                codeExample: "public class Main {\n    public static void main(String[] args) {\n        System.out.println('Hello, World!');\n    }\n}",
                                codeExplanation: "هذا الكود يطبع Hello, World!",
                                summary: ["Java محمولة", "تستخدم في المؤسسات"]
                            },
                            quiz: {
                                multiple: [
                                    { question: "ما هي دالة الطباعة في Java؟", options: ["System.out.println()", "print()", "console.log()"], correct: 0 }
                                ],
                                truefalse: [
                                    { question: "Java تعمل على أي نظام.", correct: true }
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
                        overview: "⚡ C++ لغة عالية الأداء.",
                        fields: ["ألعاب", "أنظمة مدمجة", "تطبيقات"],
                        companies: ["Microsoft", "Google", "Apple"]
                    },
                    levels: [
                        {
                            id: 0,
                            title: "المقدمة",
                            content: {
                                fullExplanation: "⚡ **مقدمة إلى C++**\n\nC++ هي لغة برمجة قوية.",
                                codeExample: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << 'Hello, World!';\n    return 0;\n}",
                                codeExplanation: "هذا الكود يطبع Hello, World!",
                                summary: ["C++ سريعة", "تستخدم في الألعاب"]
                            },
                            quiz: {
                                multiple: [
                                    { question: "ما هي دالة الطباعة في C++؟", options: ["cout", "printf", "console.log"], correct: 0 }
                                ],
                                truefalse: [
                                    { question: "C++ تستخدم في الألعاب.", correct: true }
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
                        overview: "🖥️ C# لغة مايكروسوفت.",
                        fields: ["ويندوز", "ألعاب (Unity)", "ويب"],
                        companies: ["Microsoft", "Unity", "Intel"]
                    },
                    levels: [
                        {
                            id: 0,
                            title: "المقدمة",
                            content: {
                                fullExplanation: "🖥️ **مقدمة إلى C#**\n\nC# هي لغة برمجة من مايكروسوفت.",
                                codeExample: "using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine('Hello, World!');\n    }\n}",
                                codeExplanation: "هذا الكود يطبع Hello, World!",
                                summary: ["C# متعددة الاستخدامات", "تستخدم في Unity"]
                            },
                            quiz: {
                                multiple: [
                                    { question: "ما هي دالة الطباعة في C#؟", options: ["Console.WriteLine()", "print()", "console.log()"], correct: 0 }
                                ],
                                truefalse: [
                                    { question: "C# تستخدم في Unity.", correct: true }
                                ]
                            }
                        }
                    ]
                }
            ]
        };
    }

    // ===== التأكد من وجود البيانات =====
    function ensureData() {
        if (window.APP_DATA && window.APP_DATA.tracks && window.APP_DATA.tracks.length > 0) {
            console.log('✅ البيانات موجودة بالفعل.');
            return true;
        }
        console.warn('⚠️ البيانات غير موجودة، جاري إنشاء بيانات افتراضية...');
        window.APP_DATA = createDefaultData();
        console.log('✅ تم إنشاء البيانات الافتراضية.');
        return true;
    }

    // ===== عرض المسارات بالقوة =====
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

        console.log('✅ تم عرض المسارات بالقوة.');
    }

    // ===== إضافة الشحطات الجانبية =====
    function addSideCards() {
        if (document.querySelector('.main-content')) {
            console.log('✅ الشحطات موجودة.');
            return;
        }

        const dashboard = document.getElementById('dashboard');
        if (!dashboard) return;

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

    // ===== إصلاح الوضع الليلي =====
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

    // ===== تشغيل كل شيء =====
    function applyFixes() {
        console.log('🔄 تطبيق الإصلاحات...');
        ensureData();
        addSideCards();
        renderTracksForce();
        fixTheme();
        console.log('✅ تم تطبيق جميع الإصلاحات!');
    }

    // تنفيذ الإصلاحات
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyFixes);
    } else {
        applyFixes();
    }

    // تأكيد إضافي بعد 1 و 3 ثواني
    setTimeout(applyFixes, 1000);
    setTimeout(applyFixes, 3000);

})();
