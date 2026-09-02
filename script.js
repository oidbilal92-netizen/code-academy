// ===== المتغيرات العامة =====
let currentTrack = null;
let currentLevelIndex = 0;
let score = parseInt(localStorage.getItem('proScore')) || 0;
let completed = JSON.parse(localStorage.getItem('proCompleted')) || {};
let userBadges = parseInt(localStorage.getItem('proBadges')) || 0;

// ===== الإشعارات =====
function showToast(msg, isError = false) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast' + (isError ? ' error' : '');
    t.style.display = 'block';
    setTimeout(() => { t.style.display = 'none'; }, 3000);
}

// ===== حفظ التقدم =====
function saveProgress() {
    localStorage.setItem('proScore', score);
    localStorage.setItem('proCompleted', JSON.stringify(completed));
    localStorage.setItem('proBadges', userBadges);
    document.getElementById('userScore').textContent = score;
    document.getElementById('userBadges').textContent = userBadges;
}

// ===== عرض اللغات (المسارات) =====
function renderTracks() {
    const grid = document.getElementById('trackGrid');
    if (!grid) return;
    if (!APP_DATA || !APP_DATA.tracks) {
        grid.innerHTML = '<p style="color:red;">⚠️ لم يتم تحميل البيانات</p>';
        return;
    }
    grid.innerHTML = APP_DATA.tracks.map((t, idx) => {
        const done = Object.keys(completed).filter(k => k.startsWith(t.id)).length;
        const total = t.levels.length;
        const progress = total > 0 ? Math.round((done / total) * 100) : 0;
        return `
            <div class="track-card" data-track="${idx}">
                <div class="track-icon"><i class="${t.icon}"></i></div>
                <h3>${t.name}</h3>
                <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
                <span class="badge">${done}/${total}</span>
                <button class="start-btn" onclick="openTrack(${idx})">ابدأ التعلم →</button>
            </div>
        `;
    }).join('');
    document.getElementById('totalTracks').textContent = APP_DATA.tracks.length;
    const totalLessons = APP_DATA.tracks.reduce((s, t) => s + t.levels.length, 0);
    document.getElementById('totalLessons').textContent = totalLessons;
    document.getElementById('userScore').textContent = score;
    document.getElementById('userBadges').textContent = userBadges;
}

// ===== فتح مسار =====
function openTrack(trackIdx) {
    currentTrack = APP_DATA.tracks[trackIdx];
    currentLevelIndex = 0;
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('lessonPanel').style.display = 'block';
    renderLevel(trackIdx, 0);
}

