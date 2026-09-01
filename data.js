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
            levels: generatePythonLevels()
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
            levels: generateJSLevels()
        }
        // أضف باقي اللغات بنفس الهيكل
    ]
};

function generatePythonLevels() {
    return [
        {
            id: 0,
            title: "المتغيرات في Python",
            image: "https://via.placeholder.com/600x300/2563eb/ffffff?text=Python+Variables",
            content: {
                intro: "المتغيرات هي أماكن في الذاكرة لتخزين البيانات. تخيلها كصناديق تحمل أسماء وتحتوي على قيم.",
                explanation: "في Python، المتغيرات سهلة جداً. تكتب اسم المتغير ثم علامة = ثم القيمة.",
                codeExample: "x = 5\nname = 'Ahmed'\nis_student = True",
                codeExplanation: "السطر الأول: نخزن الرقم 5 في المتغير x. السطر الثاني: نخزن النص 'Ahmed' في المتغير name. السطر الثالث: نخزن القيمة المنطقية True في المتغير is_student.",
                realLife: "في تطبيق إدارة مدرسة، نستخدم متغيرات لتخزين اسم الطالب، عمره، درجاته، إلخ.",
                whyImportant: "المتغيرات هي أساس أي برنامج، بدونها لا يمكن تخزين البيانات أو التعامل معها.",
                summary: [
                    "المتغيرات تخزن البيانات في الذاكرة.",
                    "Python يحدد نوع المتغير تلقائياً.",
                    "يمكن تغيير قيمة المتغير في أي وقت.",
                    "اختر أسماء متغيرات واضحة ومعبرة."
                ]
            },
            quiz: {
                multiple: [
                    { question: "ما هو نوع المتغير x = 5 في Python؟", options: ["int", "str", "float", "bool"], correct: 0 },
                    { question: "أي من التالي يمثل اسم متغير صحيح في Python؟", options: ["2name", "name_2", "name-2", "name 2"], correct: 1 }
                ],
                truefalse: [
                    { question: "يمكن تغيير قيمة المتغير في Python بعد تعريفه.", correct: true },
                    { question: "Python يتطلب تحديد نوع المتغير عند تعريفه.", correct: false }
                ],
                matching: [
                    { question: "اربط المصطلح بالتعريف الصحيح:", pairs: [["متغير", "مكان لتخزين البيانات"], ["قيمة", "البيانات المخزنة"], ["اسم المتغير", "المعرف المستخدم للإشارة"]] }
                ],
                ordering: [
                    { question: "رتب الخطوات الصحيحة لتعريف متغير في Python:", steps: ["اختر اسم المتغير", "اكتب علامة =", "اكتب القيمة"], correct: [0, 1, 2] }
                ]
            }
        },
        {
            id: 1,
            title: "الجمل الشرطية في Python",
            image: "https://via.placeholder.com/600x300/2563eb/ffffff?text=Python+If+Else",
            content: {
                intro: "الجمل الشرطية تسمح للبرنامج باتخاذ قرارات بناءً على شروط معينة.",
                explanation: "في Python، نستخدم if و elif و else لتنفيذ كود معين إذا تحقق شرط معين.",
                codeExample: "age = 18\nif age >= 18:\n    print('بالغ')\nelse:\n    print('قاصر')",
                codeExplanation: "إذا كان age أكبر أو يساوي 18، تطبع 'بالغ'، وإلا تطبع 'قاصر'.",
                realLife: "في نظام تسجيل الدخول، نتحقق من اسم المستخدم وكلمة المرور باستخدام الجمل الشرطية.",
                whyImportant: "الجمل الشرطية هي أساس المنطق في البرمجة، وتستخدم في كل تطبيق تقريباً.",
                summary: [
                    "if تتحقق من شرط معين.",
                    "elif تتحقق من شرط آخر إذا كان الأول خطأ.",
                    "else تنفذ إذا كانت جميع الشروط خطأ.",
                    "يمكن تداخل الجمل الشرطية."
                ]
            },
            quiz: {
                multiple: [
                    { question: "أي كلمة تستخدم لبدء جملة شرطية في Python؟", options: ["if", "for", "while", "def"], correct: 0 },
                    { question: "ماذا تطبع الجملة التالية: x = 5; if x > 3: print('كبر')?", options: ["كبر", "صغر", "خطأ", "لا شيء"], correct: 0 }
                ],
                truefalse: [
                    { question: "يمكن استخدام أكثر من شرط في جملة if باستخدام elif.", correct: true },
                    { question: "الجملة else تُنفذ دائماً حتى لو تحقق الشرط.", correct: false }
                ],
                matching: [
                    { question: "اربط الكلمة بوظيفتها:", pairs: [["if", "بداية شرط"], ["elif", "شرط آخر"], ["else", "تنفيذ افتراضي"]] }
                ]
            }
        }
        // أضف المزيد من المستويات حتى 10
    ];
}

function generateJSLevels() {
    return [
        {
            id: 0,
            title: "المتغيرات في JavaScript",
            image: "https://via.placeholder.com/600x300/2563eb/ffffff?text=JS+Variables",
            content: {
                intro: "المتغيرات في JavaScript تستخدم لتخزين البيانات، وتشبه إلى حد كبير Python.",
                explanation: "في JavaScript، نستخدم let أو const لتعريف المتغيرات.",
                codeExample: "let name = 'Ahmed';\nconst age = 25;\nvar isStudent = true;",
                codeExplanation: "let: متغير يمكن تغييره. const: متغير ثابت لا يتغير. var: الطريقة القديمة (لا يُفضل استخدامها).",
                realLife: "في تطبيقات الويب، نستخدم المتغيرات لتخزين بيانات المستخدم، مثل اسمه وبريده الإلكتروني.",
                whyImportant: "المتغيرات هي أساس أي برنامج JavaScript، وتستخدم في كل مكان.",
                summary: [
                    "let يستخدم للمتغيرات القابلة للتغيير.",
                    "const يستخدم للمتغيرات الثابتة.",
                    "var هو الطريقة القديمة ولا يُفضل استخدامها.",
                    "اختر أسماء متغيرات واضحة."
                ]
            },
            quiz: {
                multiple: [
                    { question: "أي كلمة تستخدم لتعريف متغير ثابت في JavaScript؟", options: ["let", "const", "var", "static"], correct: 1 },
                    { question: "أي من التالي يمثل اسم متغير صحيح في JavaScript؟", options: ["2name", "name_2", "name-2", "name 2"], correct: 1 }
                ],
                truefalse: [
                    { question: "يمكن تغيير قيمة المتغير المعرف بـ const.", correct: false },
                    { question: "JavaScript يميز بين الأحرف الكبيرة والصغيرة في أسماء المتغيرات.", correct: true }
                ]
            }
        }
        // أضف المزيد من المستويات حتى 10
    ];
}
