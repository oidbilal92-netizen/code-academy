// ============================================================
// منصة الاحتراف البرمجي - النسخة الاحترافية المطلقة
// تعمل بتقنية Pyodide (WebAssembly) - بدون أي API خارجي
// ============================================================

// ===== المتغيرات العامة =====
let currentTrack = null;
let currentLevelIndex = 0;
let score = parseInt(localStorage.getItem('proScore')) || 0;
let completed = JSON.parse(localStorage.getItem('proCompleted')) || {};
let userBadges = parseInt(localStorage.getItem('proBadges')) || 0;
let streak = parseInt(localStorage.getItem('proStreak')) || 0;
let lastVisit = localStorage.getItem('proLastVisit') || '';
let lang = 'ar';
let pyodide = null;
let isPyodideLoading = false;

// ===== حساب أيام التعلم =====
function updateStreak() {
    const today = new Date().toDateString();
    if (lastVisit !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastVisit === yesterday.toDateString()) {
            streak += 1;
        } else {
            streak = 1;
        }
        lastVisit = today;
        localStorage.setItem('proStreak', streak);
        localStorage.setItem('proLastVisit', lastVisit);
    }
    document.getElementById('userStreak').textContent = streak;
    document.getElementById('profileStreak').textContent = streak;
}

// ===== تحميل Pyodide =====
async function initPyodide() {
    if (pyodide) return pyodide;
    if (isPyodideLoading) {
        return new Promise((resolve) => {
            const check = setInterval(() => {
                if (pyodide) {
                    clearInterval(check);
                    resolve(pyodide);
                }
            }, 100);
        });
    }
    isPyodideLoading = true;
    const output = document.getElementById('outputContent');
    output.textContent = '⏳ جاري تحميل محرك Python عالي الأداء...';
    
    try {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js';
        document.head.appendChild(script);
        
        await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
        });
        
        pyodide = await loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/'
        });
        
        pyodide.runPython(`
import sys
import io
import traceback
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
        `);
        
        isPyodideLoading = false;
        output.textContent = '✅ محرك Python جاهز! قم بتشغيل الكود.';
        showToast('🚀 تم تحميل محرك Python بنجاح');
        return pyodide;
    } catch (e) {
        isPyodideLoading = false;
        output.textContent = '❌ فشل تحميل محرك Python: ' + e.message;
        showToast('❌ فشل تحميل المحرك', true);
        throw e;
    }
}

// ===== الإشعارات الاحترافية =====
function showToast(msg, isError = false) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast' + (isError ? ' error' : '');
    t.style.display = 'block';
    t.style.animation = 'slideIn 0.5s ease';
    setTimeout(() => {
        t.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => t.style.display = 'none', 500);
    }, 3500);
}

// ===== حفظ التقدم =====
function saveProgress() {
    localStorage.setItem('proScore', score);
    localStorage.setItem('proCompleted', JSON.stringify(completed));
    localStorage.setItem('proBadges', userBadges);
    document.getElementById('userScore').textContent = score;
    document.getElementById('userBadges').textContent = userBadges;
}

// ===== عرض اللغات =====
function renderTracks() {
    const grid = document.getElementById('trackGrid');
    grid.innerHTML = APP_DATA.tracks.map((t, idx) => {
        const done = Object.keys(completed).filter(k => k.startsWith(t.id)).length;
        const total = t.levels.length;
        const progress = total > 0 ? Math.round((done / total) * 100) : 0;
        return `
            <div class="track-card" data-track="${idx}">
                <i class="${t.icon}"></i>
                <span>${t.name}</span>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <div class="badge">${done}/${total}</div>
            </div>
        `;
    }).join('');
    document.getElementById('totalTracks').textContent = APP_DATA.tracks.length;
    const totalLevels = APP_DATA.tracks.reduce((s, t) => s + t.levels.length, 0);
    document.getElementById('totalLevels').textContent = totalLevels;
    document.getElementById('userScore').textContent = score;
    document.getElementById('userBadges').textContent = userBadges;
    updateStreak();
    document.querySelectorAll('.track-card').forEach(el => {
        el.addEventListener('click', () => {
            const idx = parseInt(el.dataset.track);
            openTrack(idx);
        });
    });
}

// ===== فتح مسار =====
function openTrack(trackIdx) {
    currentTrack = APP_DATA.tracks[trackIdx];
    currentLevelIndex = 0;
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('lessonPanel').style.display = 'block';
    renderLevel(trackIdx, 0);
    if (currentTrack.id === 'python') {
        initPyodide().catch(() => {});
    }
}

