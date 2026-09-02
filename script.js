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
    const totalLessons = APP_DATA.tracks.reduce((s, t) => s + t.levels.length, 0);
    document.getElementById('totalLessons').textContent = totalLessons;
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
    const uses = track.uses;
    currentLevelIndex = levelIdx;

    // العنوان
    document.getElementById('lessonTitle').textContent = `${track.name} - ${lvl.title}`;
    document.getElementById('levelBadge').textContent = `مستوى ${lvl.id + 1}`;

    // الصورة
    const img = document.getElementById('lessonImg');
    img.src = lvl.image || 'https://via.placeholder.com/600x300/2563eb/ffffff?text=درس+تعليمي';
    img.alt = lvl.title;

    // استخدامات اللغة
    const usesContent = document.getElementById('usesContent');
    usesContent.innerHTML = `
        <p><strong>${uses.overview}</strong></p>
        <ul>
            ${uses.fields.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
        </ul>
        <p style="margin-top:12px;"><strong>شركات تستخدم هذه اللغة:</strong> ${uses.companies.join(' - ')}</p>
    `;

    // الشرح
    const content = lvl.content;
    document.getElementById('explanation').innerHTML = `
        <h3>📖 مقدمة</h3>
        <p>${content.intro}</p>
        <h3>📘 شرح متعمق</h3>
        <p>${content.explanation}</p>
        <h3>🌍 استخدامات في الواقع</h3>
        <p>${content.realLife}</p>
        <h3>💡 لماذا هذا مهم؟</h3>
        <p>${content.whyImportant}</p>
    `;

    // الكود التوضيحي
    document.querySelector('#codeExample code').textContent = content.codeExample;
    document.getElementById('codeExplanation').innerHTML = `
        <strong>📝 شرح الكود:</strong> ${content.codeExplanation}
    `;

    // الملخص
    const summaryList = document.getElementById('summaryList');
    summaryList.innerHTML = content.summary.map(s => `<li>${s}</li>`).join('');

    // الاختبارات
    const quiz = lvl.quiz;
    const quizBody = document.getElementById('quizBody');
    let quizHTML = '';

    if (quiz.multiple && quiz.multiple.length > 0) {
        quizHTML += `<h4>اختيار من متعدد</h4>`;
        quiz.multiple.forEach((q, idx) => {
            quizHTML += `
                <p class="quiz-question">${idx+1}. ${q.question}</p>
                ${q.options.map((opt, i) => `
                    <label class="quiz-option">
                        <input type="radio" name="q${idx}" value="${i}" /> ${opt}
                    </label>
                `).join('')}
            `;
        });
    }

    if (quiz.truefalse && quiz.truefalse.length > 0) {
        quizHTML += `<h4>صح / خطأ</h4>`;
        quiz.truefalse.forEach((q, idx) => {
            const id = `tf_${idx}`;
            quizHTML += `
                <p class="quiz-question">${idx+1}. ${q.question}</p>
                <label class="quiz-option"><input type="radio" name="${id}" value="true" /> صح</label>
                <label class="quiz-option"><input type="radio" name="${id}" value="false" /> خطأ</label>
            `;
        });
    }

    if (quiz.matching && quiz.matching.length > 0) {
        quizHTML += `<h4>وصل</h4>`;
        quiz.matching.forEach((q, idx) => {
            quizHTML += `<p class="quiz-question">${q.question}</p>`;
            const left = q.pairs.map(p => p[0]);
            const right = q.pairs.map(p => p[1]);
            quizHTML += `
                <div style="display:flex;gap:20px;flex-wrap:wrap;margin:10px 0;">
                    <div style="flex:1;">
                        ${left.map((item, i) => `<div style="padding:6px 12px;background:var(--card);border:1px solid var(--border);border-radius:8px;margin:4px 0;">${item}</div>`).join('')}
                    </div>
                    <div style="flex:1;">
                        ${right.map((item, i) => `<div style="padding:6px 12px;background:var(--card);border:1px solid var(--border);border-radius:8px;margin:4px 0;">${item}</div>`).join('')}
                    </div>
                </div>
            `;
        });
    }

    if (quiz.ordering && quiz.ordering.length > 0) {
        quizHTML += `<h4>ترتيب</h4>`;
        quiz.ordering.forEach((q, idx) => {
            quizHTML += `
                <p class="quiz-question">${q.question}</p>
                ${q.steps.map((step, i) => `
                    <div style="display:flex;align-items:center;gap:10px;margin:6px 0;">
                        <span style="background:var(--primary);color:white;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;">${i+1}</span>
                        <span>${step}</span>
                    </div>
                `).join('')}
            `;
        });
    }

    quizBody.innerHTML = quizHTML || '<p>لا يوجد اختبارات لهذا الدرس.</p>';
    document.getElementById('quizResult').innerHTML = '';

    // زر الإكمال
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

