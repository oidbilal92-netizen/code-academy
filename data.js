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

    const explanations = {
        "Python": [
            "🐍 **مقدمة إلى Python**\n\nPython هي لغة برمجة عالية المستوى، سهلة التعلم، وتستخدم في مجالات متعددة مثل تحليل البيانات، الذكاء الاصطناعي، تطوير الويب، والأتمتة. تم تصميم Python لتكون سهلة القراءة والكتابة، مما يجعلها مثالية للمبتدئين.\n\n**لماذا Python؟**\n- سهلة القراءة والكتابة.\n- مجتمع ضخم ومكتبات غنية.\n- تستخدم في الشركات الكبرى مثل Google و Facebook.\n\n**تركيب البيئة:**\n1. قم بتحميل Python من python.org.\n2. استخدم محرر نصوص مثل VS Code.\n3. اكتب أول برنامج: print('Hello, World!')",
            "📘 **المتغيرات وأنواع البيانات**\n\nالمتغيرات هي أماكن لتخزين البيانات في الذاكرة.\n\n**الأنواع الأساسية:**\n- int: الأعداد الصحيحة (مثال: 5).\n- float: الأعداد العشرية (مثال: 3.14).\n- str: النصوص (مثال: 'Ahmed').\n- bool: القيم المنطقية (True/False).\n\n**مثال:**\n```python\nx = 5\nname = 'Ahmed'\nis_student = True\n```\n\n**نصائح:**\n- اختر أسماء متغيرات واضحة.\n- Python يحدد النوع تلقائياً.",
            "🔀 **الجمل الشرطية**\n\nالجمل الشرطية تسمح للبرنامج باتخاذ قرارات.\n\n**الأنواع:**\n- if: تتحقق من شرط.\n- elif: تتحقق من شرط آخر.\n- else: تنفذ إذا كانت جميع الشروط خطأ.\n\n**مثال:**\n```python\nage = 18\nif age >= 18:\n    print('بالغ')\nelse:\n    print('قاصر')\n```\n\n**استخدامات:**\n- التحقق من صحة البيانات.\n- اتخاذ قرارات في الألعاب.",
            "🔄 **الحلقات**\n\nالحلقات تسمح بتكرار تنفيذ كود معين.\n\n**الأنواع:**\n- for: للتكرار لعدد محدد من المرات.\n- while: للتكرار حتى يتحقق شرط.\n\n**مثال:**\n```python\nfor i in range(5):\n    print(i)\n```\n\n**استخدامات:**\n- عرض قوائم البيانات.\n- معالجة الملفات.",
            "📦 **الدوال**\n\nالدوال هي كتل من الكود قابلة لإعادة الاستخدام.\n\n**المكونات:**\n- def: لتعريف الدالة.\n- المعلمات: القيم التي تمرر للدالة.\n- return: لإرجاع قيمة.\n\n**مثال:**\n```python\ndef add(a, b):\n    return a + b\n```\n\n**فوائد:**\n- تنظيم الكود.\n- تقليل التكرار.",
            "📊 **المصفوفات والقوائم**\n\nالقوائم تستخدم لتخزين مجموعة من العناصر.\n\n**الخصائص:**\n- مرنة (يمكن إضافة/إزالة عناصر).\n- فهرسة تبدأ من 0.\n\n**مثال:**\n```python\nnumbers = [1, 2, 3, 4, 5]\nprint(numbers[0])\n```\n\n**استخدامات:**\n- تخزين قوائم البيانات.\n- معالجة المجموعات.",
            "🏗️ **الكائنات والكلاسات**\n\nالبرمجة الكائنية (OOP) تعتمد على الكائنات.\n\n**المفاهيم:**\n- class: قالب لإنشاء كائنات.\n- object: نسخة من الكلاس.\n- __init__: دالة تهيئة.\n\n**مثال:**\n```python\nclass Car:\n    def __init__(self, brand):\n        self.brand = brand\n```\n\n**فوائد:**\n- تنظيم الكود.\n- إعادة الاستخدام.",
            "📁 **التعامل مع الملفات**\n\nالملفات تسمح بحفظ البيانات بشكل دائم.\n\n**الخطوات:**\n1. فتح الملف باستخدام open().\n2. القراءة/الكتابة.\n3. إغلاق الملف.\n\n**مثال:**\n```python\nwith open('file.txt', 'w') as f:\n    f.write('Hello')\n```\n\n**استخدامات:**\n- حفظ البيانات.\n- قراءة الملفات الخارجية.",
            "📚 **المكتبات والأدوات**\n\nالمكتبات هي مجموعات من الدوال الجاهزة.\n\n**أشهر المكتبات:**\n- NumPy: للعمليات الرياضية.\n- Pandas: لتحليل البيانات.\n- Matplotlib: للرسم البياني.\n- Django: لتطوير الويب.\n\n**مثال:**\n```python\nimport math\nprint(math.sqrt(25))\n```",
            "🚀 **مشروع متكامل**\n\nهذا المشروع يطبق كل ما تعلمته.\n\n**الأهداف:**\n- بناء آلة حاسبة بسيطة.\n- استخدام المتغيرات، الشروط، الحلقات، الدوال.\n\n**مثال:**\n```python\ndef calculator():\n    print('آلة حاسبة')\n    # كود المشروع\n```\n\n**الخطوة التالية:**\n- تطوير المشروع لإضافة ميزات جديدة."
        ],
        "JavaScript": [
            "🌐 **مقدمة إلى JavaScript**\n\nJavaScript هي لغة البرمجة النصية للويب، تستخدم في تطوير الواجهات الأمامية والخوادم. تعتبر JavaScript لغة حيوية تجعل المواقع تفاعلية.\n\n**الاستخدامات:**\n- تطوير الواجهات الأمامية (React, Vue).\n- تطوير الخوادم (Node.js).\n- تطبيقات الهواتف (React Native).\n- الألعاب (Phaser).\n\n**تركيب البيئة:**\n1. استخدم متصفح ويب.\n2. اكتب كود في ملف .html.\n3. استخدم console.log() للطباعة.",
            "📘 **المتغيرات في JavaScript**\n\n**الأنواع:**\n- let: متغير قابل للتغيير.\n- const: متغير ثابت.\n- var: الطريقة القديمة (لا تُفضل).\n\n**مثال:**\n```javascript\nlet name = 'Ahmed';\nconst age = 25;\n```\n\n**نصائح:**\n- استخدم let و const فقط.\n- JavaScript يميز بين الأحرف الكبيرة والصغيرة.",
            "🔀 **الجمل الشرطية في JavaScript**\n\n**الأنواع:**\n- if: تتحقق من شرط.\n- else if: تتحقق من شرط آخر.\n- else: تنفذ إذا كانت جميع الشروط خطأ.\n\n**مثال:**\n```javascript\nlet age = 18;\nif (age >= 18) {\n    console.log('بالغ');\n} else {\n    console.log('قاصر');\n}\n```\n\n**استخدامات:**\n- التحقق من صحة البيانات.\n- اتخاذ قرارات في التطبيقات.",
            "🔄 **الحلقات في JavaScript**\n\n**الأنواع:**\n- for: للتكرار لعدد محدد من المرات.\n- while: للتكرار حتى يتحقق شرط.\n\n**مثال:**\n```javascript\nfor (let i = 0; i < 5; i++) {\n    console.log(i);\n}\n```\n\n**استخدامات:**\n- عرض قوائم البيانات.\n- معالجة المصفوفات.",
            "📦 **الدوال في JavaScript**\n\n**المكونات:**\n- function: لتعريف الدالة.\n- المعلمات: القيم التي تمرر للدالة.\n- return: لإرجاع قيمة.\n\n**مثال:**\n```javascript\nfunction add(a, b) {\n    return a + b;\n}\n```\n\n**فوائد:**\n- تنظيم الكود.\n- إعادة الاستخدام.",
            "📊 **المصفوفات في JavaScript**\n\n**الخصائص:**\n- مرنة.\n- فهرسة تبدأ من 0.\n\n**مثال:**\n```javascript\nlet numbers = [1, 2, 3, 4, 5];\nconsole.log(numbers[0]);\n```\n\n**استخدامات:**\n- تخزين قوائم البيانات.\n- معالجة المجموعات.",
            "🏗️ **الكائنات في JavaScript**\n\n**المفاهيم:**\n- class: قالب لإنشاء كائنات.\n- constructor: دالة تهيئة.\n\n**مثال:**\n```javascript\nclass Car {\n    constructor(brand) {\n        this.brand = brand;\n    }\n}\n```\n\n**فوائد:**\n- تنظيم الكود.\n- إعادة الاستخدام.",
            "📁 **التعامل مع الملفات في JavaScript**\n\nفي Node.js، نستخدم fs للتعامل مع الملفات.\n\n**مثال:**\n```javascript\nconst fs = require('fs');\nfs.writeFileSync('file.txt', 'Hello');\n```\n\n**استخدامات:**\n- حفظ البيانات.\n- قراءة الملفات الخارجية.",
            "📚 **المكتبات في JavaScript**\n\n**أشهر المكتبات:**\n- React: لبناء الواجهات.\n- Node.js: للخوادم.\n- Express: لإدارة الخوادم.\n\n**مثال:**\n```javascript\nconsole.log(Math.sqrt(25));\n```",
            "🚀 **مشروع متكامل في JavaScript**\n\nبناء تطبيق ويب بسيط.\n\n**الأهداف:**\n- استخدام المتغيرات، الشروط، الحلقات، الدوال.\n\n**مثال:**\n```javascript\nfunction app() {\n    console.log('تطبيقي');\n}\n```"
        ],
        "Java": [
            "☕ **مقدمة إلى Java**\n\nJava هي لغة برمجة كائنية التوجه، تستخدم في التطبيقات المؤسسية والأندرويد. تتميز Java بأنها محمولة (تعمل على أي نظام تشغيل).\n\n**المميزات:**\n- محمولة.\n- تستخدم في التطبيقات المؤسسية.\n- لغة قوية الأنواع.\n\n**تركيب البيئة:**\n1. تثبيت JDK.\n2. استخدام IntelliJ IDEA أو Eclipse.\n3. كتابة أول برنامج: System.out.println('Hello');",
            "📘 **المتغيرات في Java**\n\n**الأنواع:**\n- int: أعداد صحيحة.\n- double: أعداد عشرية.\n- String: نصوص.\n- boolean: قيم منطقية.\n\n**مثال:**\n```java\nint x = 5;\nString name = 'Ahmed';\n```\n\n**نصائح:**\n- حدد النوع عند التعريف.\n- Java حساسة لحالة الأحرف.",
            "🔀 **الجمل الشرطية في Java**\n\n**الأنواع:**\n- if: تتحقق من شرط.\n- else if: تتحقق من شرط آخر.\n- else: تنفذ إذا كانت جميع الشروط خطأ.\n\n**مثال:**\n```java\nint age = 18;\nif (age >= 18) {\n    System.out.println('بالغ');\n} else {\n    System.out.println('قاصر');\n}\n```\n\n**استخدامات:**\n- التحقق من صحة البيانات.",
            "🔄 **الحلقات في Java**\n\n**الأنواع:**\n- for: للتكرار لعدد محدد من المرات.\n- while: للتكرار حتى يتحقق شرط.\n\n**مثال:**\n```java\nfor (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n```",
            "📦 **الدوال في Java**\n\n**المكونات:**\n- void: إذا كانت الدالة لا ترجع قيمة.\n- return: لإرجاع قيمة.\n\n**مثال:**\n```java\nstatic int add(int a, int b) {\n    return a + b;\n}\n```\n\n**فوائد:**\n- تنظيم الكود.\n- إعادة الاستخدام.",
            "📊 **المصفوفات في Java**\n\n**الخصائص:**\n- فهرسة تبدأ من 0.\n\n**مثال:**\n```java\nint[] numbers = {1, 2, 3, 4, 5};\nSystem.out.println(numbers[0]);\n```",
            "🏗️ **الكائنات والكلاسات في Java**\n\n**المفاهيم:**\n- class: قالب لإنشاء كائنات.\n- new: لإنشاء كائن.\n\n**مثال:**\n```java\nclass Car {\n    String brand;\n    Car(String b) { brand = b; }\n}\nCar myCar = new Car('Toyota');\n```",
            "📁 **التعامل مع الملفات في Java**\n\n**مثال:**\n```java\nimport java.io.*;\nFileWriter f = new FileWriter('file.txt');\nf.write('Hello');\nf.close();\n```",
            "📚 **المكتبات في Java**\n\n**أشهر المكتبات:**\n- Spring: لتطوير الويب.\n- Hibernate: للتعامل مع قواعد البيانات.\n\n**مثال:**\n```java\nSystem.out.println(Math.sqrt(25));\n```",
            "🚀 **مشروع متكامل في Java**\n\nبناء تطبيق أندرويد بسيط."
        ],
        "C++": [
            "⚡ **مقدمة إلى C++**\n\nC++ هي لغة برمجة قوية تستخدم في التطبيقات عالية الأداء مثل الألعاب والأنظمة المدمجة.\n\n**المميزات:**\n- أداء عالي.\n- تحكم في الذاكرة.\n- تستخدم في الشركات الكبرى.\n\n**تركيب البيئة:**\n1. تثبيت مترجم (GCC).\n2. استخدام VS Code أو CLion.\n3. كتابة أول برنامج: cout << 'Hello';",
            "📘 **المتغيرات في C++**\n\n**الأنواع:**\n- int: أعداد صحيحة.\n- float: أعداد عشرية.\n- string: نصوص.\n- bool: قيم منطقية.\n\n**مثال:**\n```cpp\nint x = 5;\nstring name = 'Ahmed';\n```\n\n**نصائح:**\n- حدد النوع عند التعريف.\n- استخدم using namespace std; لتسهيل الكتابة.",
            "🔀 **الجمل الشرطية في C++**\n\n**الأنواع:**\n- if: تتحقق من شرط.\n- else if: تتحقق من شرط آخر.\n- else: تنفذ إذا كانت جميع الشروط خطأ.\n\n**مثال:**\n```cpp\nint age = 18;\nif (age >= 18) {\n    cout << 'بالغ';\n} else {\n    cout << 'قاصر';\n}\n```",
            "🔄 **الحلقات في C++**\n\n**الأنواع:**\n- for: للتكرار لعدد محدد من المرات.\n- while: للتكرار حتى يتحقق شرط.\n\n**مثال:**\n```cpp\nfor (int i = 0; i < 5; i++) {\n    cout << i;\n}\n```",
            "📦 **الدوال في C++**\n\n**المكونات:**\n- void: إذا كانت الدالة لا ترجع قيمة.\n- return: لإرجاع قيمة.\n\n**مثال:**\n```cpp\nint add(int a, int b) {\n    return a + b;\n}\n```\n\n**فوائد:**\n- تنظيم الكود.\n- إعادة الاستخدام.",
            "📊 **المصفوفات في C++**\n\n**الخصائص:**\n- فهرسة تبدأ من 0.\n\n**مثال:**\n```cpp\nint numbers[] = {1, 2, 3, 4, 5};\ncout << numbers[0];\n```",
            "🏗️ **الكائنات والكلاسات في C++**\n\n**المفاهيم:**\n- class: قالب لإنشاء كائنات.\n\n**مثال:**\n```cpp\nclass Car {\npublic:\n    string brand;\n    Car(string b) { brand = b; }\n};\nCar myCar('Toyota');\n```",
            "📁 **التعامل مع الملفات في C++**\n\n**مثال:**\n```cpp\n#include <fstream>\nofstream f('file.txt');\nf << 'Hello';\n```",
            "📚 **المكتبات في C++**\n\n**أشهر المكتبات:**\n- STL: مكتبة القوالب القياسية.\n- OpenCV: للرؤية الحاسوبية.\n\n**مثال:**\n```cpp\n#include <cmath>\ncout << sqrt(25);\n```",
            "🚀 **مشروع متكامل في C++**\n\nبناء لعبة بسيطة."
        ],
        "C#": [
            "🖥️ **مقدمة إلى C#**\n\nC# هي لغة برمجة من مايكروسوفت، تستخدم في تطوير تطبيقات ويندوز والألعاب باستخدام Unity.\n\n**المميزات:**\n- لغة متعددة الاستخدامات.\n- مجتمع ضخم.\n- تستخدم في الشركات الكبرى.\n\n**تركيب البيئة:**\n1. تثبيت .NET SDK.\n2. استخدام Visual Studio.\n3. كتابة أول برنامج: Console.WriteLine('Hello');",
            "📘 **المتغيرات في C#**\n\n**الأنواع:**\n- int: أعداد صحيحة.\n- double: أعداد عشرية.\n- string: نصوص.\n- bool: قيم منطقية.\n\n**مثال:**\n```csharp\nint x = 5;\nstring name = 'Ahmed';\n```\n\n**نصائح:**\n- حدد النوع عند التعريف.\n- استخدم Console.WriteLine() للطباعة.",
            "🔀 **الجمل الشرطية في C#**\n\n**الأنواع:**\n- if: تتحقق من شرط.\n- else if: تتحقق من شرط آخر.\n- else: تنفذ إذا كانت جميع الشروط خطأ.\n\n**مثال:**\n```csharp\nint age = 18;\nif (age >= 18) {\n    Console.WriteLine('بالغ');\n} else {\n    Console.WriteLine('قاصر');\n}\n```",
            "🔄 **الحلقات في C#**\n\n**الأنواع:**\n- for: للتكرار لعدد محدد من المرات.\n- while: للتكرار حتى يتحقق شرط.\n\n**مثال:**\n```csharp\nfor (int i = 0; i < 5; i++) {\n    Console.WriteLine(i);\n}\n```",
            "📦 **الدوال في C#**\n\n**المكونات:**\n- void: إذا كانت الدالة لا ترجع قيمة.\n- return: لإرجاع قيمة.\n\n**مثال:**\n```csharp\nstatic int Add(int a, int b) {\n    return a + b;\n}\n```\n\n**فوائد:**\n- تنظيم الكود.\n- إعادة الاستخدام.",
            "📊 **المصفوفات في C#**\n\n**الخصائص:**\n- فهرسة تبدأ من 0.\n\n**مثال:**\n```csharp\nint[] numbers = {1, 2, 3, 4, 5};\nConsole.WriteLine(numbers[0]);\n```",
            "🏗️ **الكائنات والكلاسات في C#**\n\n**المفاهيم:**\n- class: قالب لإنشاء كائنات.\n\n**مثال:**\n```csharp\nclass Car {\n    public string Brand;\n    public Car(string b) { Brand = b; }\n}\nCar myCar = new Car('Toyota');\n```",
            "📁 **التعامل مع الملفات في C#**\n\n**مثال:**\n```csharp\nusing System.IO;\nFile.WriteAllText('file.txt', 'Hello');\n```",
            "📚 **المكتبات في C#**\n\n**أشهر المكتبات:**\n- .NET: الإطار الأساسي.\n- Unity: للألعاب.\n\n**مثال:**\n```csharp\nConsole.WriteLine(Math.Sqrt(25));\n```",
            "🚀 **مشروع متكامل في C#**\n\nبناء تطبيق ويندوز بسيط."
        ]
    };

    for (let i = 0; i < 10; i++) {
        const code = codeExamples[lang] ? codeExamples[lang][i] || codeExamples[lang][0] : "// كود توضيحي";
        const explanation = explanations[lang] ? explanations[lang][i] || explanations[lang][0] : "شرح مفصل عن هذا المفهوم.";

        levels.push({
            id: i,
            title: topics[i],
            video: "", // تم إزالة الفيديو نهائياً
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
