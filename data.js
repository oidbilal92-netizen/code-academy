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
            "age = 18\nif age >= 18:\n    print('بالغ')\nelse:\n    print('قاصر')",
            "sum = 0\nfor i in range(5):\n    sum += i\nprint(sum)",
            "def add(a, b):\n    return a + b\nprint(add(10, 20))",
            "numbers = [1, 2, 3, 4, 5]\nprint(sum(numbers))",
            "class Car:\n    def __init__(self, brand):\n        self.brand = brand\nmy_car = Car('Toyota')\nprint(my_car.brand)",
            "with open('test.txt', 'w') as f:\n    f.write('Hello File')\nprint('File written')",
            "import math\nprint(math.sqrt(25))",
            "# Calculator\nprint('Simple Calculator')\nprint(10 + 5)"
        ],
        "JavaScript": [
            "console.log('Hello, World!');",
            "let x = 5; let y = 3; console.log(x + y);",
            "let age = 18; if(age >= 18) console.log('بالغ'); else console.log('قاصر');",
            "let sum = 0; for(let i=0; i<5; i++) sum += i; console.log(sum);",
            "function add(a, b) { return a + b; } console.log(add(10, 20));",
            "let numbers = [1, 2, 3, 4, 5]; console.log(numbers.reduce((a,b) => a+b, 0));",
            "class Car { constructor(brand) { this.brand = brand; } } let myCar = new Car('Toyota'); console.log(myCar.brand);",
            "const fs = require('fs'); fs.writeFileSync('test.txt', 'Hello File'); console.log('File written');",
            "console.log(Math.sqrt(25));",
            "// Calculator\nconsole.log('Simple Calculator');\nconsole.log(10 + 5);"
        ],
        "C++": [
            "#include <iostream>\nusing namespace std;\nint main() { cout << 'Hello, World!'; return 0; }",
            "#include <iostream>\nusing namespace std;\nint main() { int x=5, y=3; cout << x+y; return 0; }",
            "#include <iostream>\nusing namespace std;\nint main() { int age=18; if(age>=18) cout << 'بالغ'; else cout << 'قاصر'; return 0; }",
            "#include <iostream>\nusing namespace std;\nint main() { int sum=0; for(int i=0;i<5;i++) sum+=i; cout << sum; return 0; }",
            "#include <iostream>\nusing namespace std;\nint add(int a,int b) { return a+b; }\nint main() { cout << add(10,20); return 0; }",
            "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() { vector<int> numbers={1,2,3,4,5}; int sum=0; for(int n:numbers) sum+=n; cout << sum; return 0; }",
            "#include <iostream>\nusing namespace std;\nclass Car { public: string brand; Car(string b) { brand=b; } };\nint main() { Car myCar('Toyota'); cout << myCar.brand; return 0; }",
            "#include <iostream>\n#include <fstream>\nusing namespace std;\nint main() { ofstream f('test.txt'); f << 'Hello File'; cout << 'File written'; return 0; }",
            "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() { cout << sqrt(25); return 0; }",
            "#include <iostream>\nusing namespace std;\nint main() { cout << 'Simple Calculator\\n' << 10+5; return 0; }"
        ],
        "Java": [
            "public class Main { public static void main(String[] args) { System.out.println('Hello, World!'); } }",
            "public class Main { public static void main(String[] args) { int x=5, y=3; System.out.println(x+y); } }",
            "public class Main { public static void main(String[] args) { int age=18; if(age>=18) System.out.println('بالغ'); else System.out.println('قاصر'); } }",
            "public class Main { public static void main(String[] args) { int sum=0; for(int i=0;i<5;i++) sum+=i; System.out.println(sum); } }",
            "public class Main { static int add(int a,int b) { return a+b; } public static void main(String[] args) { System.out.println(add(10,20)); } }",
            "import java.util.*; public class Main { public static void main(String[] args) { int[] numbers={1,2,3,4,5}; int sum=0; for(int n:numbers) sum+=n; System.out.println(sum); } }",
            "class Car { String brand; Car(String b) { brand=b; } } public class Main { public static void main(String[] args) { Car myCar=new Car('Toyota'); System.out.println(myCar.brand); } }",
            "import java.io.*; public class Main { public static void main(String[] args) throws Exception { FileWriter f=new FileWriter('test.txt'); f.write('Hello File'); f.close(); System.out.println('File written'); } }",
            "public class Main { public static void main(String[] args) { System.out.println(Math.sqrt(25)); } }",
            "public class Main { public static void main(String[] args) { System.out.println('Simple Calculator'); System.out.println(10+5); } }"
        ],
        "C#": [
            "using System; class Program { static void Main() { Console.WriteLine('Hello, World!'); } }",
            "using System; class Program { static void Main() { int x=5, y=3; Console.WriteLine(x+y); } }",
            "using System; class Program { static void Main() { int age=18; if(age>=18) Console.WriteLine('بالغ'); else Console.WriteLine('قاصر'); } }",
            "using System; class Program { static void Main() { int sum=0; for(int i=0;i<5;i++) sum+=i; Console.WriteLine(sum); } }",
            "using System; class Program { static int Add(int a,int b) { return a+b; } static void Main() { Console.WriteLine(Add(10,20)); } }",
            "using System; class Program { static void Main() { int[] numbers={1,2,3,4,5}; int sum=0; foreach(int n in numbers) sum+=n; Console.WriteLine(sum); } }",
            "class Car { public string Brand; public Car(string b) { Brand=b; } } class Program { static void Main() { Car myCar=new Car('Toyota'); Console.WriteLine(myCar.Brand); } }",
            "using System.IO; class Program { static void Main() { File.WriteAllText('test.txt','Hello File'); Console.WriteLine('File written'); } }",
            "using System; class Program { static void Main() { Console.WriteLine(Math.Sqrt(25)); } }",
            "using System; class Program { static void Main() { Console.WriteLine('Simple Calculator'); Console.WriteLine(10+5); } }"
        ],
        "PHP": [
            "<?php echo 'Hello, World!'; ?>",
            "<?php $x=5; $y=3; echo $x+$y; ?>",
            "<?php $age=18; if($age>=18) echo 'بالغ'; else echo 'قاصر'; ?>",
            "<?php $sum=0; for($i=0;$i<5;$i++) $sum+=$i; echo $sum; ?>",
            "<?php function add($a,$b){ return $a+$b; } echo add(10,20); ?>",
            "<?php $numbers=[1,2,3,4,5]; echo array_sum($numbers); ?>",
            "<?php class Car { public $brand; function __construct($b){ $this->brand=$b; } } $myCar=new Car('Toyota'); echo $myCar->brand; ?>",
            "<?php file_put_contents('test.txt','Hello File'); echo 'File written'; ?>",
            "<?php echo sqrt(25); ?>",
            "<?php echo 'Simple Calculator\\n' . (10+5); ?>"
        ],
        "Swift": [
            "print('Hello, World!')",
            "let x=5; let y=3; print(x+y)",
            "let age=18; if age>=18 { print('بالغ') } else { print('قاصر') }",
            "var sum=0; for i in 0..<5 { sum += i }; print(sum)",
            "func add(_ a:Int,_ b:Int)->Int { return a+b }; print(add(10,20))",
            "let numbers=[1,2,3,4,5]; print(numbers.reduce(0,+))",
            "class Car { var brand: String; init(_ b:String){ brand=b } }; let myCar=Car('Toyota'); print(myCar.brand)",
            "import Foundation; let str='Hello File'; try str.write(toFile:'test.txt', atomically:true, encoding:.utf8); print('File written')",
            "import Foundation; print(sqrt(25))",
            "print('Simple Calculator'); print(10+5)"
        ],
        "Kotlin": [
            "fun main(){ println('Hello, World!') }",
            "fun main(){ val x=5; val y=3; println(x+y) }",
            "fun main(){ val age=18; if(age>=18) println('بالغ') else println('قاصر') }",
            "fun main(){ var sum=0; for(i in 0..4) sum+=i; println(sum) }",
            "fun add(a:Int,b:Int)=a+b; fun main(){ println(add(10,20)) }",
            "fun main(){ val numbers=listOf(1,2,3,4,5); println(numbers.sum()) }",
            "class Car(val brand:String); fun main(){ val myCar=Car('Toyota'); println(myCar.brand) }",
            "import java.io.File; fun main(){ File('test.txt').writeText('Hello File'); println('File written') }",
            "import kotlin.math.sqrt; fun main(){ println(sqrt(25.0)) }",
            "fun main(){ println('Simple Calculator'); println(10+5) }"
        ],
        "Go": [
            "package main; import 'fmt'; func main(){ fmt.Println('Hello, World!') }",
            "package main; import 'fmt'; func main(){ x:=5; y:=3; fmt.Println(x+y) }",
            "package main; import 'fmt'; func main(){ age:=18; if age>=18 { fmt.Println('بالغ') } else { fmt.Println('قاصر') } }",
            "package main; import 'fmt'; func main(){ sum:=0; for i:=0;i<5;i++ { sum+=i }; fmt.Println(sum) }",
            "package main; import 'fmt'; func add(a,b int) int { return a+b }; func main(){ fmt.Println(add(10,20)) }",
            "package main; import 'fmt'; func main(){ numbers:=[]int{1,2,3,4,5}; sum:=0; for _,n:=range numbers { sum+=n }; fmt.Println(sum) }",
            "package main; import 'fmt'; type Car struct { Brand string }; func main(){ myCar:=Car{Brand:'Toyota'}; fmt.Println(myCar.Brand) }",
            "package main; import 'os'; func main(){ os.WriteFile('test.txt',[]byte('Hello File'),0644); fmt.Println('File written') }",
            "package main; import 'math'; import 'fmt'; func main(){ fmt.Println(math.Sqrt(25)) }",
            "package main; import 'fmt'; func main(){ fmt.Println('Simple Calculator'); fmt.Println(10+5) }"
        ],
        "Rust": [
            "fn main(){ println!('Hello, World!'); }",
            "fn main(){ let x=5; let y=3; println!('{}',x+y); }",
            "fn main(){ let age=18; if age>=18 { println!('بالغ'); } else { println!('قاصر'); } }",
            "fn main(){ let mut sum=0; for i in 0..5 { sum+=i; } println!('{}',sum); }",
            "fn add(a:i32,b:i32)->i32{ a+b } fn main(){ println!('{}',add(10,20)); }",
            "fn main(){ let numbers=[1,2,3,4,5]; let sum:i32=numbers.iter().sum(); println!('{}',sum); }",
            "struct Car{ brand:String } fn main(){ let myCar=Car{ brand:String::from('Toyota') }; println!('{}',myCar.brand); }",
            "use std::fs; fn main(){ fs::write('test.txt','Hello File').unwrap(); println!('File written'); }",
            "fn main(){ println!('{}',(25 as f64).sqrt()); }",
            "fn main(){ println!('Simple Calculator'); println!('{}',10+5); }"
        ]
    };

    const quizzes = {
        "Python": [
            { question: "ما هي دالة الطباعة في Python؟", options: ["print()", "echo()", "console.log()"], correct: 0 },
            { question: "أي من التالي يمثل نوع بيانات نصي في Python؟", options: ["int", "str", "float"], correct: 1 },
            { question: "ما هو ناتج '5 > 3' في Python؟", options: ["True", "False", "5"], correct: 0 },
            { question: "كم مرة ستنفذ الحلقة `for i in range(5)`؟", options: ["4", "5", "6"], correct: 1 },
            { question: "ما هو ناتج `def add(a,b): return a+b` ثم `add(5,7)`؟", options: ["12", "57", "خطأ"], correct: 0 },
            { question: "كيف تصل إلى العنصر الثالث في قائمة `[10,20,30,40]`؟", options: ["list[2]", "list[3]", "list[1]"], correct: 0 },
            { question: "أي كلمة تستخدم لإنشاء كلاس في Python؟", options: ["class", "object", "def"], correct: 0 },
            { question: "كيف تفتح ملف للكتابة في Python؟", options: ["open('file.txt','w')", "open('file.txt','r')", "open('file.txt','a')"], correct: 0 },
            { question: "ما هو ناتج `math.sqrt(16)`؟", options: ["4", "16", "256"], correct: 0 },
            { question: "أي من التالي يمثل تعليقاً في Python؟", options: ["# تعليق", "// تعليق", "/* تعليق */"], correct: 0 }
        ],
        "JavaScript": [
            { question: "ما هي دالة الطباعة في JavaScript؟", options: ["console.log()", "print()", "echo()"], correct: 0 },
            { question: "أي من التالي يمثل متغيراً نصياً في JS؟", options: ["let name = 'Ahmed'", "let name = 123", "let name = true"], correct: 0 },
            { question: "ما هو ناتج `5 > 3` في JS؟", options: ["true", "false", "5"], correct: 0 },
            { question: "كم مرة ستنفذ الحلقة `for(let i=0; i<5; i++)`؟", options: ["4", "5", "6"], correct: 1 },
            { question: "ما هو ناتج `function add(a,b){return a+b}; add(5,7)`؟", options: ["12", "57", "خطأ"], correct: 0 },
            { question: "كيف تصل إلى العنصر الثالث في مصفوفة `[10,20,30,40]`؟", options: ["arr[2]", "arr[3]", "arr[1]"], correct: 0 },
            { question: "أي كلمة تستخدم لإنشاء كلاس في JS؟", options: ["class", "object", "function"], correct: 0 },
            { question: "كيف تكتب تعليقاً في JS؟", options: ["// تعليق", "# تعليق", "/* تعليق */"], correct: 0 }
        ],
        "C++": [
            { question: "ما هي دالة الطباعة في C++؟", options: ["cout", "printf", "console.log"], correct: 0 },
            { question: "أي من التالي يمثل نوع بيانات صحيح؟", options: ["int", "float", "string"], correct: 0 },
            { question: "ما هو ناتج `5 > 3` في C++؟", options: ["true", "false", "5"], correct: 0 },
            { question: "كم مرة ستنفذ الحلقة `for(int i=0; i<5; i++)`؟", options: ["4", "5", "6"], correct: 1 },
            { question: "ما هو ناتج `int add(int a,int b){return a+b;}` ثم `add(5,7)`؟", options: ["12", "57", "خطأ"], correct: 0 },
            { question: "كيف تصل إلى العنصر الثالث في مصفوفة `int arr[4]={10,20,30,40}`؟", options: ["arr[2]", "arr[3]", "arr[1]"], correct: 0 },
            { question: "أي كلمة تستخدم لإنشاء كلاس في C++؟", options: ["class", "struct", "object"], correct: 0 }
        ],
        "Java": [
            { question: "ما هي دالة الطباعة في Java؟", options: ["System.out.println()", "print()", "console.log()"], correct: 0 },
            { question: "أي من التالي يمثل نوع بيانات صحيح؟", options: ["int", "float", "String"], correct: 0 },
            { question: "ما هو ناتج `5 > 3` في Java؟", options: ["true", "false", "5"], correct: 0 },
            { question: "كم مرة ستنفذ الحلقة `for(int i=0; i<5; i++)`؟", options: ["4", "5", "6"], correct: 1 },
            { question: "ما هو ناتج `static int add(int a,int b){return a+b;}` ثم `add(5,7)`؟", options: ["12", "57", "خطأ"], correct: 0 },
            { question: "كيف تصل إلى العنصر الثالث في مصفوفة `int[] arr={10,20,30,40}`؟", options: ["arr[2]", "arr[3]", "arr[1]"], correct: 0 },
            { question: "أي كلمة تستخدم لإنشاء كلاس في Java؟", options: ["class", "interface", "object"], correct: 0 }
        ],
        "C#": [
            { question: "ما هي دالة الطباعة في C#؟", options: ["Console.WriteLine()", "print()", "console.log()"], correct: 0 },
            { question: "أي من التالي يمثل نوع بيانات صحيح؟", options: ["int", "float", "string"], correct: 0 },
            { question: "ما هو ناتج `5 > 3` في C#؟", options: ["true", "false", "5"], correct: 0 },
            { question: "كم مرة ستنفذ الحلقة `for(int i=0; i<5; i++)`؟", options: ["4", "5", "6"], correct: 1 },
            { question: "ما هو ناتج `static int Add(int a,int b){return a+b;}` ثم `Add(5,7)`؟", options: ["12", "57", "خطأ"], correct: 0 },
            { question: "كيف تصل إلى العنصر الثالث في مصفوفة `int[] arr={10,20,30,40}`؟", options: ["arr[2]", "arr[3]", "arr[1]"], correct: 0 },
            { question: "أي كلمة تستخدم لإنشاء كلاس في C#؟", options: ["class", "struct", "object"], correct: 0 }
        ],
        "PHP": [
            { question: "ما هي دالة الطباعة في PHP؟", options: ["echo", "print", "console.log"], correct: 0 },
            { question: "أي من التالي يمثل متغيراً في PHP؟", options: ["$x", "x", "@x"], correct: 0 },
            { question: "ما هو ناتج `5 > 3` في PHP؟", options: ["true", "false", "5"], correct: 0 },
            { question: "كم مرة ستنفذ الحلقة `for($i=0; $i<5; $i++)`؟", options: ["4", "5", "6"], correct: 1 },
            { question: "ما هو ناتج `function add($a,$b){return $a+$b;}` ثم `add(5,7)`؟", options: ["12", "57", "خطأ"], correct: 0 },
            { question: "كيف تصل إلى العنصر الثالث في مصفوفة `$arr=[10,20,30,40]`؟", options: ["$arr[2]", "$arr[3]", "$arr[1]"], correct: 0 },
            { question: "أي كلمة تستخدم لإنشاء كلاس في PHP؟", options: ["class", "object", "function"], correct: 0 }
        ],
        "Swift": [
            { question: "ما هي دالة الطباعة في Swift؟", options: ["print()", "echo()", "console.log()"], correct: 0 },
            { question: "أي من التالي يمثل متغيراً نصياً في Swift؟", options: ["var name = 'Ahmed'", "let name = 123", "var name = true"], correct: 0 },
            { question: "ما هو ناتج `5 > 3` في Swift؟", options: ["true", "false", "5"], correct: 0 },
            { question: "كم مرة ستنفذ الحلقة `for i in 0..<5`؟", options: ["4", "5", "6"], correct: 1 },
            { question: "ما هو ناتج `func add(_ a:Int,_ b:Int)->Int{return a+b}` ثم `add(5,7)`؟", options: ["12", "57", "خطأ"], correct: 0 },
            { question: "كيف تصل إلى العنصر الثالث في مصفوفة `let arr=[10,20,30,40]`؟", options: ["arr[2]", "arr[3]", "arr[1]"], correct: 0 },
            { question: "أي كلمة تستخدم لإنشاء كلاس في Swift؟", options: ["class", "struct", "object"], correct: 0 }
        ],
        "Kotlin": [
            { question: "ما هي دالة الطباعة في Kotlin؟", options: ["println()", "print()", "console.log()"], correct: 0 },
            { question: "أي من التالي يمثل متغيراً نصياً في Kotlin؟", options: ["val name = 'Ahmed'", "val name = 123", "val name = true"], correct: 0 },
            { question: "ما هو ناتج `5 > 3` في Kotlin؟", options: ["true", "false", "5"], correct: 0 },
            { question: "كم مرة ستنفذ الحلقة `for(i in 0..4)`؟", options: ["4", "5", "6"], correct: 1 },
            { question: "ما هو ناتج `fun add(a:Int,b:Int)=a+b` ثم `add(5,7)`؟", options: ["12", "57", "خطأ"], correct: 0 },
            { question: "كيف تصل إلى العنصر الثالث في قائمة `val arr=listOf(10,20,30,40)`؟", options: ["arr[2]", "arr[3]", "arr[1]"], correct: 0 },
            { question: "أي كلمة تستخدم لإنشاء كلاس في Kotlin؟", options: ["class", "data class", "object"], correct: 0 }
        ],
        "Go": [
            { question: "ما هي دالة الطباعة في Go؟", options: ["fmt.Println()", "print()", "console.log()"], correct: 0 },
            { question: "أي من التالي يمثل متغيراً في Go؟", options: ["x := 5", "x = 5", "var x = 5"], correct: 0 },
            { question: "ما هو ناتج `5 > 3` في Go؟", options: ["true", "false", "5"], correct: 0 },
            { question: "كم مرة ستنفذ الحلقة `for i:=0; i<5; i++`؟", options: ["4", "5", "6"], correct: 1 },
            { question: "ما هو ناتج `func add(a,b int) int{return a+b}` ثم `add(5,7)`؟", options: ["12", "57", "خطأ"], correct: 0 },
            { question: "كيف تصل إلى العنصر الثالث في مصفوفة `arr:=[...]int{10,20,30,40}`؟", options: ["arr[2]", "arr[3]", "arr[1]"], correct: 0 },
            { question: "أي كلمة تستخدم لإنشاء هيكل في Go؟", options: ["type", "struct", "class"], correct: 1 }
        ],
        "Rust": [
            { question: "ما هي دالة الطباعة في Rust؟", options: ["println!()", "print()", "console.log()"], correct: 0 },
            { question: "أي من التالي يمثل متغيراً في Rust؟", options: ["let x = 5", "x = 5", "var x = 5"], correct: 0 },
            { question: "ما هو ناتج `5 > 3` في Rust؟", options: ["true", "false", "5"], correct: 0 },
            { question: "كم مرة ستنفذ الحلقة `for i in 0..5`؟", options: ["4", "5", "6"], correct: 1 },
            { question: "ما هو ناتج `fn add(a:i32,b:i32)->i32{a+b}` ثم `add(5,7)`؟", options: ["12", "57", "خطأ"], correct: 0 },
            { question: "كيف تصل إلى العنصر الثالث في مصفوفة `let arr=[10,20,30,40]`؟", options: ["arr[2]", "arr[3]", "arr[1]"], correct: 0 },
            { question: "أي كلمة تستخدم لإنشاء هيكل في Rust؟", options: ["struct", "class", "type"], correct: 0 }
        ]
    };

    for (let i = 0; i < 10; i++) {
        const example = codeExamples[lang] ? codeExamples[lang][i] || codeExamples[lang][0] : { code: "print('Hello')", expected: "Hello" };
        const quiz = quizzes[lang] ? quizzes[lang][i] || quizzes[lang][0] : { question: "سؤال عام", options: ["أ", "ب", "ج"], correct: 0 };
        levels.push({
            id: i,
            title: topics[i] || `المستوى ${i}`,
            content: `<h3>📘 ${topics[i] || 'مهارات متقدمة'}</h3>
                <p>في هذا المستوى، ستتعلم <strong>${topics[i] || 'مهارات متقدمة'}</strong> في لغة <strong>${lang}</strong>.</p>
                <p>📌 شاهد المثال التالي، ثم جرب تشغيل الكود بنفسك، وأجب عن الاختبار.</p>
                <p>💡 نصيحة: حاول تعديل الكود لترى كيف تتغير المخرجات!</p>`,
            code: example.code,
            expected: example.expected || "Hello, World!",
            quiz: quiz
        });
    }
    return levels;
}
