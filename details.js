// ============================================================
// ملف المحتوى الإضافي: شرح طويل واستخدامات كل لغة
// ============================================================

const LANGUAGE_DETAILS = {
    python: {
        longDescription: `
### 🐍 مقدمة إلى Python
Python هي لغة برمجة عالية المستوى، سهلة التعلم، وتستخدم في مجالات متعددة. تم تصميم Python لتكون سهلة القراءة والكتابة، مما يجعلها مثالية للمبتدئين.

#### تاريخ اللغة
تم إنشاء Python في عام 1991 بواسطة Guido van Rossum. كانت الفكرة الأساسية هي إنشاء لغة تجمع بين القوة والسهولة.

#### لماذا تتعلم Python؟
- سهلة التعلم: تشبه اللغة الإنجليزية.
- مجتمع ضخم: ملايين المطورين حول العالم.
- مكتبات غنية: NumPy، Pandas، TensorFlow، Django.
- تستخدم في الشركات الكبرى: Google، Facebook، Netflix، NASA.

#### مجالات استخدام Python
1. **تطوير الويب:** باستخدام Django و Flask.
2. **تحليل البيانات:** باستخدام Pandas و NumPy.
3. **الذكاء الاصطناعي:** باستخدام TensorFlow و PyTorch.
4. **أتمتة المهام:** كتابة سكربتات لتوفير الوقت.
5. **تطبيقات العلم والهندسة:** حسابات معقدة.
6. **تطوير الألعاب:** باستخدام Pygame.

#### أمثلة على استخدامات Python في العالم الحقيقي
- **Google:** تستخدم Python في محرك البحث والذكاء الاصطناعي.
- **Netflix:** تستخدم Python في تحليل البيانات وتوصية الأفلام.
- **NASA:** تستخدم Python في تحليل بيانات الفضاء.

#### مستقبل Python
مع تزايد الطلب على الذكاء الاصطناعي وتحليل البيانات، سيبقى Python في صدارة لغات البرمجة لسنوات قادمة.
        `,
        usageExamples: `
### 🔧 أمثلة على استخدامات Python

#### 1. تطوير الويب (Django)
\`\`\`python
# ملف views.py في Django
from django.http import HttpResponse

def home(request):
    return HttpResponse("مرحباً بك في موقعي!")
\`\`\`

#### 2. تحليل البيانات (Pandas)
\`\`\`python
import pandas as pd

# قراءة ملف CSV
data = pd.read_csv('data.csv')
print(data.head())
\`\`\`

#### 3. الذكاء الاصطناعي (TensorFlow)
\`\`\`python
import tensorflow as tf

# بناء نموذج بسيط
model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(10, activation='softmax')
])
\`\`\`

#### 4. أتمتة المهام
\`\`\`python
import os

# حذف جميع الملفات المؤقتة
for file in os.listdir('temp'):
    os.remove(f'temp/{file}')
\`\`\`

#### 5. تطبيقات العلم والهندسة
\`\`\`python
import math

# حساب الجذر التربيعي
print(math.sqrt(25))  # الناتج: 5.0
\`\`\`
        `
    },
    javascript: {
        longDescription: `
### 🌐 مقدمة إلى JavaScript
JavaScript هي لغة البرمجة النصية للويب، تستخدم في تطوير الواجهات الأمامية والخوادم. تعتبر JavaScript لغة حيوية تجعل المواقع تفاعلية.

#### تاريخ اللغة
تم إنشاء JavaScript في عام 1995 بواسطة Brendan Eich في شركة Netscape. كانت الفكرة الأساسية هي إضافة التفاعل إلى صفحات الويب.

#### لماذا تتعلم JavaScript؟
- لغة الويب الأساسية: تعمل في جميع المتصفحات.
- مجتمع ضخم: ملايين المطورين.
- إطارات عمل قوية: React، Vue، Angular، Node.js.
- تستخدم في الشركات الكبرى: Google، Facebook، Microsoft، Netflix.

#### مجالات استخدام JavaScript
1. **تطوير الواجهات الأمامية:** React، Vue، Angular.
2. **تطوير الخوادم:** Node.js، Express.
3. **تطبيقات الهواتف:** React Native.
4. **الألعاب:** Phaser، Three.js.
5. **تطبيقات سطح المكتب:** Electron.

#### أمثلة على استخدامات JavaScript في العالم الحقيقي
- **Facebook:** تستخدم React لتطوير واجهة المستخدم.
- **Netflix:** تستخدم Node.js في الخوادم.
- **Uber:** تستخدم React Native لتطبيق الهاتف.

#### مستقبل JavaScript
مع تطور الويب وتزايد استخدام التطبيقات التفاعلية، سيبقى JavaScript في صدارة لغات البرمجة للويب.
        `,
        usageExamples: `
### 🔧 أمثلة على استخدامات JavaScript

#### 1. تطوير الواجهات الأمامية (React)
\`\`\`javascript
// ملف App.js في React
import React from 'react';

function App() {
    return <h1>مرحباً بك في تطبيقي!</h1>;
}

export default App;
\`\`\`

#### 2. تطوير الخوادم (Node.js)
\`\`\`javascript
// ملف server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('مرحباً بك في الخادم!');
});

app.listen(3000, () => {
    console.log('الخادم يعمل على المنفذ 3000');
});
\`\`\`

#### 3. تطبيقات الهواتف (React Native)
\`\`\`javascript
// ملف App.js في React Native
import React from 'react';
import { Text, View } from 'react-native';

function App() {
    return (
        <View>
            <Text>مرحباً بتطبيقي!</Text>
        </View>
    );
}

export default App;
\`\`\`

#### 4. الألعاب (Phaser)
\`\`\`javascript
// ملف game.js
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        create: function() {
            this.add.text(400, 300, 'مرحباً باللعبة!');
        }
    }
};

const game = new Phaser.Game(config);
\`\`\`

#### 5. تطبيقات سطح المكتب (Electron)
\`\`\`javascript
// ملف main.js
const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({ width: 800, height: 600 });
    win.loadFile('index.html');
}

app.whenReady().then(createWindow);
\`\`\`
        `
    },
    java: {
        longDescription: `
### ☕ مقدمة إلى Java
Java هي لغة برمجة كائنية التوجه، تستخدم في التطبيقات المؤسسية والأندرويد. تتميز Java بأنها محمولة (تعمل على أي نظام تشغيل).

#### تاريخ اللغة
تم إنشاء Java في عام 1995 بواسطة James Gosling في شركة Sun Microsystems. كانت الفكرة الأساسية هي إنشاء لغة تعمل على أي جهاز.

#### لماذا تتعلم Java؟
- محمولة: تعمل على Windows، Linux، macOS.
- مجتمع ضخم: ملايين المطورين.
- تستخدم في الشركات الكبرى: Google، Amazon، Netflix، Twitter.

#### مجالات استخدام Java
1. **تطبيقات الأندرويد:** لغة أساسية.
2. **الأنظمة المؤسسية:** Spring Boot.
3. **الخوادم عالية الأداء:** تطبيقات كبيرة.
4. **تطبيقات Big Data:** Hadoop، Spark.
5. **تطبيقات سطح المكتب:** Swing، JavaFX.

#### أمثلة على استخدامات Java في العالم الحقيقي
- **Google:** تستخدم Java في تطبيقات الأندرويد.
- **Amazon:** تستخدم Java في أنظمتها المؤسسية.
- **Netflix:** تستخدم Java في الخوادم.

#### مستقبل Java
مع استمرار استخدام Java في الأندرويد والأنظمة المؤسسية، ستبقى لغة قوية لسنوات قادمة.
        `,
        usageExamples: `
### 🔧 أمثلة على استخدامات Java

#### 1. تطبيقات الأندرويد
\`\`\`java
// ملف MainActivity.java
package com.example.myapp;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
\`\`\`

#### 2. الأنظمة المؤسسية (Spring Boot)
\`\`\`java
// ملف Application.java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
\`\`\`

#### 3. الخوادم عالية الأداء
\`\`\`java
// خادم بسيط باستخدام Java
import java.net.ServerSocket;
import java.net.Socket;

public class SimpleServer {
    public static void main(String[] args) throws Exception {
        ServerSocket server = new ServerSocket(8080);
        System.out.println("الخادم يعمل على المنفذ 8080");
        while (true) {
            Socket client = server.accept();
            // معالجة الطلب
        }
    }
}
\`\`\`
        `
    },
    cpp: {
        longDescription: `
### ⚡ مقدمة إلى C++
C++ هي لغة برمجة قوية تستخدم في التطبيقات عالية الأداء مثل الألعاب والأنظمة المدمجة.

#### تاريخ اللغة
تم إنشاء C++ في عام 1985 بواسطة Bjarne Stroustrup. كانت الفكرة الأساسية هي إضافة ميزات البرمجة الكائنية إلى لغة C.

#### لماذا تتعلم C++؟
- أداء عالي: تستخدم في التطبيقات التي تحتاج إلى سرعة.
- تحكم في الذاكرة: يمكنك إدارة الذاكرة يدوياً.
- تستخدم في الشركات الكبرى: Microsoft، Google، Apple، Adobe.

#### مجالات استخدام C++
1. **تطوير الألعاب:** Unreal Engine.
2. **الأنظمة المدمجة:** الأجهزة الذكية.
3. **التطبيقات عالية الأداء:** برامج التصميم.
4. **محركات قواعد البيانات:** MySQL، PostgreSQL.
5. **برمجة الأنظمة:** أنظمة التشغيل.

#### أمثلة على استخدامات C++ في العالم الحقيقي
- **Microsoft:** تستخدم C++ في ويندوز وأوفيس.
- **Google:** تستخدم C++ في محرك البحث.
- **Adobe:** تستخدم C++ في برامج التصميم.

#### مستقبل C++
مع استمرار الحاجة إلى التطبيقات عالية الأداء، ستبقى C++ لغة أساسية.
        `,
        usageExamples: `
### 🔧 أمثلة على استخدامات C++

#### 1. تطوير الألعاب (Unreal Engine)
\`\`\`cpp
// ملف Game.cpp
#include "Game.h"

void AGame::BeginPlay() {
    Super::BeginPlay();
    UE_LOG(LogTemp, Warning, TEXT("مرحباً باللعبة!"));
}
\`\`\`

#### 2. الأنظمة المدمجة
\`\`\`cpp
// ملف Sensor.cpp
#include <Arduino.h>

void setup() {
    Serial.begin(9600);
    Serial.println("النظام يعمل");
}

void loop() {
    // قراءة البيانات من المستشعر
}
\`\`\`

#### 3. التطبيقات عالية الأداء
\`\`\`cpp
// معالجة الصور
#include <opencv2/opencv.hpp>

int main() {
    cv::Mat image = cv::imread("image.jpg");
    cv::cvtColor(image, image, cv::COLOR_BGR2GRAY);
    cv::imwrite("gray.jpg", image);
    return 0;
}
\`\`\`
        `
    },
    csharp: {
        longDescription: `
### 🖥️ مقدمة إلى C#
C# هي لغة برمجة من مايكروسوفت، تستخدم في تطوير تطبيقات ويندوز والألعاب باستخدام Unity.

#### تاريخ اللغة
تم إنشاء C# في عام 2000 بواسطة Anders Hejlsberg في مايكروسوفت. كانت الفكرة الأساسية هي إنشاء لغة حديثة لمنصة .NET.

#### لماذا تتعلم C#؟
- لغة متعددة الاستخدامات: ويندوز، ويب، ألعاب.
- مجتمع ضخم: ملايين المطورين.
- تستخدم في الشركات الكبرى: Microsoft، Unity، Stack Overflow.

#### مجالات استخدام C#
1. **تطبيقات ويندوز:** باستخدام WPF أو WinForms.
2. **الألعاب:** باستخدام Unity.
3. **تطبيقات الويب:** باستخدام ASP.NET.
4. **تطبيقات الهواتف:** باستخدام Xamarin.
5. **تطبيقات سطح المكتب.**

#### أمثلة على استخدامات C# في العالم الحقيقي
- **Microsoft:** تستخدم C# في تطوير ويندوز وأوفيس.
- **Unity:** تستخدم C# في محرك الألعاب.
- **Stack Overflow:** تستخدم C# في موقعها.

#### مستقبل C#
مع استمرار استخدام C# في الألعاب وتطبيقات ويندوز، ستبقى لغة قوية.
        `,
        usageExamples: `
### 🔧 أمثلة على استخدامات C#

#### 1. تطبيقات ويندوز (WPF)
\`\`\`csharp
// ملف MainWindow.xaml.cs
using System.Windows;

namespace MyApp {
    public partial class MainWindow : Window {
        public MainWindow() {
            InitializeComponent();
            MessageBox.Show("مرحباً بك!");
        }
    }
}
\`\`\`

#### 2. الألعاب (Unity)
\`\`\`csharp
// ملف PlayerController.cs
using UnityEngine;

public class PlayerController : MonoBehaviour {
    void Start() {
        Debug.Log("مرحباً باللعبة!");
    }
}
\`\`\`

#### 3. تطبيقات الويب (ASP.NET)
\`\`\`csharp
// ملف HomeController.cs
using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller {
    public IActionResult Index() {
        return Content("مرحباً بك في موقعي!");
    }
}
\`\`\`
        `
    }
};
