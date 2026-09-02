const APP_DATA = {
    tracks: [
        {
            id: "python",
            name: "Python",
            icon: "fa-brands fa-python",
            uses: {
                overview: "Python هي لغة برمجة عالية المستوى، سهلة التعلم، تستخدم في مجالات متعددة.",
                fields: [
                    "تطوير الويب (Django, Flask)",
                    "تحليل البيانات والذكاء الاصطناعي (Pandas, NumPy, TensorFlow)",
                    "أتمتة المهام والبرمجة النصية",
                    "تطبيقات العلم والهندسة",
                    "تطوير الألعاب (Pygame)",
                    "الأنظمة المدمجة (Raspberry Pi)"
                ],
                companies: ["Google", "Facebook", "Netflix", "Spotify", "NASA"]
            },
            levels: generateLevels("Python")
        },
        {
            id: "javascript",
            name: "JavaScript",
            icon: "fa-brands fa-js",
            uses: {
                overview: "JavaScript هي لغة البرمجة النصية للويب، تستخدم في تطوير الواجهات الأمامية والخوادم.",
                fields: [
                    "تطوير الواجهات الأمامية (React, Vue, Angular)",
                    "تطوير الخوادم (Node.js, Express)",
                    "تطبيقات الهواتف (React Native)",
                    "الألعاب (Phaser, Three.js)",
                    "تطبيقات سطح المكتب (Electron)"
                ],
                companies: ["Google", "Facebook", "Microsoft", "Netflix", "Uber"]
            },
            levels: generateLevels("JavaScript")
        },
        {
            id: "cpp",
            name: "C++",
            icon: "fa-solid fa-c",
            uses: {
                overview: "C++ هي لغة برمجة قوية تستخدم في التطبيقات عالية الأداء.",
                fields: [
                    "تطوير الألعاب (Unreal Engine)",
                    "الأنظمة المدمجة",
                    "التطبيقات عالية الأداء",
                    "محركات قواعد البيانات",
                    "برمجة الأنظمة"
                ],
                companies: ["Microsoft", "Google", "Apple", "Adobe", "Intel"]
            },
            levels: generateLevels("C++")
        },
        {
            id: "java",
            name: "Java",
            icon: "fa-brands fa-java",
            uses: {
                overview: "Java هي لغة برمجة كائنية التوجه تستخدم في التطبيقات المؤسسية.",
                fields: [
                    "تطبيقات الأندرويد",
                    "الأنظمة المؤسسية (Spring Boot)",
                    "تطبيقات سطح المكتب",
                    "الخوادم عالية الأداء",
                    "تطبيقات Big Data"
                ],
                companies: ["Google", "Amazon", "Netflix", "Twitter", "LinkedIn"]
            },
            levels: generateLevels("Java")
        },
        {
            id: "csharp",
            name: "C#",
            icon: "fa-solid fa-code",
            uses: {
                overview: "C# هي لغة برمجة من مايكروسوفت تستخدم في تطوير تطبيقات ويندوز والألعاب.",
                fields: [
                    "تطبيقات ويندوز",
                    "ألعاب (Unity)",
                    "تطبيقات الويب (ASP.NET)",
                    "تطبيقات الهواتف (Xamarin)",
                    "تطبيقات سطح المكتب"
                ],
                companies: ["Microsoft", "Unity", "Stack Overflow", "Intel", "Dell"]
            },
            levels: generateLevels("C#")
        },
        {
            id: "php",
            name: "PHP",
            icon: "fa-brands fa-php",
            uses: {
                overview: "PHP هي لغة برمجة نصية تستخدم في تطوير الويب.",
                fields: [
                    "تطوير الويب (Backend)",
                    "إدارة المحتوى (WordPress, Drupal)",
                    "تطبيقات التجارة الإلكترونية",
                    "واجهات برمجة التطبيقات (APIs)"
                ],
                companies: ["Facebook", "Wikipedia", "WordPress", "Laravel", "Symfony"]
            },
            levels: generateLevels("PHP")
        },
        {
            id: "swift",
            name: "Swift",
            icon: "fa-solid fa-code",
            uses: {
                overview: "Swift هي لغة برمجة من أبل لتطوير تطبيقات iOS و macOS.",
                fields: [
                    "تطبيقات iOS",
                    "تطبيقات macOS",
                    "تطبيقات watchOS و tvOS",
                    "تطوير الخوادم (Vapor)"
                ],
                companies: ["Apple", "Uber", "Airbnb", "Lyft", "Slack"]
            },
            levels: generateLevels("Swift")
        },
        {
            id: "kotlin",
            name: "Kotlin",
            icon: "fa-solid fa-code",
            uses: {
                overview: "Kotlin هي لغة برمجة حديثة من JetBrains، متوافقة مع Java.",
                fields: [
                    "تطبيقات الأندرويد",
                    "تطوير الخوادم (Ktor)",
                    "تطبيقات متعددة المنصات",
                    "تطبيقات الويب"
                ],
                companies: ["Google", "JetBrains", "Pinterest", "Uber", "Coursera"]
            },
            levels: generateLevels("Kotlin")
        },
        {
            id: "go",
            name: "Go",
            icon: "fa-solid fa-code",
            uses: {
                overview: "Go هي لغة برمجة من Google، مصممة للأنظمة الموزعة.",
                fields: [
                    "الخوادم عالية الأداء",
                    "الأنظمة الموزعة",
                    "أدوات DevOps",
                    "تطبيقات السحابة",
                    "البرمجة المتزامنة"
                ],
                companies: ["Google", "Uber", "Dropbox", "Cloudflare", "Netflix"]
            },
            levels: generateLevels("Go")
        },
        {
            id: "rust",
            name: "Rust",
            icon: "fa-solid fa-code",
            uses: {
                overview: "Rust هي لغة برمجة آمنة وسريعة، تستخدم في الأنظمة المدمجة.",
                fields: [
                    "الأنظمة الآمنة عالية الأداء",
                    "تطوير المتصفحات",
                    "الأنظمة المدمجة",
                    "أدوات سطر الأوامر",
                    "تطبيقات البنية التحتية"
                ],
                companies: ["Mozilla", "Amazon", "Microsoft", "Facebook", "Dropbox"]
            },
            levels: generateLevels("Rust")
        }
    ]
};

