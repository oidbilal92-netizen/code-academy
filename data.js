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
            levels: generateDetailedLevels("Python", "python")
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
            levels: generateDetailedLevels("JavaScript", "javascript")
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
                    "تطبيقات Big Data",
                    "تطبيقات سطح المكتب"
                ],
                companies: ["Google", "Amazon", "Netflix", "Twitter", "LinkedIn"]
            },
            levels: generateDetailedLevels("Java", "java")
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
            levels: generateDetailedLevels("C++", "cpp")
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
            levels: generateDetailedLevels("C#", "csharp")
        }
    ]
};

// ===== دالة توليد دروس مع شرح طويل جداً =====
function generateDetailedLevels(lang, langId) {
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

    // ===== شرح طويل جداً لكل مفهوم =====
    const longExplanations = {
        "Python": [
            `### 🐍 مقدمة إلى Python
Python هي لغة برمجة عالية المستوى، سهلة التعلم، وتستخدم في مجالات متعددة مثل تحليل البيانات، الذكاء الاصطناعي، تطوير الويب، والأتمتة. تم تصميم Python لتكون سهلة القراءة والكتابة، مما يجعلها مثالية للمبتدئين.

### 🛠️ تركيب البيئة
لبدء البرمجة بلغة Python، تحتاج إلى تثبيت Python من الموقع الرسمي (python.org). يمكنك استخدام محرر نصوص مثل VS Code أو PyCharm، أو استخدام بيئة Jupyter Notebook للتفاعل المباشر.

### 📘 المتغيرات والبيانات
في Python، المتغيرات هي أماكن لتخزين البيانات. يتم تعريف المتغير بكتابة اسمه ثم علامة = ثم القيمة. مثال: \`x = 5\`. Python يحدد نوع المتغير تلقائياً بناءً على القيمة المعطاة. الأنواع الأساسية هي: int (أعداد صحيحة)، float (أعداد عشرية)، str (نصوص)، bool (قيم منطقية).

### 💡 لماذا نتعلم هذا؟
المتغيرات هي أساس أي برنامج. بدونها، لا يمكنك تخزين البيانات أو التعامل معها. فهم المتغيرات يساعدك على بناء تطبيقات معقدة مثل تطبيقات الويب، الألعاب، وأنظمة الذكاء الاصطناعي.

### 🌍 تطبيقات واقعية
في تطبيق إدارة مدرسة، نستخدم متغيرات لتخزين اسم الطالب، عمره، درجاته، إلخ. في تحليل البيانات، نستخدم متغيرات لتخزين القيم التي نحللها.

### ⚠️ أخطاء شائعة
- استخدام متغير قبل تعريفه.
- كتابة اسم متغير بطريقة غير واضحة.
- خلط أنواع البيانات (مثل جمع نص ورقم).`,

            `### 📘 المتغيرات وأنواع البيانات في Python
في هذا الدرس، سنتعمق في فهم المتغيرات وأنواع البيانات في Python. المتغيرات هي وسيلة لتخزين البيانات في الذاكرة، ويمكن تغيير قيمتها في أي وقت.

### 🧠 أنواع البيانات الأساسية
- **int**: الأعداد الصحيحة مثل 5، 10، -3.
- **float**: الأعداد العشرية مثل 3.14، 2.0.
- **str**: النصوص مثل "أحمد"، 'Hello'.
- **bool**: القيم المنطقية True أو False.

### 🔄 تحويل الأنواع
يمكنك تحويل نوع البيانات باستخدام دوال مثل int()، float()، str(). مثال: \`x = int("5")\` يحول النص "5" إلى رقم 5.

### 💡 نصائح عملية
- اختر أسماء متغيرات تعبر عن محتواها (مثل student_name بدلاً من s).
- استخدم التعليقات لتوضيح الكود.
- تذكر أن Python حساس لحالة الأحرف (case-sensitive).

### 🌍 استخدامات في الواقع
في تطبيقات تحليل البيانات، نستخدم المتغيرات لتخزين القيم الإحصائية مثل المتوسط والانحراف المعياري. في تطبيقات الويب، نستخدم المتغيرات لتخزين بيانات المستخدم مثل اسمه وبريده الإلكتروني.`,

            `### 🔀 الجمل الشرطية في Python
الجمل الشرطية تسمح للبرنامج باتخاذ قرارات بناءً على شروط معينة. هي أساس المنطق في البرمجة.

### 🧠 كيف تعمل؟
- **if**: تتحقق من شرط معين، إذا كان صحيحاً تنفذ الكود الموجود بداخلها.
- **elif**: تتحقق من شرط آخر إذا كان الشرط الأول خطأ.
- **else**: تنفذ إذا كانت جميع الشروط السابقة خطأ.

### 📝 مثال عملي
\`\`\`python
age = 18
if age >= 18:
    print('أنت بالغ')
else:
    print('أنت قاصر')
\`\`\`
في هذا المثال، إذا كان العمر 18 أو أكثر، ستطبع "أنت بالغ"، وإلا ستطبع "أنت قاصر".

### 💡 نصائح
- استخدم الأقواس لتوضيح الأولويات في الشروط المعقدة.
- تأكد من كتابة النقطتين (:) بعد كل شرط.
- انتبه إلى المسافات البادئة (Indentation) فهي مهمة في Python.

### 🌍 استخدامات واقعية
في نظام تسجيل الدخول، نتحقق من اسم المستخدم وكلمة المرور. في تطبيقات الألعاب، نستخدم الجمل الشرطية لتحديد الفائز أو الخاسر.`,

            `### 🔄 الحلقات في Python
الحلقات تسمح بتكرار تنفيذ كود معين عدة مرات، مما يوفر الوقت والجهد.

### 🧠 أنواع الحلقات
- **for**: تستخدم للتكرار لعدد محدد من المرات (مثل التكرار على قائمة).
- **while**: تستخدم للتكرار حتى يتحقق شرط معين.

### 📝 مثال عملي
\`\`\`python
# حلقة for
for i in range(5):
    print(i)

# حلقة while
x = 0
while x < 5:
    print(x)
    x += 1
\`\`\`

### 💡 نصائح
- استخدم \`break\` للخروج من الحلقة مبكراً.
- استخدم \`continue\` لتخطي التكرار الحالي.
- تأكد من أن شرط الحلقة while سيتحقق في النهاية لتجنب الحلقات اللانهائية.

### 🌍 استخدامات واقعية
في تطبيقات قائمة المشتريات، نستخدم حلقة لعرض جميع العناصر. في تحليل البيانات، نستخدم الحلقات لمعالجة كميات كبيرة من البيانات.`,

            `### 📦 الدوال في Python
الدوال هي كتل من الكود قابلة لإعادة الاستخدام. تساعد في تنظيم الكود وتقليل التكرار.

### 🧠 كيف تعمل؟
- **تعريف الدالة**: باستخدام الكلمة \`def\`.
- **استدعاء الدالة**: بكتابة اسمها مع الأقواس.
- **المعلمات**: قيم تمرر إلى الدالة.
- **قيمة الإرجاع**: النتيجة التي ترجعها الدالة باستخدام \`return\`.

### 📝 مثال عملي
\`\`\`python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # الناتج: 8
\`\`\`

### 💡 نصائح
- اختر أسماء دوال تعبر عن وظيفتها.
- استخدم المعلمات الافتراضية لتسهيل الاستخدام.
- وثق الدوال باستخدام Docstrings.

### 🌍 استخدامات واقعية
في تطبيقات الويب، نستخدم الدوال لمعالجة طلبات المستخدمين. في تحليل البيانات، نستخدم الدوال لتطبيق عمليات حسابية على البيانات.`,

            `### 📊 المصفوفات والقوائم في Python
القوائم هي هياكل بيانات تستخدم لتخزين مجموعة من العناصر. يمكن أن تحتوي على أي نوع من البيانات.

### 🧠 خصائص القوائم
- **مرنة**: يمكن إضافة أو إزالة العناصر.
- **قابلة للتكرار**: يمكن التكرار على عناصرها باستخدام الحلقات.
- **فهرسة**: تبدأ من 0.

### 📝 مثال عملي
\`\`\`python
numbers = [1, 2, 3, 4, 5]
print(numbers[0])  # العنصر الأول: 1
numbers.append(6)  # إضافة عنصر
print(sum(numbers))  # مجموع العناصر: 21
\`\`\`

### 💡 نصائح
- استخدم دوال القوائم مثل append()، insert()، remove().
- استخدم slicing للوصول إلى أجزاء من القائمة.
- تأكد من فهم الفرق بين القوائم والمصفوفات في اللغات الأخرى.

### 🌍 استخدامات واقعية
في تطبيقات إدارة المخزون، نستخدم القوائم لتخزين قائمة المنتجات. في تحليل البيانات، نستخدم القوائم لتخزين القيم التي نحللها.`,

            `### 🏗️ الكائنات والكلاسات في Python
البرمجة الكائنية (OOP) هي نموذج برمجي يعتمد على الكائنات التي تحتوي على بيانات ودوال.

### 🧠 مفاهيم أساسية
- **كلاس (Class):** قالب لإنشاء كائنات.
- **كائن (Object):** نسخة من الكلاس.
- **خصائص (Attributes):** بيانات الكائن.
- **دوال (Methods):** دوال تابعة للكائن.

### 📝 مثال عملي
\`\`\`python
class Car:
    def __init__(self, brand):
        self.brand = brand

my_car = Car('Toyota')
print(my_car.brand)  # الناتج: Toyota
\`\`\`

### 💡 نصائح
- استخدم \`__init__\` لتهيئة الكائن.
- استخدم \`self\` للإشارة إلى الكائن الحالي.
- استخدم الوراثة لإعادة استخدام الكود.

### 🌍 استخدامات واقعية
في تطبيقات الألعاب، نستخدم الكلاسات لتمثيل الشخصيات والأعداء. في تطبيقات الأعمال، نستخدم الكلاسات لتمثيل العملاء والطلبات.`,

            `### 📁 التعامل مع الملفات في Python
التعامل مع الملفات يسمح للبرنامج بقراءة وكتابة البيانات على القرص الصلب.

### 🧠 كيفية التعامل مع الملفات
- **فتح الملف**: باستخدام \`open()\`.
- **القراءة**: باستخدام \`read()\` أو \`readlines()\`.
- **الكتابة**: باستخدام \`write()\`.
- **الإغلاق**: باستخدام \`close()\`.

### 📝 مثال عملي
\`\`\`python
# كتابة إلى ملف
with open('file.txt', 'w') as f:
    f.write('Hello, World!')

# قراءة من ملف
with open('file.txt', 'r') as f:
    content = f.read()
    print(content)
\`\`\`

### 💡 نصائح
- استخدم \`with\` لضمان إغلاق الملف تلقائياً.
- استخدم أنماط الفتح المختلفة ('r' للقراءة، 'w' للكتابة، 'a' للإلحاق).
- تأكد من معالجة الأخطاء باستخدام try/except.

### 🌍 استخدامات واقعية
في تطبيقات تسجيل النشاطات (Logging)، نستخدم الملفات لتخزين سجلات النظام. في تطبيقات تحليل البيانات، نستخدم الملفات لقراءة مجموعات البيانات.`,

            `### 📚 المكتبات والأدوات في Python
المكتبات هي مجموعات من الدوال الجاهزة التي تسهل عليك كتابة الكود.

### 🧠 أشهر المكتبات
- **NumPy**: للتعامل مع المصفوفات والعمليات الرياضية.
- **Pandas**: لتحليل البيانات.
- **Matplotlib**: للرسم البياني.
- **Django/Flask**: لتطوير الويب.
- **TensorFlow/PyTorch**: للذكاء الاصطناعي.

### 📝 مثال عملي
\`\`\`python
import math
print(math.sqrt(25))  # الناتج: 5.0

import numpy as np
arr = np.array([1, 2, 3])
print(arr.mean())  # الناتج: 2.0
\`\`\`

### 💡 نصائح
- استخدم \`pip\` لتثبيت المكتبات.
- اقرأ وثائق المكتبة لفهم إمكانياتها.
- ابدأ بمكتبات بسيطة ثم انتقل إلى المكتبات المتقدمة.

### 🌍 استخدامات واقعية
في مشاريع تحليل البيانات، نستخدم Pandas و NumPy. في مشاريع الويب، نستخدم Django أو Flask. في مشاريع الذكاء الاصطناعي، نستخدم TensorFlow أو PyTorch.`,

            `### 🚀 مشروع متكامل في Python
في هذا المشروع، سنقوم ببناء آلة حاسبة بسيطة باستخدام كل ما تعلمناه.

### 🧠 مكونات المشروع
- **المتغيرات**: لتخزين الأرقام والعمليات.
- **الجمل الشرطية**: لتحديد العملية المناسبة.
- **الحلقات**: لتكرار الطلب من المستخدم.
- **الدوال**: لتنظيم الكود.
- **المصفوفات**: لتخزين العمليات السابقة.

### 📝 مثال عملي
\`\`\`python
def calculator():
    print('آلة حاسبة بسيطة')
    while True:
        op = input('اختر عملية (+، -، *، /) أو q للخروج: ')
        if op == 'q':
            break
        if op in ['+', '-', '*', '/']:
            a = float(input('الرقم الأول: '))
            b = float(input('الرقم الثاني: '))
            if op == '+':
                print(a + b)
            elif op == '-':
                print(a - b)
            elif op == '*':
                print(a * b)
            elif op == '/':
                print(a / b)
        else:
            print('عملية غير صحيحة')

calculator()
\`\`\`

### 💡 نصائح
- ابدأ بمشروع صغير وطوره تدريجياً.
- استخدم التعليقات لتوثيق الكود.
- اختبر المشروع جيداً قبل نشره.

### 🌍 استخدامات واقعية
هذا المشروع يجعلك جاهزاً لبناء تطبيقات أكثر تعقيداً مثل تطبيقات الويب والألعاب.`
        ],
        "JavaScript": [
            `### 🌐 مقدمة إلى JavaScript
JavaScript هي لغة البرمجة النصية للويب. تستخدم في تطوير الواجهات الأمامية والخوادم. JavaScript تمكنك من إضافة التفاعل إلى صفحات الويب.

### 🛠️ تركيب البيئة
لبدء البرمجة بلغة JavaScript، تحتاج إلى متصفح ويب (مثل Chrome) ومحرر نصوص (مثل VS Code). يمكنك كتابة الكود في ملف .html أو استخدام بيئة Node.js لتشغيل الكود على الخادم.

### 📘 المتغيرات
في JavaScript، نستخدم \`let\` و \`const\` لتعريف المتغيرات. \`let\` تستخدم للمتغيرات التي يمكن تغيير قيمتها، بينما \`const\` تستخدم للمتغيرات الثابتة.

### 💡 لماذا نتعلم هذا؟
JavaScript هي لغة الويب الأساسية. تعلمها يسمح لك ببناء مواقع وتطبيقات ويب تفاعلية.

### 🌍 تطبيقات واقعية
في تطبيقات الويب، نستخدم JavaScript للتحقق من صحة البيانات، إنشاء تأثيرات بصرية، والتواصل مع الخوادم.`,
            `### 📘 المتغيرات وأنواع البيانات في JavaScript
في هذا الدرس، سنتعمق في فهم المتغيرات وأنواع البيانات في JavaScript.

### 🧠 أنواع البيانات الأساسية
- **Number**: الأعداد مثل 5، 3.14.
- **String**: النصوص مثل "أحمد".
- **Boolean**: القيم المنطقية true أو false.
- **Undefined**: قيمة غير معرفة.
- **Null**: قيمة فارغة.

### 🔄 تحويل الأنواع
يمكنك تحويل نوع البيانات باستخدام دوال مثل String()، Number()، Boolean().

### 💡 نصائح عملية
- استخدم \`let\` للمتغيرات التي تتغير، و \`const\` للثوابت.
- تجنب استخدام \`var\` لأنه قديم ويسبب مشاكل.
- استخدم أسماء متغيرات واضحة.`
        ],
        "Java": [
            `### ☕ مقدمة إلى Java
Java هي لغة برمجة كائنية التوجه، تستخدم في التطبيقات المؤسسية والأندرويد. تتميز Java بأنها محمولة (تعمل على أي نظام تشغيل).

### 🛠️ تركيب البيئة
لبدء البرمجة بلغة Java، تحتاج إلى تثبيت JDK (Java Development Kit) من موقع Oracle. يمكنك استخدام IntelliJ IDEA أو Eclipse كمحرر.

### 📘 المتغيرات
في Java، يجب تحديد نوع المتغير عند تعريفه. مثال: \`int x = 5;\`. Java هي لغة قوية الأنواع (Strongly Typed).

### 💡 لماذا نتعلم هذا؟
Java هي لغة تستخدم في الشركات الكبيرة، وتعلمها يفتح لك فرص عمل في مجالات متعددة.

### 🌍 تطبيقات واقعية
في تطبيقات الأندرويد، نستخدم Java لتطوير التطبيقات. في الأنظمة المؤسسية، نستخدم Java لبناء خوادم قوية.`
        ],
        "C++": [
            `### ⚡ مقدمة إلى C++
C++ هي لغة برمجة قوية تستخدم في التطبيقات عالية الأداء مثل الألعاب والأنظمة المدمجة.

### 🛠️ تركيب البيئة
لبدء البرمجة بلغة C++، تحتاج إلى تثبيت مترجم مثل GCC أو Visual Studio. يمكنك استخدام VS Code أو CLion كمحرر.

### 📘 المتغيرات
في C++، يجب تحديد نوع المتغير عند تعريفه. مثال: \`int x = 5;\`. C++ هي لغة قوية الأنواع.

### 💡 لماذا نتعلم هذا؟
C++ تمنحك تحكماً كاملاً في الذاكرة، وهي مثالية للتطبيقات التي تتطلب أداءً عالياً.

### 🌍 تطبيقات واقعية
في تطوير الألعاب، نستخدم C++ مع محركات مثل Unreal Engine. في الأنظمة المدمجة، نستخدم C++ للتحكم في الأجهزة.`
        ],
        "C#": [
            `### 🖥️ مقدمة إلى C#
C# هي لغة برمجة من مايكروسوفت، تستخدم في تطوير تطبيقات ويندوز والألعاب باستخدام Unity.

### 🛠️ تركيب البيئة
لبدء البرمجة بلغة C#، تحتاج إلى تثبيت .NET SDK و Visual Studio. يمكنك استخدام VS Code أيضاً.

### 📘 المتغيرات
في C#، يجب تحديد نوع المتغير عند تعريفه. مثال: \`int x = 5;\`. C# هي لغة قوية الأنواع.

### 💡 لماذا نتعلم هذا؟
C# هي لغة متعددة الاستخدامات، وتستخدم في تطبيقات سطح المكتب، الويب، والألعاب.

### 🌍 تطبيقات واقعية
في تطوير الألعاب، نستخدم C# مع Unity. في تطبيقات الويب، نستخدم C# مع ASP.NET.`
        ]
    };

    for (let i = 0; i < 10; i++) {
        const code = codeExamples[lang] ? codeExamples[lang][i] || codeExamples[lang][0] : "// كود توضيحي";
        const explanation = longExplanations[lang] ? longExplanations[lang][i] || longExplanations[lang][0] : "شرح مفصل عن هذا المفهوم.";

        levels.push({
            id: i,
            title: topics[i],
            video: videos[i],
            image: `https://via.placeholder.com/600x300/4F46E5/FFFFFF?text=${encodeURIComponent(topics[i])}`,
            content: {
                fullExplanation: explanation,
                codeExample: code,
                codeExplanation: `هذا الكود يوضح كيفية استخدام ${topics[i]} في لغة ${lang}. اقرأ الكود وحاول فهم كل سطر.`,
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
