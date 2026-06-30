// app.js — LexQuiz engine v2
// Requires: quizData01.js … quizData05.js in same folder

import quizData01, { quizMeta01 } from './quizData01.js';
import quizData02, { quizMeta02 } from './quizData02.js';
import quizData03, { quizMeta03 } from './quizData03.js';
import quizData04, { quizMeta04 } from './quizData04.js';
import quizData05, { quizMeta05 } from './quizData05.js';

// ── Data registry ──────────────────────────────────────────────
const SETS = [
  { meta: quizMeta01, data: quizData01 },
  { meta: quizMeta02, data: quizData02 },
  { meta: quizMeta03, data: quizData03 },
  { meta: quizMeta04, data: quizData04 },
  { meta: quizMeta05, data: quizData05 },
];

const ALL_QUESTIONS = SETS.flatMap((s, si) =>
  s.data.map(q => ({ ...q, setIndex: si, setLabel: `Đề ${si + 1}` }))
);

// ── PDF Library data ───────────────────────────────────────────
// Chỉnh sửa mảng này để thêm/bớt tài liệu.
// url: đường dẫn tới file PDF (có thể là URL tuyệt đối hoặc tương đối)
const PDF_LIBRARY = [
  {
    id: 1,
    title: "LMS Chương 1 — Nguồn gốc và bản chất Nhà nước",
    category: "slide",
    desc: "LMS Đáp  dạng PDF · Chương 1",
    size: "2.4 MB",
    url: "./docs/Quiz 1.pdf",
  },
  {
    id: 2,
    title: "LMS Chương 2 — Pháp luật và Hệ thống pháp luật",
    category: "slide",
    desc: "LMS Đáp  dạng PDF · Chương 2",
    size: "3.1 MB",
    url: "./docs/Quiz 2.pdf",
  },
  {
    id: 3,
    title: "LMS Chương 3 — Thực hiện và Áp dụng pháp luật",
    category: "slide",
    desc: "LMS Đáp  dạng PDF · Chương 3",
    size: "2.8 MB",
    url: "./docs/Quiz 3.pdf",
  },
  {
    id: 4,
    title: "LMS Chương 4 — Quy phạm pháp luật",
    category: "slide",
    desc: "LMS Đáp dạng PDF · Chương 4",
    size: "3.0 MB",
    url: "./docs/Quiz 4.pdf"
  },
  {
    id: 5,
    title: "LMS Chương 5 — Quan hệ pháp luật",
    category: "slide",
    desc: "LMS Đáp dạng PDF · Chương 5",
    size: "2.7 MB",
    url: "./docs/Quiz 5.pdf"
  },
  {
    id: 6,
    title: "LMS Chương 6 — Vi phạm pháp luật và Trách nhiệm pháp lý",
    category: "slide",
    desc: "LMS Đáp dạng PDF · Chương 6",
    size: "3.2 MB",
    url: "./docs/Quiz 6.pdf"
  },
  {
    id: 7,
    title: "Đề thi cuối kỳ — Tổng ôn năm học 2015-2016",
    category: "exam",
    desc: "Đề thi chính thức có đáp án",
    size: "320 KB",
    url: "./docs/2015.pdf",
  },
  {
    id: 8,
    title: "Đề thi cuối kỳ — Học kỳ I năm học 2015-2016",
    category: "exam",
    desc: "Đề thi chính thức chưa có đáp án",
    size: "290 KB",
    url: "./docs/2016.jpg",
  },
  {
    id: 9,
    title: "Bài Tập Tình huống Pháp Luật Đại Cương",
    category: "note",
    desc: "Tổng hợp 3 chương · Ôn thi cuối kỳ",
    size: "1.2 MB",
    url: "./docs/lythuyet.pdf",
  },
  {
    id: 10,
    title: "Ôn tập 92 câu Đúng Sai",
    category: "law",
    desc: "Sản phẩm của tập thể KSTN Toán Tin – K61",
    size: "860 KB",
    url: "./docs/92.pdf",
  },
];

