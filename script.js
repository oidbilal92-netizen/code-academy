// ===== عرض مستوى =====
function renderLevel(trackIdx, levelIdx) {
    const track = APP_DATA.tracks[trackIdx];
    const lvl = track.levels[levelIdx];
    const uses = track.uses;
    currentLevelIndex = levelIdx;

    document.getElementById('lessonTitle').textContent = `${track.name} - ${lvl.title}`;
    document.getElementById('levelBadge').textContent = `مستوى ${lvl.id + 1}`;

    document.getElementById('lessonVideo').src = lvl.video || 'https://www.youtube.com/embed/dQw4w9WgXcQ';

    const usesContent = document.getElementById('usesContent');
    usesContent.innerHTML = `
        <p><strong>${uses.overview}</strong></p>
        <ul>${uses.fields.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}</ul>
        <p style="margin-top:12px;"><strong>شركات تستخدم هذه اللغة:</strong> ${uses.companies.join(' - ')}</p>
    `;

    // ===== عرض الشرح الطويل =====
    const content = lvl.content;
    document.getElementById('explanation').innerHTML = `
        <div class="long-explanation">
            ${content.fullExplanation.split('\n').map(line => {
                if (line.startsWith('### ')) {
                    return `<h3>${line.replace('### ', '')}</h3>`;
                } else if (line.startsWith('```')) {
                    return '</div><div class="code-block">';
                } else if (line.startsWith('`')) {
                    return `<code>${line.replace(/`/g, '')}</code>`;
                } else {
                    return `<p>${line}</p>`;
                }
            }).join('')}
        </div>
    `;

    // الكود مع تمييز النحو
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

    // باقي الكود كما هو...
}
