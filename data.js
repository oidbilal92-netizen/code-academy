const APP_DATA = {
    tracks: [
        { id: "python", name: "Python", icon: "fa-brands fa-python", levels: generateLevels("Python") },
        { id: "javascript", name: "JavaScript", icon: "fa-brands fa-js", levels: generateLevels("JavaScript") },
        { id: "cpp", name: "C++", icon: "fa-solid fa-c", levels: generateLevels("C++") },
        { id: "java", name: "Java", icon: "fa-brands fa-java", levels: generateLevels("Java") },
        { id: "csharp", name: "C#", icon: "fa-solid fa-code", levels: generateLevels("C#") },
        { id: "php", name: "PHP", icon: "fa-brands fa-php", levels: generateLevels("PHP") },
        { id: "swift", name: "Swift", icon: "fa-solid fa-code", levels: generateLevels("Swift") },
        { id: "kotlin", name: "Kotlin", icon: "fa-solid fa-code", levels: generateLevels("Kotlin") },
        { id: "go", name: "Go", icon: "fa-solid fa-code", levels: generateLevels("Go") },
        { id: "rust", name: "Rust", icon: "fa-solid fa-code", levels: generateLevels("Rust") }
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
            "x = 5\ny = 3\nprint(x + y)",
            "age = 18\nif age >= 18:\n    print('بالغ')",
            "for i in range(5):\n    print(i)",
            "def add(a,b):\n    return a+b\nprint(add(2,3))",
            "arr = [1,2,3]\nfor i in arr:\n    print(i)",
            "class Person:\n    def __init__(self,name):\n        self.name=name\np=Person('Ahmed')\nprint(p.name)",
            "with open('file.txt','w') as f:\n    f.write('Hello')",
            "import math\nprint(math.sqrt(16))",
            "# مشروع: آلة حاسبة\nprint('مشروع متكامل')"
        ],
        "JavaScript": [
            "console.log('Hello, World!');",
            "let x = 5; let y = 3; console.log(x + y);",
            "let age = 18; if(age >= 18) console.log('بالغ');",
            "for(let i=0; i<5; i++) console.log(i);",
            "function add(a,b){ return a+b; } console.log(add(2,3));",
            "let arr = [1,2,3]; arr.forEach(i => console.log(i));",
            "class Person { constructor(name){ this.name = name; } } let p = new Person('Ahmed'); console.log(p.name);",
            "const fs = require('fs'); fs.writeFileSync('file.txt','Hello');",
            "console.log(Math.sqrt(16));",
            "// مشروع: تطبيق ويب"
        ],
        "C++": [
            "#include <iostream>\nusing namespace std;\nint main(){ cout << 'Hello, World!'; return 0; }",
            "#include <iostream>\nusing namespace std;\nint main(){ int x=5, y=3; cout << x+y; return 0; }",
            "#include <iostream>\nusing namespace std;\nint main(){ int age=18; if(age>=18) cout << 'بالغ'; return 0; }",
            "#include <iostream>\nusing namespace std;\nint main(){ for(int i=0;i<5;i++) cout << i; return 0; }",
            "#include <iostream>\nusing namespace std;\nint add(int a,int b){ return a+b; }\nint main(){ cout << add(2,3); return 0; }",
            "#include <iostream>\n#include <vector>\nusing namespace std;\nint main(){ vector<int> arr={1,2,3}; for(int i:arr) cout << i; return 0; }",
            "#include <iostream>\nusing namespace std;\nclass Person{ public: string name; Person(string n){ name=n; } };\nint main(){ Person p('Ahmed'); cout << p.name; return 0; }",
            "#include <iostream>\n#include <fstream>\nusing namespace std;\nint main(){ ofstream f('file.txt'); f << 'Hello'; return 0; }",
            "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main(){ cout << sqrt(16); return 0; }",
            "// مشروع: نظام إدارة"
        ],
        "Java": [
            "public class Main { public static void main(String[] args) { System.out.println('Hello, World!'); } }",
            "public class Main { public static void main(String[] args) { int x=5, y=3; System.out.println(x+y); } }",
            "public class Main { public static void main(String[] args) { int age=18; if(age>=18) System.out.println('بالغ'); } }",
            "public class Main { public static void main(String[] args) { for(int i=0;i<5;i++) System.out.println(i); } }",
            "public class Main { static int add(int a,int b){ return a+b; } public static void main(String[] args) { System.out.println(add(2,3)); } }",
            "import java.util.*; public class Main { public static void main(String[] args) { int[] arr={1,2,3}; for(int i:arr) System.out.println(i); } }",
            "class Person { String name; Person(String n){ name=n; } } public class Main { public static void main(String[] args) { Person p=new Person('Ahmed'); System.out.println(p.name); } }",
            "import java.io.*; public class Main { public static void main(String[] args) throws Exception { FileWriter f=new FileWriter('file.txt'); f.write('Hello'); f.close(); } }",
            "public class Main { public static void main(String[] args) { System.out.println(Math.sqrt(16)); } }",
            "// مشروع: تطبيق جافا"
        ],
        "C#": [
            "using System; class Program { static void Main() { Console.WriteLine('Hello, World!'); } }",
            "using System; class Program { static void Main() { int x=5, y=3; Console.WriteLine(x+y); } }",
            "using System; class Program { static void Main() { int age=18; if(age>=18) Console.WriteLine('بالغ'); } }",
            "using System; class Program { static void Main() { for(int i=0;i<5;i++) Console.WriteLine(i); } }",
            "using System; class Program { static int Add(int a,int b){ return a+b; } static void Main() { Console.WriteLine(Add(2,3)); } }",
            "using System; class Program { static void Main() { int[] arr={1,2,3}; foreach(int i in arr) Console.WriteLine(i); } }",
            "class Person { public string Name; public Person(string n){ Name=n; } } class Program { static void Main() { Person p=new Person('Ahmed'); Console.WriteLine(p.Name); } }",
            "using System.IO; class Program { static void Main() { File.WriteAllText('file.txt','Hello'); } }",
            "using System; class Program { static void Main() { Console.WriteLine(Math.Sqrt(16)); } }",
            "// مشروع: تطبيق C#"
        ],
        "PHP": [
            "<?php echo 'Hello, World!'; ?>",
            "<?php $x=5; $y=3; echo $x+$y; ?>",
            "<?php $age=18; if($age>=18) echo 'بالغ'; ?>",
            "<?php for($i=0;$i<5;$i++) echo $i; ?>",
            "<?php function add($a,$b){ return $a+$b; } echo add(2,3); ?>",
            "<?php $arr=[1,2,3]; foreach($arr as $i) echo $i; ?>",
            "<?php class Person { public $name; function __construct($n){ $this->name=$n; } } $p=new Person('Ahmed'); echo $p->name; ?>",
            "<?php file_put_contents('file.txt','Hello'); ?>",
            "<?php echo sqrt(16); ?>",
            "// مشروع: موقع PHP"
        ],
        "Swift": [
            "print('Hello, World!')",
            "let x=5; let y=3; print(x+y)",
            "let age=18; if(age>=18){ print('بالغ') }",
            "for i in 0..<5 { print(i) }",
            "func add(_ a:Int,_ b:Int)->Int{ return a+b } print(add(2,3))",
            "let arr=[1,2,3]; for i in arr { print(i) }",
            "class Person { var name: String; init(_ n:String){ name=n } } let p=Person('Ahmed'); print(p.name)",
            "import Foundation; let str='Hello'; try str.write(toFile:'file.txt', atomically:true, encoding:.utf8)",
            "import Foundation; print(sqrt(16))",
            "// مشروع: تطبيق iOS"
        ],
        "Kotlin": [
            "fun main(){ println('Hello, World!') }",
            "fun main(){ val x=5; val y=3; println(x+y) }",
            "fun main(){ val age=18; if(age>=18) println('بالغ') }",
            "fun main(){ for(i in 0..4) println(i) }",
            "fun add(a:Int,b:Int)=a+b; fun main(){ println(add(2,3)) }",
            "fun main(){ val arr=listOf(1,2,3); for(i in arr) println(i) }",
            "class Person(val name:String); fun main(){ val p=Person('Ahmed'); println(p.name) }",
            "import java.io.File; fun main(){ File('file.txt').writeText('Hello') }",
            "import kotlin.math.sqrt; fun main(){ println(sqrt(16.0)) }",
            "// مشروع: تطبيق أندرويد"
        ],
        "Go": [
            "package main; import 'fmt'; func main(){ fmt.Println('Hello, World!') }",
            "package main; import 'fmt'; func main(){ x:=5; y:=3; fmt.Println(x+y) }",
            "package main; import 'fmt'; func main(){ age:=18; if age>=18 { fmt.Println('بالغ') } }",
            "package main; import 'fmt'; func main(){ for i:=0; i<5; i++ { fmt.Println(i) } }",
            "package main; import 'fmt'; func add(a,b int) int { return a+b }; func main(){ fmt.Println(add(2,3)) }",
            "package main; import 'fmt'; func main(){ arr:=[]int{1,2,3}; for _,i:=range arr { fmt.Println(i) } }",
            "package main; import 'fmt'; type Person struct { Name string }; func main(){ p:=Person{Name:'Ahmed'}; fmt.Println(p.Name) }",
            "package main; import 'os'; func main(){ os.WriteFile('file.txt',[]byte('Hello'),0644) }",
            "package main; import 'math'; import 'fmt'; func main(){ fmt.Println(math.Sqrt(16)) }",
            "// مشروع: تطبيق Go"
        ],
        "Rust": [
            "fn main(){ println!('Hello, World!'); }",
            "fn main(){ let x=5; let y=3; println!('{}',x+y); }",
            "fn main(){ let age=18; if age>=18 { println!('بالغ'); } }",
            "fn main(){ for i in 0..5 { println!('{}',i); } }",
            "fn add(a:i32,b:i32)->i32{ a+b } fn main(){ println!('{}',add(2,3)); }",
            "fn main(){ let arr=[1,2,3]; for i in arr { println!('{}',i); } }",
            "struct Person{ name:String } fn main(){ let p=Person{ name:String::from('Ahmed') }; println!('{}',p.name); }",
            "use std::fs; fn main(){ fs::write('file.txt','Hello').unwrap(); }",
            "fn main(){ println!('{}',(16 as f64).sqrt()); }",
            "// مشروع: تطبيق Rust"
        ]
    };
    for (let i = 0; i < 10; i++) {
        const code = codeExamples[lang] ? codeExamples[lang][i] || codeExamples[lang][0] : "print('Hello')";
        levels.push({
            id: i,
            title: topics[i] || `المستوى ${i}`,
            content: `هذا هو المستوى ${i} في ${lang}. تعلم ${topics[i] || 'مهارات متقدمة'} مع أمثلة عملية.`,
            code: code,
            expected: "Hello, World!",
            quiz: {
                question: `سؤال اختبار للمستوى ${i} في ${lang}؟`,
                options: ["الخيار 1", "الخيار 2", "الخيار 3"],
                correct: 0
            }
        });
    }
    return levels;
}
