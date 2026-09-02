// ============================================================
// ملف التحديات اليومية
// ============================================================

const CHALLENGES = {
    today: {
        date: "2026-09-02",
        title: "طباعة الأعداد الزوجية",
        description: "اكتب برنامجاً يطبع الأعداد الزوجية من 1 إلى 20.",
        level: "سهل",
        language: "Python",
        points: 10,
        hint: "استخدم حلقة for مع range(2, 21, 2)",
        solution: "for i in range(2, 21, 2):\n    print(i)"
    },
    tomorrow: {
        title: "جمع عناصر القائمة",
        description: "اكتب دالة تجمع جميع الأرقام في قائمة.",
        level: "متوسط",
        language: "Python",
        points: 15,
        hint: "استخدم sum() أو حلقة for",
        solution: "def sum_list(lst):\n    return sum(lst)"
    },
    weekly: [
        {
            title: "تحويل درجة الحرارة",
            description: "اكتب برنامجاً يحول من Celsius إلى Fahrenheit.",
            level: "سهل",
            language: "JavaScript",
            points: 10
        }
    ]
};