function generateLevels(lang) {
    const levels = [];
    const topics = [
        "المقدمة وتركيب البيئة",
        "المتغيرات وأنواع البيانات",
        "الجمل الشرطية",
        "الحلقات",
        "الدوال",
        "المصفوفات والقوائم",
        "الكائنات والكلاسات",
        "التعامل مع الملفات",
        "المكتبات والأدوات",
        "مشروع متكامل"
    ];

    const images = [
        "https://via.placeholder.com/600x300/2563eb/ffffff?text=مقدمة+في+" + lang,
        "https://via.placeholder.com/600x300/2563eb/ffffff?text=المتغيرات+في+" + lang,
        "https://via.placeholder.com/600x300/2563eb/ffffff?text=الجمل+الشرطية+في+" + lang,
        "https://via.placeholder.com/600x300/2563eb/ffffff?text=الحلقات+في+" + lang,
        "https://via.placeholder.com/600x300/2563eb/ffffff?text=الدوال+في+" + lang,
        "https://via.placeholder.com/600x300/2563eb/ffffff?text=المصفوفات+في+" + lang,
        "https://via.placeholder.com/600x300/2563eb/ffffff?text=الكائنات+في+" + lang,
        "https://via.placeholder.com/600x300/2563eb/ffffff?text=الملفات+في+" + lang,
        "https://via.placeholder.com/600x300/2563eb/ffffff?text=المكتبات+في+" + lang,
        "https://via.placeholder.com/600x300/2563eb/ffffff?text=مشروع+في+" + lang
    ];

    for (let i = 0; i < 10; i++) {
        levels.push({
            id: i,
            title: topics[i],
            image: images[i],
            content: {
                intro: `هذه مقدمة عن ${topics[i]} في لغة ${lang}.`,
                explanation: `هذا شرح مفصل عن ${topics[i]} في لغة ${lang}. تعلم المفهوم من الصفر مع أمثلة حياتية.`,
                codeExample: `// كود توضيحي عن ${topics[i]} في ${lang}\n// يمكنك قراءة الكود لفهم الفكرة`,
                codeExplanation: `هذا الكود يوضح كيفية استخدام ${topics[i]} في لغة ${lang}.`,
                realLife: `في التطبيقات الحقيقية، نستخدم ${topics[i]} في العديد من المشاريع مثل تطبيقات الويب والهواتف.`,
                whyImportant: `${topics[i]} هي من أهم المفاهيم في البرمجة، وتستخدم في كل مشروع تقريباً.`,
                summary: [
                    `📌 ${topics[i]} هي مفهوم أساسي في البرمجة.`,
                    `📌 تستخدم في جميع لغات البرمجة تقريباً.`,
                    `📌 تساعد في بناء تطبيقات قوية وفعالة.`,
                    `📌 تعلمها يسهل تعلم المفاهيم المتقدمة.`
                ]
            },
            quiz: {
                multiple: [
                    { question: `ما هو المفهوم الأساسي لـ ${topics[i]}؟`, options: ["خيار 1", "خيار 2", "خيار 3", "خيار 4"], correct: 0 },
                    { question: `أي من التالي صحيح عن ${topics[i]}؟`, options: ["صحيح 1", "صحيح 2", "صحيح 3", "صحيح 4"], correct: 1 }
                ],
                truefalse: [
                    { question: `${topics[i]} مهم جداً في البرمجة.`, correct: true },
                    { question: `${topics[i]} يستخدم فقط في لغة واحدة.`, correct: false }
                ],
                matching: [
                    { question: `اربط المصطلح بالتعريف الصحيح لـ ${topics[i]}:`, pairs: [["مصطلح 1", "تعريف 1"], ["مصطلح 2", "تعريف 2"]] }
                ],
                ordering: [
                    { question: `رتب الخطوات الصحيحة لاستخدام ${topics[i]}:`, steps: ["خطوة 1", "خطوة 2", "خطوة 3"], correct: [0, 1, 2] }
                ]
            }
        });
    }
    return levels;
}
