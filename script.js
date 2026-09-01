// ===== المتغيرات العامة =====
let currentTrack = null;
let currentLevelIndex = 0;
let score = parseInt(localStorage.getItem('proScore')) || 0;
let completed = JSON.parse(localStorage.getItem('proCompleted')) || {};
let userBadges = parseInt(localStorage.getItem('proBadges')) || 0;
let lang = 'ar';

// ===== الإشعارات =====
function showToast(msg, isError = false) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast' + (isError ? ' error' : '');
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 3000);
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
        return `
            <div class="track-card" data-track="${idx}">
                <i class="${t.icon}"></i> ${t.name}
                <div class="badge">${done}/${total}</div>
            </div>
        `;
    }).join('');
    document.getElementById('totalTracks').textContent = APP_DATA.tracks.length;
    const totalLevels = APP_DATA.tracks.reduce((s, t) => s + t.levels.length, 0);
    document.getElementById('totalLevels').textContent = totalLevels;
    document.getElementById('userScore').textContent = score;
    document.getElementById('userBadges').textContent = userBadges;
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
}

// ===== عرض مستوى =====
function renderLevel(trackIdx, levelIdx) {
    const track = APP_DATA.tracks[trackIdx];
    const lvl = track.levels[levelIdx];
    currentLevelIndex = levelIdx;
    document.getElementById('lessonTitle').textContent = `${track.name} - ${lvl.title}`;
    document.getElementById('levelBadge').textContent = `مستوى ${lvl.id}`;
    document.getElementById('explanation').innerHTML = lvl.content;
    document.getElementById('codeEditor').value = lvl.code;
    document.getElementById('outputContent').textContent = '⏳ انتظر التنفيذ...';
    const quiz = lvl.quiz;
    const quizBody = document.getElementById('quizBody');
    if (quiz) {
        quizBody.innerHTML = `
            <p><strong>${quiz.question}</strong></p>
            ${quiz.options.map((opt, i) => `
                <label class="quiz-option">
                    <input type="radio" name="quizAns" value="${i}" /> ${opt}
                </label>
            `).join('')}
        `;
    } else {
        quizBody.innerHTML = '<p>لا يوجد اختبار.</p>';
    }
    document.getElementById('quizResult').innerHTML = '';
    const key = track.id + '-' + lvl.id;
    const btn = document.getElementById('completeLevelBtn');
    if (completed[key]) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-check-circle"></i> مكتمل ✅';
    } else {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-check-circle"></i> إنهاء المستوى';
    }
}

// ===== تشغيل الكود عبر JDoodle API (مجاني، بدون مفتاح) =====
async function runCode() {
    const code = document.getElementById('codeEditor').value;
    const output = document.getElementById('outputContent');
    output.textContent = '⏳ جاري التنفيذ...';

    let langMap = {
        'python': 'python3',
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
    let lang = currentTrack ? (langMap[currentTrack.id] || 'python3') : 'python3';

    try {
        const res = await fetch('https://api.jdoodle.com/v1/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                script: code,
                language: lang,
                versionIndex: '0'
            })
        });
        const data = await res.json();
        if (data.output) {
            output.textContent = data.output.trim() || '(لا يوجد مخرجات)';
        } else if (data.error) {
            output.textContent = '❌ خطأ: ' + data.error;
        } else {
            output.textContent = '❌ خطأ غير معروف';
        }
    } catch (e) {
        output.textContent = '❌ فشل الاتصال بالخادم';
    }
}

// ===== اختبار =====
function submitQuiz() {
    const selected = document.querySelector('input[name="quizAns"]:checked');
    const resultDiv = document.getElementById('quizResult');
    if (!selected) { resultDiv.innerHTML = '<span style="color:red;">⚠️ اختر إجابة</span>'; return; }
    const ans = parseInt(selected.value);
    const quiz = currentTrack.levels[currentLevelIndex].quiz;
    if (ans === quiz.correct) {
        resultDiv.innerHTML = '<span style="color:#22c55e;">✅ صحيح! +5 نقاط</span>';
        score += 5; saveProgress();
    } else {
        resultDiv.innerHTML = `<span style="color:#ef4444;">❌ خطأ. الصحيح: ${quiz.options[quiz.correct]}</span>`;
    }
}

// ===== إكمال المستوى =====
function completeLevel() {
    const track = currentTrack;
    const lvl = track.levels[currentLevelIndex];
    const key = track.id + '-' + lvl.id;
    if (completed[key]) return;
    completed[key] = true;
    score += 10;
    userBadges += 1;
    saveProgress();
    showToast(`🎉 تم إكمال "${lvl.title}"! +10 نقاط`);
    const btn = document.getElementById('completeLevelBtn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-check-circle"></i> مكتمل ✅';
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
    document.getElementById('profileModal').style.display = 'flex';
}
function exportProgress() {
    const data = { score, completed, badges: userBadges, date: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'my_progress.json';
    a.click();
    showToast('📥 تم التصدير');
}
function resetProgress() {
    if (confirm('⚠️ حذف كل التقدم؟')) {
        localStorage.removeItem('proScore');
        localStorage.removeItem('proCompleted');
        localStorage.removeItem('proBadges');
        score = 0; completed = {}; userBadges = 0;
        saveProgress();
        renderTracks();
        showToast('🔄 تم إعادة التعيين');
        document.getElementById('profileModal').style.display = 'none';
    }
}

// ===== الأحداث =====
document.addEventListener('DOMContentLoaded', () => {
    renderTracks();
    document.getElementById('runCodeBtn').addEventListener('click', runCode);
    document.getElementById('resetCodeBtn').addEventListener('click', () => {
        if (currentTrack) {
            document.getElementById('codeEditor').value = currentTrack.levels[currentLevelIndex].code;
            document.getElementById('outputContent').textContent = '⏳ انتظر التنفيذ...';
        }
    });
    document.getElementById('copyCodeBtn').addEventListener('click', () => {
        navigator.clipboard.writeText(document.getElementById('codeEditor').value).then(() => showToast('📋 نسخ')).catch(() => showToast('❌ فشل', true));
    });
    document.getElementById('submitQuizBtn').addEventListener('click', submitQuiz);
    document.getElementById('completeLevelBtn').addEventListener('click', completeLevel);
    document.getElementById('backBtn').addEventListener('click', goBack);
    document.getElementById('profileBtn').addEventListener('click', openProfile);
    document.getElementById('closeProfile').addEventListener('click', () => document.getElementById('profileModal').style.display = 'none');
    document.getElementById('exportProgressBtn').addEventListener('click', exportProgress);
    document.getElementById('resetProgressBtn').addEventListener('click', resetProgress);
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const icon = document.querySelector('#themeToggle i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
    document.getElementById('langToggle').addEventListener('click', () => {
        lang = lang === 'ar' ? 'en' : 'ar';
        document.getElementById('langToggle').textContent = lang === 'ar' ? 'EN' : 'عربي';
        showToast(lang === 'ar' ? '🔁 العربية' : '🔁 English');
    });
    document.getElementById('profileModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) document.getElementById('profileModal').style.display = 'none';
    });
    saveProgress();
    console.log('🚀 المنصة الاحترافية النهائية جاهزة!');
});