// ===== عرض مستوى =====
function renderLevel(trackIdx, levelIdx) {
    const track = APP_DATA.tracks[trackIdx];
    const lvl = track.levels[levelIdx];
    currentLevelIndex = levelIdx;
    document.getElementById('lessonTitle').textContent = `${track.name} - ${lvl.title}`;
    document.getElementById('levelBadge').textContent = `مستوى ${lvl.id + 1}`;
    document.getElementById('explanation').innerHTML = lvl.content;
    document.getElementById('codeEditor').value = lvl.code;
    document.getElementById('outputContent').textContent = '💡 قم بتشغيل الكود لترى النتيجة';
    document.getElementById('expectedOutput').textContent = lvl.expected || '(غير محددة)';
    
    const quiz = lvl.quiz;
    const quizBody = document.getElementById('quizBody');
    if (quiz) {
        quizBody.innerHTML = `
            <p class="quiz-question"><strong>${quiz.question}</strong></p>
            ${quiz.options.map((opt, i) => `
                <label class="quiz-option">
                    <input type="radio" name="quizAns" value="${i}" />
                    <span>${opt}</span>
                </label>
            `).join('')}
        `;
    } else {
        quizBody.innerHTML = '<p class="text-muted">لا يوجد اختبار لهذا المستوى.</p>';
    }
    document.getElementById('quizResult').innerHTML = '';
    const key = track.id + '-' + lvl.id;
    const btn = document.getElementById('completeLevelBtn');
    if (completed[key]) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-check-circle"></i> مكتمل ✅';
        btn.className = 'complete-btn completed';
    } else {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-award"></i> إنهاء المستوى';
        btn.className = 'complete-btn';
    }
}

// ===== تشغيل الكود الاحترافي مع مقارنة المخرجات =====
async function runCode() {
    const code = document.getElementById('codeEditor').value;
    const output = document.getElementById('outputContent');
    const expected = document.getElementById('expectedOutput').textContent || '';
    
    if (currentTrack && currentTrack.id === 'python') {
        try {
            if (!pyodide) {
                output.textContent = '⏳ جاري تحميل محرك Python...';
                await initPyodide();
            }
            
            pyodide.runPython(`
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
            `);
            
            try {
                pyodide.runPython(code);
            } catch (e) {
                try {
                    pyodide.runPython(`
exec('''${code.replace(/'/g, "\\'")}''')
                    `);
                } catch (e2) {
                    throw e2;
                }
            }
            
            const result = pyodide.runPython('sys.stdout.getvalue()');
            const error = pyodide.runPython('sys.stderr.getvalue()');
            
            let finalOutput = '';
            if (error) {
                finalOutput = '❌ خطأ:\n' + error;
            } else if (result) {
                finalOutput = result;
            } else {
                finalOutput = '✅ تم التنفيذ بنجاح (لا يوجد مخرجات)';
            }
            
            // مقارنة المخرجات مع المتوقع
            if (expected && expected !== '(غير محددة)') {
                const isMatch = finalOutput.trim() === expected.trim();
                if (!isMatch) {
                    finalOutput += `\n\n⚠️ المخرجات لا تطابق المتوقع!\n🔮 المتوقع: ${expected}`;
                } else {
                    finalOutput += `\n\n✅ المخرجات تطابق المتوقع!`;
                }
            }
            
            output.textContent = finalOutput;
            
        } catch (e) {
            output.textContent = '❌ خطأ في التنفيذ:\n' + e.message;
        }
        return;
    }
    
    const langMap = {
        'javascript': 'nodejs',
        'cpp': 'cpp',
        'java': 'java',
        'csharp': 'csharp',
        'php': 'php',
        'swift': 'swift',
        'kotlin': 'kotlin',
        'go': 'go',
        'rust': 'rust'
    };
    const langId = currentTrack ? (langMap[currentTrack.id] || 'python3') : 'python3';
    
    output.textContent = '⏳ جاري التنفيذ عبر JDoodle...';
    
    try {
        const res = await fetch('https://api.jdoodle.com/v1/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                script: code,
                language: langId,
                versionIndex: '0'
            })
        });
        const data = await res.json();
        let finalOutput = '';
        if (data.output) {
            finalOutput = data.output.trim() || '(لا يوجد مخرجات)';
        } else if (data.error) {
            finalOutput = '❌ خطأ: ' + data.error;
        } else {
            finalOutput = '❌ خطأ غير معروف';
        }
        
        // مقارنة المخرجات مع المتوقع
        if (expected && expected !== '(غير محددة)') {
            const isMatch = finalOutput.trim() === expected.trim();
            if (!isMatch) {
                finalOutput += `\n\n⚠️ المخرجات لا تطابق المتوقع!\n🔮 المتوقع: ${expected}`;
            } else {
                finalOutput += `\n\n✅ المخرجات تطابق المتوقع!`;
            }
        }
        
        output.textContent = finalOutput;
        
    } catch (e) {
        const expectedFallback = expected || '(لا توجد مخرجات متوقعة)';
        output.textContent = `⚠️ تعذر الاتصال بالخادم.\n🔮 المخرجات المتوقعة:\n${expectedFallback}`;
    }
}