const CAT_META = {
  slide: { icon: 'ph-presentation-chart', label: 'LMS' },
  exam: { icon: 'ph-exam', label: 'Đề thi' },
  note: { icon: 'ph-note-pencil', label: 'Tóm tắt lý thuyết' },
  law: { icon: 'ph-scales', label: 'Ôn tập thêm' },
};

// ── Quiz state ─────────────────────────────────────────────────
const state = {
  selectedSet: 0,
  mode: 'exam',
  questions: [],
  answers: {},
  flagged: new Set(),
  current: 0,
  timerInterval: null,
  secondsLeft: 0,
};

// ── Review-All state ────────────────────────────────────────────
const raState = {
  order: 'seq',
  questions: [],
  answers: {},   // { idx: key }
  current: 0,
};

// ── Library state ───────────────────────────────────────────────
const libState = { cat: 'all', search: '' };

// ── DOM refs ────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

const screens = {
  home:        $('screen-home'),
  quiz:        $('screen-quiz'),
  result:      $('screen-result'),
  flashcard:   $('screen-review-all'),
  library:     $('screen-library'),
};

// ── Screen switching ────────────────────────────────────────────
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);

  // sync bottom nav
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === name);
  });

  // hide bottom nav inside quiz/result/flashcard
  const hideNav = ['quiz', 'result', 'flashcard'].includes(name);
  $('bottom-nav').style.display = hideNav ? 'none' : '';
}

// Bottom nav clicks
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.screen;
    if (target === 'library') renderLibrary();
    showScreen(target);
  });
});

// ═══════════════════ HOME ═══════════════════

function renderSetList() {
  const container = $('quiz-sets-list');
  container.innerHTML = '';
  SETS.forEach((set, i) => {
    const btn = document.createElement('button');
    btn.className = 'set-item' + (i === state.selectedSet ? ' selected' : '');
    btn.dataset.index = i;
    btn.innerHTML = `
      <span class="set-num">ĐỀ ${String(i+1).padStart(2,'0')}</span>
      <div class="set-info">
        <strong>Bộ đề ${i+1}</strong>
        <span>${set.data.length} câu · ${set.meta.timeLimit} phút · ID ${set.meta.idRange[0]}–${set.meta.idRange[1]}</span>
      </div>
      <i class="ph ph-check-circle set-check"></i>`;
    btn.addEventListener('click', () => {
      state.selectedSet = i;
      document.querySelectorAll('.set-item').forEach((el, j) =>
        el.classList.toggle('selected', j === i));
    });
    container.appendChild(btn);
  });
}

function initHome() {
  renderSetList();
  renderFCSetChips();

  ['exam','practice','flashcard'].forEach(mode => {
    $(`btn-mode-${mode}`).addEventListener('click', () => {
      state.mode = mode;
      document.querySelectorAll('.mode-card').forEach(el => el.classList.remove('active'));
      $(`btn-mode-${mode}`).classList.add('active');

      const isFlashcard = mode === 'flashcard';
      $('single-set-section').style.display    = isFlashcard ? 'none' : '';
      $('flashcard-set-section').style.display  = isFlashcard ? '' : 'none';
    });
  });

  $('btn-start').addEventListener('click', () => {
    if (state.mode === 'flashcard') startFlashcard();
    else startQuiz();
  });
}

// ── Flashcard set-picker (multi-select chips on Home) ──────────
function renderFCSetChips() {
  $('fc-set-chips').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    const val = chip.dataset.set;

    if (val === 'all') {
      $('fc-set-chips').querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    } else {
      $('fc-set-chips').querySelector('[data-set="all"]').classList.remove('active');
      chip.classList.toggle('active');
      // if nothing selected, fall back to "all"
      const anyActive = [...$('fc-set-chips').querySelectorAll('.chip')].some(c => c.classList.contains('active'));
      if (!anyActive) $('fc-set-chips').querySelector('[data-set="all"]').classList.add('active');
    }
  });

  $('chip-order-seq').addEventListener('click', () => {
    raState.order = 'seq';
    $('chip-order-seq').classList.add('active');
    $('chip-order-rand').classList.remove('active');
  });
  $('chip-order-rand').addEventListener('click', () => {
    raState.order = 'rand';
    $('chip-order-rand').classList.add('active');
    $('chip-order-seq').classList.remove('active');
  });
}