// ===== اختبار =====
function submitQuiz() {
    const resultDiv = document.getElementById('quizResult');
    let correctCount = 0;
    let totalQuestions = 0;

    const multipleRadios = document.querySelectorAll('input[type="radio"][name^="q"]');
    multipleRadios.forEach(radio => {
        if (radio.checked) {
            totalQuestions++;
            const idx = parseInt(radio.name.replace('q', ''));
            const quiz = currentTrack.levels[currentLevelIndex].quiz;
            if (quiz.multiple && quiz.multiple[idx] && parseInt(radio.value) === quiz.multiple[idx].correct) {
                correctCount++;
            }
        }
    });

    const tfRadios = document.querySelectorAll('input[type="radio"][name^="tf_"]');
    const tfGroups = {};
    tfRadios.forEach(radio => {
        if (radio.checked) {
            if (!tfGroups[radio.name]) tfGroups[radio.name] = [];
            tfGroups[radio.name].push(radio.value);
        }
    });
    Object.keys(tfGroups).forEach((name, idx) => {
        if (tfGroups[name].length === 1) {
            totalQuestions++;
            const quiz = currentTrack.levels[currentLevelIndex].quiz;
            if (quiz.truefalse && quiz.truefalse[idx] && tfGroups[name][0] === String(quiz.truefalse[idx].correct)) {
                correctCount++;
            }
        }
    });

    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    if (percentage >= 70) {
        const bonus = Math.min(10, Math.floor(percentage / 10));
        score += bonus;
        saveProgress();
        resultDiv.innerHTML = `<span class="text-success">✅ نتيجة ممتازة! ${percentage}% (+${bonus} نقاط)</span>`;
        showToast(`🌟 نتيجة ممتازة! +${bonus} نقاط`);
    } else if (percentage >= 40) {
        resultDiv.innerHTML = `<span class="text-warning">⚠️ نتيجة جيدة: ${percentage}% (حاول مرة أخرى للحصول على نقاط إضافية)</span>`;
    } else {
        resultDiv.innerHTML = `<span class="text-danger">❌ نتيجة: ${percentage}% (راجع الدرس وحاول مرة أخرى)</span>`;
    }
}

// ===== إكمال المستوى =====
function completeLevel() {
    const track = currentTrack;
    const lvl = track.levels[currentLevelIndex];
    const key = track.id + '-' + lvl.id;
    if (completed[key]) {
        showToast('✅ هذا الدرس مكتمل بالفعل', true);
        return;
    }
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
    const data = {
        user: 'developer',
        score,
        completed,
        badges: userBadges,
        exportDate: new Date().toISOString(),
        totalLessons: APP_DATA.tracks.reduce((s, t) => s + t.levels.length, 0)
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
        score = 0;
        completed = {};
        userBadges = 0;
        saveProgress();
        renderTracks();
        showToast('🔄 تم إعادة تعيين التقدم');
        document.getElementById('profileModal').style.display = 'none';
    }
}

// ===== الأحداث =====
document.addEventListener('DOMContentLoaded', () => {
    renderTracks();

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
    console.log('🚀 المنصة النظرية المتكاملة جاهزة!');
});