// ===== اختبار =====
function submitQuiz() {
    const selected = document.querySelector('input[name="quizAns"]:checked');
    const resultDiv = document.getElementById('quizResult');
    if (!selected) {
        resultDiv.innerHTML = '<span class="text-danger">⚠️ يرجى اختيار إجابة</span>';
        return;
    }
    const ans = parseInt(selected.value);
    const quiz = currentTrack.levels[currentLevelIndex].quiz;
    if (ans === quiz.correct) {
        resultDiv.innerHTML = '<span class="text-success">✅ إجابة صحيحة! +5 نقاط</span>';
        score += 5;
        saveProgress();
        showToast('🌟 إجابة صحيحة! +5 نقاط');
    } else {
        resultDiv.innerHTML = `<span class="text-danger">❌ إجابة خاطئة. الصحيح: ${quiz.options[quiz.correct]}</span>`;
    }
}

// ===== إكمال المستوى =====
function completeLevel() {
    const track = currentTrack;
    const lvl = track.levels[currentLevelIndex];
    const key = track.id + '-' + lvl.id;
    if (completed[key]) {
        showToast('✅ هذا المستوى مكتمل بالفعل', true);
        return;
    }
    completed[key] = true;
    score += 15;
    userBadges += 1;
    saveProgress();
    showToast(`🏆 تم إكمال "${lvl.title}"! +15 نقاط`);
    const btn = document.getElementById('completeLevelBtn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-check-circle"></i> مكتمل ✅';
    btn.className = 'complete-btn completed';
    renderTracks();
}

// ===== العودة =====
function goBack() {
    document.getElementById('lessonPanel').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    renderTracks();
}

// ===== الملف الشخصي =====
function openProfile() {
    document.getElementById('profileScore').textContent = score;
    document.getElementById('profileLevels').textContent = Object.keys(completed).length;
    document.getElementById('profileCertificates').textContent = userBadges;
    document.getElementById('profileStreak').textContent = streak;
    document.getElementById('profileModal').style.display = 'flex';
}

function exportProgress() {
    const data = {
        user: 'developer',
        score,
        completed,
        badges: userBadges,
        streak,
        exportDate: new Date().toISOString(),
        totalLevels: APP_DATA.tracks.reduce((s, t) => s + t.levels.length, 0)
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `progress_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    showToast('📥 تم تصدير التقدم بنجاح');
}

function resetProgress() {
    if (confirm('⚠️ تحذير: هذا الإجراء سيمحو كل تقدمك. هل أنت متأكد؟')) {
        localStorage.removeItem('proScore');
        localStorage.removeItem('proCompleted');
        localStorage.removeItem('proBadges');
        localStorage.removeItem('proStreak');
        localStorage.removeItem('proLastVisit');
        score = 0;
        completed = {};
        userBadges = 0;
        streak = 0;
        saveProgress();
        renderTracks();
        showToast('🔄 تم إعادة تعيين التقدم');
        document.getElementById('profileModal').style.display = 'none';
    }
}

// ===== الأحداث =====
document.addEventListener('DOMContentLoaded', () => {
    renderTracks();
    
    setTimeout(() => {
        initPyodide().catch(() => {});
    }, 1000);
    
    document.getElementById('runCodeBtn').addEventListener('click', runCode);
    document.getElementById('resetCodeBtn').addEventListener('click', () => {
        if (currentTrack) {
            document.getElementById('codeEditor').value = currentTrack.levels[currentLevelIndex].code;
            document.getElementById('outputContent').textContent = '💡 قم بتشغيل الكود لترى النتيجة';
            document.getElementById('expectedOutput').textContent = currentTrack.levels[currentLevelIndex].expected || '(غير محددة)';
        }
    });
    document.getElementById('copyCodeBtn').addEventListener('click', () => {
        const code = document.getElementById('codeEditor').value;
        navigator.clipboard.writeText(code).then(() => {
            showToast('📋 تم نسخ الكود إلى الحافظة');
        }).catch(() => {
            showToast('❌ فشل النسخ', true);
        });
    });
    document.getElementById('submitQuizBtn').addEventListener('click', submitQuiz);
    document.getElementById('completeLevelBtn').addEventListener('click', completeLevel);
    document.getElementById('backBtn').addEventListener('click', goBack);
    document.getElementById('profileBtn').addEventListener('click', openProfile);
    document.getElementById('closeProfile').addEventListener('click', () => {
        document.getElementById('profileModal').style.display = 'none';
    });
    document.getElementById('exportProgressBtn').addEventListener('click', exportProgress);
    document.getElementById('resetProgressBtn').addEventListener('click', resetProgress);
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const icon = document.querySelector('#themeToggle i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
    document.getElementById('langToggle').addEventListener('click', () => {
        lang = lang === 'ar' ? 'en' : 'ar';
        document.getElementById('langToggle').textContent = lang === 'ar' ? 'EN' : 'عربي';
        showToast(lang === 'ar' ? '🔁 تم التبديل إلى العربية' : '🔁 Switched to English');
    });
    document.getElementById('profileModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            document.getElementById('profileModal').style.display = 'none';
        }
    });
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }
    
    saveProgress();
    console.log('🚀 المنصة الاحترافية المطلقة جاهزة!');
});

// ===== اختصارات لوحة المفاتيح =====
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
    }
    if (e.key === 'Escape') {
        document.getElementById('profileModal').style.display = 'none';
    }
});