function getSelectedFCSets() {
  const active = [...$('fc-set-chips').querySelectorAll('.chip.active')].map(c => c.dataset.set);
  if (!active.length || active.includes('all')) return 'all';
  return active.map(v => parseInt(v));
}

// ═══════════════════ QUIZ ═══════════════════

function startQuiz() {
  const set = SETS[state.selectedSet];
  state.questions   = [...set.data];
  state.answers     = {};
  state.flagged     = new Set();
  state.current     = 0;
  state.secondsLeft = set.meta.timeLimit * 60;

  $('quiz-set-label').textContent  = `Đề ${state.selectedSet + 1}`;
  $('quiz-mode-label').textContent = state.mode === 'exam' ? 'Thi thử' : 'Luyện tập';
  $('q-total').textContent = state.questions.length;

  const timerBlock = $('timer-block');
  if (state.mode === 'exam') {
    timerBlock.style.display = 'flex';
    startTimer();
  } else {
    timerBlock.style.display = 'none';
  }

  renderQuestionMap();
  renderQuestion();
  showScreen('quiz');
}

function startTimer() {
  updateTimerDisplay();
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.secondsLeft--;
    updateTimerDisplay();
    if (state.secondsLeft <= 0) { clearInterval(state.timerInterval); submitQuiz(true); }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(state.secondsLeft / 60);
  const s = state.secondsLeft % 60;
  $('timer-display').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  const block = $('timer-block');
  block.classList.remove('warn','urgent');
  if (state.secondsLeft <= 60)  block.classList.add('urgent');
  else if (state.secondsLeft <= 300) block.classList.add('warn');
}

function renderQuestion() {
  const q   = state.questions[state.current];
  const ans = state.answers[state.current];

  $('q-current').textContent = state.current + 1;
  $('question-text').textContent = q.question;
  $('progress-bar').style.width = ((state.current+1)/state.questions.length*100)+'%';

  $('btn-flag').classList.toggle('flagged', state.flagged.has(state.current));

  const grid = $('options-grid');
  grid.innerHTML = '';
  document.querySelector('.practice-feedback')?.remove();

  const isPracticeAnswered = state.mode === 'practice' && ans;

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.key = opt.key;
    let cls = '';
    if (isPracticeAnswered) {
      if (opt.key === q.answer) cls = 'correct';
      else if (opt.key === ans && ans !== q.answer) cls = 'wrong';
      btn.disabled = true;
    } else if (state.mode === 'exam' && opt.key === ans) cls = 'selected';
    if (cls) btn.classList.add(cls);
    btn.innerHTML = `<span class="option-key">${opt.key.toUpperCase()}</span><span>${opt.text}</span>`;
    if (!isPracticeAnswered) btn.addEventListener('click', () => selectAnswer(opt.key));
    grid.appendChild(btn);
  });

  if (isPracticeAnswered) showPracticeFeedback(ans === q.answer);
  $('btn-prev').disabled = state.current === 0;
  updateMapBtn(state.current);
}

function selectAnswer(key) {
  const q = state.questions[state.current];
  state.answers[state.current] = key;
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.classList.remove('selected','correct','wrong');
    if (state.mode === 'exam') {
      if (btn.dataset.key === key) btn.classList.add('selected');
    } else {
      if (btn.dataset.key === q.answer) btn.classList.add('correct');
      else if (btn.dataset.key === key && key !== q.answer) btn.classList.add('wrong');
      btn.disabled = true;
    }
  });
  if (state.mode === 'practice') showPracticeFeedback(key === q.answer);
  updateMapBtn(state.current);
}

function showPracticeFeedback(ok) {
  document.querySelector('.practice-feedback')?.remove();
  const div = document.createElement('div');
  div.className = `practice-feedback ${ok ? 'correct' : 'wrong'}`;
  div.innerHTML = ok
    ? `<i class="ph ph-check-circle"></i> Chính xác!`
    : `<i class="ph ph-x-circle"></i> Chưa đúng — Đáp án: <strong>${state.questions[state.current].answer.toUpperCase()}</strong>`;
  $('options-grid').after(div);
}