// ===== عرض مستوى (بدون فيديو) =====
function renderLevel(trackIdx, levelIdx) {
    const track = APP_DATA.tracks[trackIdx];
    const lvl = track.levels[levelIdx];
    const uses = track.uses;
    currentLevelIndex = levelIdx;

    document.getElementById('lessonTitle').textContent = `${track.name} - ${lvl.title}`;
    document.getElementById('levelBadge').textContent = `مستوى ${lvl.id + 1}`;

    // ✅ إخفاء الفيديو نهائياً
    const videoSection = document.getElementById('videoSection');
    if (videoSection) {
        videoSection.style.display = 'none';
    }

    const usesContent = document.getElementById('usesContent');
    usesContent.innerHTML = `
        <p><strong>${uses.overview}</strong></p>
        <ul>${uses.fields.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}</ul>
        <p><strong>شركات:</strong> ${uses.companies.join(' - ')}</p>
    `;

    const content = lvl.content;
    const explanationDiv = document.getElementById('explanation');
    explanationDiv.innerHTML = content.fullExplanation
        .split('\n')
        .map(line => {
            if (line.startsWith('```')) {
                return `<pre class="code-block"><code>${line.replace(/```/g, '')}</code></pre>`;
            } else if (line.startsWith('**') && line.endsWith('**')) {
                return `<h3>${line.replace(/\*\*/g, '')}</h3>`;
            } else if (line.startsWith('- ')) {
                return `<li>${line.replace('- ', '')}</li>`;
            } else if (line.trim() === '') {
                return '<br>';
            } else {
                return `<p>${line}</p>`;
            }
        })
        .join('');

    const codeElement = document.getElementById('codeExample');
    const langMap = { 'python': 'python', 'javascript': 'javascript', 'java': 'java', 'cpp': 'cpp', 'csharp': 'csharp' };
    const langId = langMap[track.id] || 'python';
    codeElement.className = `language-${langId}`;
    codeElement.textContent = content.codeExample;
    if (window.Prism) {
        Prism.highlightElement(codeElement);
    }

    document.getElementById('codeExplanation').innerHTML = `<strong>📝 شرح الكود:</strong> ${content.codeExplanation}`;

    const summaryList = document.getElementById('summaryList');
    summaryList.innerHTML = content.summary.map(s => `<li>${s}</li>`).join('');

    const quiz = lvl.quiz;
    const quizBody = document.getElementById('quizBody');
    let quizHTML = '';
    if (quiz.multiple && quiz.multiple.length > 0) {
        quizHTML += `<h4>اختيار من متعدد</h4>`;
        quiz.multiple.forEach((q, idx) => {
            quizHTML += `<p class="quiz-question">${idx+1}. ${q.question}</p>`;
            q.options.forEach((opt, i) => {
                quizHTML += `<label class="quiz-option"><input type="radio" name="q${idx}" value="${i}" /> ${opt}</label>`;
            });
        });
    }
    if (quiz.truefalse && quiz.truefalse.length > 0) {
        quizHTML += `<h4>صح / خطأ</h4>`;
        quiz.truefalse.forEach((q, idx) => {
            quizHTML += `<p class="quiz-question">${idx+1}. ${q.question}</p>`;
            quizHTML += `<label class="quiz-option"><input type="radio" name="tf_${idx}" value="true" /> صح</label>`;
            quizHTML += `<label class="quiz-option"><input type="radio" name="tf_${idx}" value="false" /> خطأ</label>`;
        });
    }
    quizBody.innerHTML = quizHTML || '<p>لا يوجد اختبارات.</p>';
    document.getElementById('quizResult').innerHTML = '';

    const totalLevels = track.levels.length;
    document.getElementById('prevLevelBtn').disabled = levelIdx === 0;
    document.getElementById('nextLevelBtn').disabled = levelIdx === totalLevels - 1;

    const key = track.id + '-' + lvl.id;
    const btn = document.getElementById('completeLevelBtn');
    if (completed[key]) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-check-circle"></i> مكتمل ✅';
        btn.className = 'complete-btn completed';
    } else {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-award"></i> إنهاء الدرس';
        btn.className = 'complete-btn';
    }
}

// ===== التنقل بين المستويات =====
function navigateLevel(direction) {
    const track = currentTrack;
    const newIndex = currentLevelIndex + direction;
    if (newIndex < 0 || newIndex >= track.levels.length) return;
    renderLevel(APP_DATA.tracks.indexOf(track), newIndex);
}

// ===== اختبار =====
function submitQuiz() {
    const resultDiv = document.getElementById('quizResult');
    let correct = 0, total = 0;

    document.querySelectorAll('input[type="radio"][name^="q"]').forEach(r => {
        if (r.checked) {
            total++;
            const idx = parseInt(r.name.replace('q', ''));
            const quiz = currentTrack.levels[currentLevelIndex].quiz;
            if (quiz.multiple && quiz.multiple[idx] && parseInt(r.value) === quiz.multiple[idx].correct) correct++;
        }
    });

    const tfGroups = {};
    document.querySelectorAll('input[type="radio"][name^="tf_"]').forEach(r => {
        if (r.checked) {
            if (!tfGroups[r.name]) tfGroups[r.name] = [];
            tfGroups[r.name].push(r.value);
        }
    });
    Object.keys(tfGroups).forEach((name, idx) => {
        if (tfGroups[name].length === 1) {
            total++;
            const quiz = currentTrack.levels[currentLevelIndex].quiz;
            if (quiz.truefalse && quiz.truefalse[idx] && tfGroups[name][0] === String(quiz.truefalse[idx].correct)) correct++;
        }
    });

    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    if (pct >= 70) {
        const bonus = Math.min(10, Math.floor(pct / 10));
        score += bonus;
        saveProgress();
        resultDiv.innerHTML = `<span class="text-success">✅ ممتاز! ${pct}% (+${bonus} نقاط)</span>`;
        showToast(`🌟 +${bonus} نقاط`);
    } else if (pct >= 40) {
        resultDiv.innerHTML = `<span class="text-warning">⚠️ جيد: ${pct}% (حاول مرة أخرى)</span>`;
    } else {
        resultDiv.innerHTML = `<span class="text-danger">❌ ${pct}% (راجع الدرس)`;
    }
}

// ===== إكمال المستوى =====
function completeLevel() {
    const track = currentTrack;
    const lvl = track.levels[currentLevelIndex];
    const key = track.id + '-' + lvl.id;
    if (completed[key]) { showToast('✅ مكتمل', true); return; }
    completed[key] = true;
    score += 20;
    userBadges += 1;
    saveProgress();
    showToast(`🏆 تم إكمال "${lvl.title}"! +20 نقاط`);
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
    document.getElementById('profileLessons').textContent = Object.keys(completed).length;
    document.getElementById('profileCertificates').textContent = userBadges;
    document.getElementById('profileModal').style.display = 'flex';
}

function exportProgress() {
    const data = { score, completed, badges: userBadges, exportDate: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `progress_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    showToast('📥 تم التصدير');
}

function resetProgress() {
    if (confirm('⚠️ حذف كل التقدم؟')) {
        localStorage.clear();
        score = 0; completed = {}; userBadges = 0;
        saveProgress();
        renderTracks();
        showToast('🔄 تم إعادة التعيين');
        document.getElementById('profileModal').style.display = 'none';
    }
}

// ===== الأحداث =====
document.addEventListener('DOMContentLoaded', function() {
    renderTracks();

    document.getElementById('backBtn').addEventListener('click', goBack);
    document.getElementById('prevLevelBtn').addEventListener('click', () => navigateLevel(-1));
    document.getElementById('nextLevelBtn').addEventListener('click', () => navigateLevel(1));
    document.getElementById('completeLevelBtn').addEventListener('click', completeLevel);
    document.getElementById('submitQuizBtn').addEventListener('click', submitQuiz);
    document.getElementById('profileBtn').addEventListener('click', openProfile);
    document.getElementById('closeProfile').addEventListener('click', () => document.getElementById('profileModal').style.display = 'none');
    document.getElementById('exportProgressBtn').addEventListener('click', exportProgress);
    document.getElementById('resetProgressBtn').addEventListener('click', resetProgress);

    document.getElementById('copyCodeBtn').addEventListener('click', () => {
        const code = document.getElementById('codeExample').textContent;
        navigator.clipboard.writeText(code).then(() => showToast('📋 تم النسخ')).catch(() => showToast('❌ فشل', true));
    });

    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const icon = document.querySelector('#themeToggle i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });

    document.getElementById('profileModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) document.getElementById('profileModal').style.display = 'none';
    });

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }

    saveProgress();
    console.log('🚀 المنصة جاهزة بدون فيديوهات!');
});
