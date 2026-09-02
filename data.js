const APP_DATA = {
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
            levels: generateLevels("Python")
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
            levels: generateLevels("JavaScript")
        },
        {
            id: "java",
            name: "Java",
            icon: "fa-brands fa-java",
            uses: {
                overview: "☕ Java هي لغة برمجة كائنية التوجه تستخدم في التطبيقات المؤسسية.",
                fields: [
                    "تطبيقات الأندرويد",
                    "الأنظمة المؤسسية (Spring Boot)",
                    "الخوادم عالية الأداء",
                    "تطبيقات Big Data"
                ],
                companies: ["Google", "Amazon", "Netflix", "Twitter", "LinkedIn"]
            },
            levels: generateLevels("Java")
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
            levels: generateLevels("C++")
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
            levels: generateLevels("C#")
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

    const codeExamples = {
        "Python": [
            "print('Hello, World!')",
            "x = 5\nname = 'Ahmed'\nis_student = True",
            "age = 18\nif age >= 18:\n    print('بالغ')\nelse:\n    print('قاصر')",
            "for i in range(5):\n    print(i)",
            "def add(a, b):\n    return a + b\nprint(add(5, 3))",
            "numbers = [1, 2, 3, 4, 5]\nprint(sum(numbers))",
            "class Car:\n    def __init__(self, brand):\n        self.brand = brand\nmy_car = Car('Toyota')\nprint(my_car.brand)",
            "with open('file.txt', 'w') as f:\n    f.write('Hello')",
            "import math\nprint(math.sqrt(25))",
            "# مشروع آلة حاسبة\nprint('حاسبة بسيطة')"
        ],
        "JavaScript": [
            "console.log('Hello, World!');",
            "let x = 5;\nlet name = 'Ahmed';\nlet isStudent = true;",
            "let age = 18;\nif (age >= 18) {\n    console.log('بالغ');\n} else {\n    console.log('قاصر');\n}",
            "for (let i = 0; i < 5; i++) {\n    console.log(i);\n}",
            "function add(a, b) {\n    return a + b;\n}\nconsole.log(add(5, 3));",
            "let numbers = [1, 2, 3, 4, 5];\nconsole.log(numbers.reduce((a, b) => a + b, 0));",
            "class Car {\n    constructor(brand) {\n        this.brand = brand;\n    }\n}\nlet myCar = new Car('Toyota');\nconsole.log(myCar.brand);",
            "const fs = require('fs');\nfs.writeFileSync('file.txt', 'Hello');",
            "console.log(Math.sqrt(25));",
            "// مشروع آلة حاسبة\nconsole.log('حاسبة بسيطة');"
        ],
        "Java": [
            "public class Main {\n    public static void main(String[] args) {\n        System.out.println('Hello, World!');\n    }\n}",
            "public class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        String name = 'Ahmed';\n        boolean isStudent = true;\n    }\n}",
            "public class Main {\n    public static void main(String[] args) {\n        int age = 18;\n        if (age >= 18) {\n            System.out.println('بالغ');\n        } else {\n            System.out.println('قاصر');\n        }\n    }\n}",
            "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i++) {\n            System.out.println(i);\n        }\n    }\n}",
            "public class Main {\n    static int add(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        System.out.println(add(5, 3));\n    }\n}",
            "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        int[] numbers = {1, 2, 3, 4, 5};\n        int sum = 0;\n        for (int n : numbers) sum += n;\n        System.out.println(sum);\n    }\n}",
            "class Car {\n    String brand;\n    Car(String b) { brand = b; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car('Toyota');\n        System.out.println(myCar.brand);\n    }\n}",
            "import java.io.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        FileWriter f = new FileWriter('file.txt');\n        f.write('Hello');\n        f.close();\n    }\n}",
            "public class Main {\n    public static void main(String[] args) {\n        System.out.println(Math.sqrt(25));\n    }\n}",
            "// مشروع آلة حاسبة\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println('حاسبة بسيطة');\n    }\n}"
        ],
        "C++": [
            "#include <iostream>\nusing namespace std;\nint main() {\n    cout << 'Hello, World!';\n    return 0;\n}",
            "#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    string name = 'Ahmed';\n    bool isStudent = true;\n    return 0;\n}",
            "#include <iostream>\nusing namespace std;\nint main() {\n    int age = 18;\n    if (age >= 18) {\n        cout << 'بالغ';\n    } else {\n        cout << 'قاصر';\n    }\n    return 0;\n}",
            "#include <iostream>\nusing namespace std;\nint main() {\n    for (int i = 0; i < 5; i++) {\n        cout << i;\n    }\n    return 0;\n}",
            "#include <iostream>\nusing namespace std;\nint add(int a, int b) {\n    return a + b;\n}\nint main() {\n    cout << add(5, 3);\n    return 0;\n}",
            "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> numbers = {1, 2, 3, 4, 5};\n    int sum = 0;\n    for (int n : numbers) sum += n;\n    cout << sum;\n    return 0;\n}",
            "#include <iostream>\nusing namespace std;\nclass Car {\npublic:\n    string brand;\n    Car(string b) { brand = b; }\n};\nint main() {\n    Car myCar('Toyota');\n    cout << myCar.brand;\n    return 0;\n}",
            "#include <iostream>\n#include <fstream>\nusing namespace std;\nint main() {\n    ofstream f('file.txt');\n    f << 'Hello';\n    return 0;\n}",
            "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    cout << sqrt(25);\n    return 0;\n}",
            "// مشروع آلة حاسبة\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << 'حاسبة بسيطة';\n    return 0;\n}"
        ],
        "C#": [
            "using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine('Hello, World!');\n    }\n}",
            "using System;\nclass Program {\n    static void Main() {\n        int x = 5;\n        string name = 'Ahmed';\n        bool isStudent = true;\n    }\n}",
            "using System;\nclass Program {\n    static void Main() {\n        int age = 18;\n        if (age >= 18) {\n            Console.WriteLine('بالغ');\n        } else {\n            Console.WriteLine('قاصر');\n        }\n    }\n}",
            "using System;\nclass Program {\n    static void Main() {\n        for (int i = 0; i < 5; i++) {\n            Console.WriteLine(i);\n        }\n    }\n}",
            "using System;\nclass Program {\n    static int Add(int a, int b) {\n        return a + b;\n    }\n    static void Main() {\n        Console.WriteLine(Add(5, 3));\n    }\n}",
            "using System;\nclass Program {\n    static void Main() {\n        int[] numbers = {1, 2, 3, 4, 5};\n        int sum = 0;\n        foreach (int n in numbers) sum += n;\n        Console.WriteLine(sum);\n    }\n}",
            "class Car {\n    public string Brand;\n    public Car(string b) { Brand = b; }\n}\nclass Program {\n    static void Main() {\n        Car myCar = new Car('Toyota');\n        Console.WriteLine(myCar.Brand);\n    }\n}",
            "using System.IO;\nclass Program {\n    static void Main() {\n        File.WriteAllText('file.txt', 'Hello');\n    }\n}",
            "using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine(Math.Sqrt(25));\n    }\n}",
            "// مشروع آلة حاسبة\nusing System;\nclass Program {\n    static void Main() {\n        Console.WriteLine('حاسبة بسيطة');\n    }\n}"
        ]
    };

    const shortExplanations = {
        "Python": [
            "🐍 **مقدمة إلى Python**\n\nPython هي لغة برمجة عالية المستوى، سهلة التعلم، وتستخدم في مجالات متعددة مثل تحليل البيانات، الذكاء الاصطناعي، تطوير الويب، والأتمتة. تم تصميم Python لتكون سهلة القراءة والكتابة، مما يجعلها مثالية للمبتدئين.",
            "📘 **المتغيرات وأنواع البيانات**\n\nالمتغيرات هي أماكن لتخزين البيانات في الذاكرة. في Python، المتغيرات سهلة جداً. تكتب اسم المتغير ثم علامة = ثم القيمة.",
            "🔀 **الجمل الشرطية**\n\nالجمل الشرطية تسمح للبرنامج باتخاذ قرارات بناءً على شروط معينة. تستخدم if و elif و else.",
            "🔄 **الحلقات**\n\nالحلقات تسمح بتكرار تنفيذ كود معين عدة مرات. تستخدم for و while.",
            "📦 **الدوال**\n\nالدوال هي كتل من الكود قابلة لإعادة الاستخدام. تساعد في تنظيم الكود وتقليل التكرار.",
            "📊 **المصفوفات والقوائم**\n\nالقوائم تستخدم لتخزين مجموعة من العناصر. يمكن إضافة أو إزالة العناصر بسهولة.",
            "🏗️ **الكائنات والكلاسات**\n\nالبرمجة الكائنية (OOP) تعتمد على الكائنات التي تحتوي على بيانات ودوال.",
            "📁 **التعامل مع الملفات**\n\nالملفات تسمح بحفظ البيانات بشكل دائم على القرص الصلب.",
            "📚 **المكتبات والأدوات**\n\nالمكتبات هي مجموعات من الدوال الجاهزة التي تسهل عليك كتابة الكود.",
            "🚀 **مشروع متكامل**\n\nهذا المشروع يطبق كل ما تعلمته في بناء آلة حاسبة بسيطة."
        ],
        "JavaScript": [
            "🌐 **مقدمة إلى JavaScript**\n\nJavaScript هي لغة البرمجة النصية للويب، تستخدم في تطوير الواجهات الأمامية والخوادم.",
            "📘 **المتغيرات في JavaScript**\n\nفي JavaScript، نستخدم let و const لتعريف المتغيرات.",
            "🔀 **الجمل الشرطية في JavaScript**\n\nتستخدم if و else و else if لاتخاذ قرارات.",
            "🔄 **الحلقات في JavaScript**\n\nتستخدم for و while لتكرار الأوامر.",
            "📦 **الدوال في JavaScript**\n\nتستخدم function لتعريف الدوال.",
            "📊 **المصفوفات في JavaScript**\n\nالمصفوفات تستخدم لتخزين مجموعات من البيانات.",
            "🏗️ **الكائنات في JavaScript**\n\nتستخدم class لإنشاء كائنات.",
            "📁 **التعامل مع الملفات في JavaScript**\n\nفي Node.js، نستخدم fs للتعامل مع الملفات.",
            "📚 **المكتبات في JavaScript**\n\nمكتبات مثل React و Vue و Node.js.",
            "🚀 **مشروع متكامل في JavaScript**\n\nبناء تطبيق ويب بسيط."
        ],
        "Java": [
            "☕ **مقدمة إلى Java**\n\nJava هي لغة برمجة كائنية التوجه، تستخدم في التطبيقات المؤسسية والأندرويد.",
            "📘 **المتغيرات في Java**\n\nفي Java، يجب تحديد نوع المتغير عند تعريفه.",
            "🔀 **الجمل الشرطية في Java**\n\nتستخدم if و else و switch.",
            "🔄 **الحلقات في Java**\n\nتستخدم for و while و do-while.",
            "📦 **الدوال في Java**\n\nتستخدم void أو نوع البيانات لتعريف الدوال.",
            "📊 **المصفوفات في Java**\n\nالمصفوفات تستخدم لتخزين مجموعات من البيانات.",
            "🏗️ **الكائنات والكلاسات في Java**\n\nتستخدم class و extends و implements.",
            "📁 **التعامل مع الملفات في Java**\n\nتستخدم File و FileWriter و BufferedReader.",
            "📚 **المكتبات في Java**\n\nمكتبات مثل Spring و Hibernate و Apache Commons.",
            "🚀 **مشروع متكامل في Java**\n\nبناء تطبيق أندرويد بسيط."
        ],
        "C++": [
            "⚡ **مقدمة إلى C++**\n\nC++ هي لغة برمجة قوية تستخدم في التطبيقات عالية الأداء.",
            "📘 **المتغيرات في C++**\n\nفي C++، يجب تحديد نوع المتغير عند تعريفه.",
            "🔀 **الجمل الشرطية في C++**\n\nتستخدم if و else و switch.",
            "🔄 **الحلقات في C++**\n\nتستخدم for و while و do-while.",
            "📦 **الدوال في C++**\n\nتستخدم void أو نوع البيانات لتعريف الدوال.",
            "📊 **المصفوفات في C++**\n\nالمصفوفات تستخدم لتخزين مجموعات من البيانات.",
            "🏗️ **الكائنات والكلاسات في C++**\n\nتستخدم class و struct.",
            "📁 **التعامل مع الملفات في C++**\n\nتستخدم fstream للتعامل مع الملفات.",
            "📚 **المكتبات في C++**\n\nمكتبات مثل STL و Boost و OpenCV.",
            "🚀 **مشروع متكامل في C++**\n\nبناء لعبة بسيطة."
        ],
        "C#": [
            "🖥️ **مقدمة إلى C#**\n\nC# هي لغة برمجة من مايكروسوفت، تستخدم في تطوير تطبيقات ويندوز والألعاب.",
            "📘 **المتغيرات في C#**\n\nفي C#، يجب تحديد نوع المتغير عند تعريفه.",
            "🔀 **الجمل الشرطية في C#**\n\nتستخدم if و else و switch.",
            "🔄 **الحلقات في C#**\n\nتستخدم for و while و foreach.",
            "📦 **الدوال في C#**\n\nتستخدم void أو نوع البيانات لتعريف الدوال.",
            "📊 **المصفوفات في C#**\n\nالمصفوفات تستخدم لتخزين مجموعات من البيانات.",
            "🏗️ **الكائنات والكلاسات في C#**\n\nتستخدم class و struct.",
            "📁 **التعامل مع الملفات في C#**\n\nتستخدم File و StreamReader و StreamWriter.",
            "📚 **المكتبات في C#**\n\nمكتبات مثل .NET و Unity و ASP.NET.",
            "🚀 **مشروع متكامل في C#**\n\nبناء تطبيق ويندوز بسيط."
        ]
    };

    for (let i = 0; i < 10; i++) {
        const code = codeExamples[lang] ? codeExamples[lang][i] || codeExamples[lang][0] : "// كود توضيحي";
        const explanation = shortExplanations[lang] ? shortExplanations[lang][i] || shortExplanations[lang][0] : "شرح مفصل عن هذا المفهوم.";

        levels.push({
            id: i,
            title: topics[i],
            video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            content: {
                fullExplanation: explanation,
                codeExample: code,
                codeExplanation: `هذا الكود يوضح كيفية استخدام ${topics[i]} في لغة ${lang}.`,
                summary: [
                    `📌 ${topics[i]} هي مفهوم أساسي.`,
                    `📌 تستخدم في جميع اللغات.`,
                    `📌 تساعد في بناء تطبيقات قوية.`
                ]
            },
            quiz: {
                multiple: [
                    { question: `ما هو المفهوم الأساسي لـ ${topics[i]}؟`, options: ["خيار 1", "خيار 2", "خيار 3", "خيار 4"], correct: 0 }
                ],
                truefalse: [
                    { question: `${topics[i]} مهم جداً في البرمجة.`, correct: true }
                ]
            }
        });
    }
    return levels;
}