function goTo(index) {
  state.current = index;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$('btn-prev').addEventListener('click', () => { if (state.current > 0) goTo(state.current - 1); });
$('btn-next').addEventListener('click', () => {
  if (state.current < state.questions.length - 1) goTo(state.current + 1);
  else openSubmitModal();
});
$('btn-flag').addEventListener('click', () => {
  state.flagged.has(state.current) ? state.flagged.delete(state.current) : state.flagged.add(state.current);
  $('btn-flag').classList.toggle('flagged', state.flagged.has(state.current));
  updateMapBtn(state.current);
});
$('btn-back-home').addEventListener('click', () => { clearInterval(state.timerInterval); showScreen('home'); });

function renderQuestionMap() {
  const map = $('question-map');
  map.innerHTML = '';
  state.questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'map-btn';
    btn.textContent = i + 1;
    btn.addEventListener('click', () => goTo(i));
    map.appendChild(btn);
  });
  updateMapBtn(-1);
}

function updateMapBtn() {
  document.querySelectorAll('#question-map .map-btn').forEach((btn, i) => {
    btn.classList.remove('answered','flagged','current');
    if (i === state.current)           btn.classList.add('current');
    else if (state.flagged.has(i))     btn.classList.add('flagged');
    else if (state.answers[i] != null) btn.classList.add('answered');
  });
}

$('btn-toggle-map').addEventListener('click', () => {
  $('question-map').classList.toggle('open');
  $('btn-toggle-map').classList.toggle('open');
});

// Submit
$('btn-submit').addEventListener('click', openSubmitModal);
function openSubmitModal() {
  $('modal-unanswered').textContent = state.questions.length - Object.keys(state.answers).length;
  $('modal-submit').classList.add('open');
}
$('modal-cancel').addEventListener('click', () => $('modal-submit').classList.remove('open'));
$('modal-confirm').addEventListener('click', () => { $('modal-submit').classList.remove('open'); submitQuiz(false); });
$('modal-submit').addEventListener('click', e => { if (e.target === $('modal-submit')) $('modal-submit').classList.remove('open'); });

function submitQuiz(timeUp = false) {
  clearInterval(state.timerInterval);
  let correct=0, wrong=0, skip=0;
  state.questions.forEach((q,i) => {
    const a = state.answers[i];
    if (!a) skip++; else if (a===q.answer) correct++; else wrong++;
  });
  const total = state.questions.length;
  const score = ((correct/total)*10).toFixed(1);
  const pct   = correct/total;
  const offset = 327 - pct*327;
  const ring = $('ring-fill');
  ring.style.strokeDashoffset = offset;
  ring.classList.remove('good','mid','low');
  if (pct>=.8) ring.classList.add('good');
  else if (pct>=.5) ring.classList.add('mid');
  else ring.classList.add('low');
  $('score-num').textContent    = score;
  $('stat-correct').textContent = correct;
  $('stat-wrong').textContent   = wrong;
  $('stat-skip').textContent    = skip;
  const verdicts = [[9,'Xuất sắc — bạn nắm vững toàn bộ kiến thức!'],[8,'Giỏi — kết quả rất tốt!'],[6.5,'Khá — đủ qua môn, hãy củng cố thêm.'],[5,'Trung bình — cần ôn tập kỹ hơn.'],[0,'Cần cố gắng hơn — ôn tập lại nhé!']];
  const v = verdicts.find(([min]) => parseFloat(score)>=min);
  $('result-verdict').textContent = (timeUp ? 'Hết giờ! ' : '') + v[1];
  renderReview();
  showScreen('result');
}

