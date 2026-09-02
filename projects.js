// ============================================================
// ملف المشاريع العملية
// ============================================================

const PROJECTS = {
    python: {
        beginner: {
            name: "آلة حاسبة بسيطة",
            description: "بناء آلة حاسبة بواجهة سطر أوامر تدعم الجمع والطرح والضرب والقسمة.",
            steps: [
                "اطلب من المستخدم إدخال رقمين.",
                "اطلب العملية (+، -، *، /).",
                "نفذ العملية واطبع النتيجة.",
                "أضف حلقة while لتكرار العملية حتى يطلب المستخدم الخروج."
            ],
            code: `def calculator():
    while True:
        print("\\n--- آلة حاسبة ---")
        print("1. جمع")
        print("2. طرح")
        print("3. ضرب")
        print("4. قسمة")
        print("5. خروج")
        choice = input("اختر العملية: ")
        if choice == '5':
            break
        num1 = float(input("الرقم الأول: "))
        num2 = float(input("الرقم الثاني: "))
        if choice == '1':
            print(f"النتيجة: {num1 + num2}")
        elif choice == '2':
            print(f"النتيجة: {num1 - num2}")
        elif choice == '3':
            print(f"النتيجة: {num1 * num2}")
        elif choice == '4':
            if num2 != 0:
                print(f"النتيجة: {num1 / num2}")
            else:
                print("خطأ: القسمة على صفر")
        else:
            print("عملية غير صحيحة")

calculator()`,
            download: "calculator.zip"
        },
        intermediate: {
            name: "مدونة بسيطة",
            description: "بناء مدونة باستخدام Flask لتخزين المقالات.",
            steps: [
                "تثبيت Flask.",
                "إنشاء ملف app.py.",
                "إضافة مسار لعرض المقالات.",
                "إضافة مسار لإضافة مقال جديد."
            ]
        }
    },
    javascript: {
        beginner: {
            name: "مؤقت عد تنازلي",
            description: "بناء مؤقت عد تنازلي بواجهة ويب.",
            steps: [
                "إنشاء ملف HTML به حقل إدخال وزر بدء.",
                "استخدام setInterval لتحديث الوقت.",
                "إيقاف المؤقت عند الوصول إلى الصفر."
            ],
            code: `let timer;
function startTimer() {
    let seconds = document.getElementById('seconds').value;
    timer = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(timer);
            alert('انتهى الوقت!');
        } else {
            document.getElementById('display').textContent = seconds;
            seconds--;
        }
    }, 1000);
}`
        }
    }
};
