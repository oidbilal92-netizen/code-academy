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
                    "تحليل البيانات والذكاء الاصطناعي",
                    "أتمتة المهام والبرمجة النصية",
                    "تطبيقات العلم والهندسة",
                    "تطوير الألعاب (Pygame)"
                ],
                companies: ["Google", "Facebook", "Netflix", "Spotify", "NASA"]
            },
            levels: generateLevels("Python", "python")
        },
        {
            id: "javascript",
            name: "JavaScript",
            icon: "fa-brands fa-js",
            uses: {
                overview: "JavaScript هي لغة البرمجة النصية للويب، تستخدم في تطوير الواجهات الأمامية والخوادم.",
                fields: [
                    "تطوير الواجهات الأمامية (React, Vue)",
                    "تطوير الخوادم (Node.js)",
                    "تطبيقات الهواتف (React Native)",
                    "الألعاب (Phaser)",
                    "تطبيقات سطح المكتب (Electron)"
                ],
                companies: ["Google", "Facebook", "Microsoft", "Netflix", "Uber"]
            },
            levels: generateLevels("JavaScript", "javascript")
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
                    "الخوادم عالية الأداء",
                    "تطبيقات Big Data"
                ],
                companies: ["Google", "Amazon", "Netflix", "Twitter", "LinkedIn"]
            },
            levels: generateLevels("Java", "java")
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
                    "محركات قواعد البيانات"
                ],
                companies: ["Microsoft", "Google", "Apple", "Adobe", "Intel"]
            },
            levels: generateLevels("C++", "cpp")
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
                    "تطبيقات الهواتف (Xamarin)"
                ],
                companies: ["Microsoft", "Unity", "Stack Overflow", "Intel", "Dell"]
            },
            levels: generateLevels("C#", "csharp")
        }
    ]
};

function generateLevels(lang, langId) {
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

    const videos = [
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/dQw4w9WgXcQ"
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

    for (let i = 0; i < 10; i++) {
        const code = codeExamples[lang] ? codeExamples[lang][i] || codeExamples[lang][0] : "// كود توضيحي";
        levels.push({
            id: i,
            title: topics[i],
            video: videos[i],
            image: `https://via.placeholder.com/600x300/4F46E5/FFFFFF?text=${encodeURIComponent(topics[i])}`,
            content: {
                intro: `هذه مقدمة عن ${topics[i]} في لغة ${lang}.`,
                explanation: `هذا شرح مفصل عن ${topics[i]} في لغة ${lang}. تعلم المفهوم من الصفر مع أمثلة حياتية وتطبيقات عملية.`,
                codeExample: code,
                codeExplanation: `هذا الكود يوضح كيفية استخدام ${topics[i]} في لغة ${lang}. اقرأ الكود وحاول فهم كل سطر.`,
                realLife: `في التطبيقات الحقيقية، نستخدم ${topics[i]} في العديد من المشاريع مثل تطبيقات الويب والهواتف والأنظمة المدمجة.`,
                whyImportant: `${topics[i]} هي من أهم المفاهيم في البرمجة، وتستخدم في كل مشروع تقريباً. فهمها جيداً يسهل عليك تعلم باقي المفاهيم.`,
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