function renderReview() {
  const list = $('review-list');
  list.innerHTML = '';
  state.questions.forEach((q,i) => {
    const ans = state.answers[i];
    const item = document.createElement('div');
    item.className = 'review-item ' + (!ans?'skipped': ans===q.answer?'correct-answer':'wrong-answer');
    const myText = ans ? q.options.find(o=>o.key===ans)?.text : null;
    const okText = q.options.find(o=>o.key===q.answer)?.text;
    item.innerHTML = `
      <div class="review-q-num">Câu ${i+1} (ID ${q.id})</div>
      <p class="review-q">${q.question}</p>
      <div class="review-meta">
        ${!ans ? `<span class="review-tag skip"><i class="ph ph-minus"></i> Bỏ qua</span>`
               : ans!==q.answer ? `<span class="review-tag my-ans"><i class="ph ph-x"></i> ${ans.toUpperCase()}. ${myText}</span>` : ''}
        <span class="review-tag ok-ans"><i class="ph ph-check"></i> ${q.answer.toUpperCase()}. ${okText}</span>
      </div>`;
    list.appendChild(item);
  });
}

$('btn-result-back').addEventListener('click', () => showScreen('home'));
$('btn-retry').addEventListener('click', () => startQuiz());
$('btn-home').addEventListener('click', () => showScreen('home'));

// ═══════════════════ FLASHCARD (Ôn tập) ═══════════════════

function buildRAQuestions(selectedSets) {
  let pool = selectedSets === 'all'
    ? [...ALL_QUESTIONS]
    : ALL_QUESTIONS.filter(q => selectedSets.includes(q.setIndex));
  if (raState.order === 'rand') pool = shuffle(pool);
  return pool;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i=a.length-1; i>0; i--) { const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}

function startFlashcard() {
  const selected = getSelectedFCSets();
  raState.questions = buildRAQuestions(selected);
  raState.answers   = {};
  raState.current   = 0;

  $('fc-scope-label').textContent = selected === 'all'
    ? `Tất cả 175 câu`
    : `Đề ${selected.map(i => i+1).join(', ')}`;

  renderRAMap();
  renderRAQuestion();
  showScreen('flashcard');
}

$('btn-fc-back-home').addEventListener('click', () => showScreen('home'));

function renderRAQuestion() {
  if (!raState.questions.length) return;
  const q   = raState.questions[raState.current];
  const ans = raState.answers[raState.current];
  const total = raState.questions.length;

  $('fc-set-badge').textContent = q.setLabel;
  $('fc-id').textContent        = `ID ${q.id}`;
  $('fc-question').textContent  = q.question;

  const fc = $('flashcard');
  fc.classList.remove('answered-correct','answered-wrong');
  if (ans) fc.classList.add(ans === q.answer ? 'answered-correct' : 'answered-wrong');

  // options
  const opts = $('fc-options');
  opts.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.key = opt.key;
    let cls = '';
    if (ans) {
      if (opt.key === q.answer) cls = 'correct';
      else if (opt.key === ans && ans !== q.answer) cls = 'wrong';
      btn.disabled = true;
    }
    if (cls) btn.classList.add(cls);
    btn.innerHTML = `<span class="option-key">${opt.key.toUpperCase()}</span><span>${opt.text}</span>`;
    if (!ans) btn.addEventListener('click', () => selectRAAnswer(opt.key));
    opts.appendChild(btn);
  });

  // feedback
  const fb = $('fc-feedback');
  fb.className = 'fc-feedback';
  if (ans) {
    fb.classList.add('show', ans===q.answer ? 'correct' : 'wrong');
    fb.innerHTML = ans===q.answer
      ? `<i class="ph ph-check-circle"></i> Chính xác!`
      : `<i class="ph ph-x-circle"></i> Sai — Đáp án đúng: <strong>${q.answer.toUpperCase()}</strong>`;
  }

  // counters
  const correct = Object.entries(raState.answers).filter(([i,a]) => raState.questions[i].answer===a).length;
  const wrong2  = Object.keys(raState.answers).length - correct;
  $('ra-counter').textContent  = `${raState.current+1} / ${total} câu`;
  $('ra-correct').textContent  = correct;
  $('ra-wrong').textContent    = wrong2;

  // mini ring
  const pct2 = Object.keys(raState.answers).length / total;
  $('rp-fill').style.strokeDashoffset = 126 - pct2 * 126;
  $('ra-pct').textContent = Math.round(pct2*100) + '%';

  // map
  document.querySelectorAll('#ra-question-map .map-btn').forEach((b,i) => {
    b.classList.remove('answered','current','correct','wrong-map');
    if (i === raState.current) b.classList.add('current');
    else if (raState.answers[i] != null) b.classList.add('answered');
  });

  $('ra-btn-prev').disabled = raState.current === 0;
}

function selectRAAnswer(key) {
  const q = raState.questions[raState.current];
  raState.answers[raState.current] = key;
  renderRAQuestion();
}

function renderRAMap() {
  const map = $('ra-question-map');
  map.innerHTML = '';
  raState.questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'map-btn';
    btn.textContent = i + 1;
    btn.addEventListener('click', () => { raState.current = i; renderRAQuestion(); });
    map.appendChild(btn);
  });
}

$('ra-btn-prev').addEventListener('click', () => {
  if (raState.current > 0) { raState.current--; renderRAQuestion(); }
});
$('ra-btn-next').addEventListener('click', () => {
  if (raState.current < raState.questions.length-1) { raState.current++; renderRAQuestion(); }
});

$('btn-toggle-ra-map').addEventListener('click', () => {
  $('ra-question-map').classList.toggle('open');
  $('btn-toggle-ra-map').classList.toggle('open');
});

// ═══════════════════ LIBRARY ═══════════════════

function renderLibrary() {
  const search = libState.search.toLowerCase();
  const cat    = libState.cat;
  const grid   = $('doc-grid');
  grid.innerHTML = '';

  const filtered = PDF_LIBRARY.filter(doc => {
    const matchCat = cat === 'all' || doc.category === cat;
    const matchQ   = !search || doc.title.toLowerCase().includes(search) || doc.desc.toLowerCase().includes(search);
    return matchCat && matchQ;
  });

  if (!filtered.length) {
    grid.innerHTML = `<div class="doc-empty"><i class="ph ph-file-dashed"></i><span>Không tìm thấy tài liệu phù hợp</span></div>`;
    return;
  }

  filtered.forEach(doc => {
    const meta = CAT_META[doc.category];
    const card = document.createElement('div');
    card.className = 'doc-card';
    card.innerHTML = `
      <div class="doc-icon-wrap cat-${doc.category}">
        <i class="ph ${meta.icon}"></i>
      </div>
      <div class="doc-info">
        <strong>${doc.title}</strong>
        <span>${doc.desc}</span>
      </div>
      <div class="doc-meta">
        <span class="doc-cat-tag cat-${doc.category}"><i class="ph ${meta.icon}"></i> ${meta.label}</span>
        <span class="doc-size">${doc.size}</span>
      </div>`;
    card.addEventListener('click', () => openPDF(doc));
    grid.appendChild(card);
  });
}

function openPDF(doc) {
  $('pdf-title').textContent = doc.title;
  $('pdf-frame').src         = doc.url;
  $('pdf-download').href     = doc.url;
  $('pdf-download').download = doc.title + '.pdf';
  $('pdf-open-tab').href     = doc.url;
  $('pdf-overlay').classList.add('open');
}

$('pdf-close').addEventListener('click', () => {
  $('pdf-overlay').classList.remove('open');
  setTimeout(() => { $('pdf-frame').src = ''; }, 300);
});
$('pdf-overlay').addEventListener('click', e => {
  if (e.target === $('pdf-overlay')) $('pdf-close').click();
});

// Library tabs
$('lib-tabs').addEventListener('click', e => {
  const tab = e.target.closest('.lib-tab');
  if (!tab) return;
  libState.cat = tab.dataset.cat;
  $('lib-tabs').querySelectorAll('.lib-tab').forEach(t => t.classList.toggle('active', t===tab));
  renderLibrary();
});

// Library search
$('lib-search').addEventListener('input', e => {
  libState.search = e.target.value;
  renderLibrary();
});

// ═══════════════════ INIT ═══════════════════
initHome();
renderLibrary();