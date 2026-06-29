// app.js — LexQuiz engine
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

// ── State ──────────────────────────────────────────────────────
const state = {
  selectedSet: 0,
  mode: 'exam',         // 'exam' | 'practice'
  questions: [],
  answers: {},          // { questionIndex: 'a'|'b'|'c'|'d' }
  flagged: new Set(),
  current: 0,
  timerInterval: null,
  secondsLeft: 0,
};

// ── DOM refs ───────────────────────────────────────────────────
const $ = id => document.getElementById(id);

const screens = {
  home:   $('screen-home'),
  quiz:   $('screen-quiz'),
  result: $('screen-result'),
};

// ── Screen switching ───────────────────────────────────────────
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
}

// ── Home screen setup ──────────────────────────────────────────
function renderSetList() {
  const container = $('quiz-sets-list');
  container.innerHTML = '';

  SETS.forEach((set, i) => {
    const btn = document.createElement('button');
    btn.className = 'set-item' + (i === state.selectedSet ? ' selected' : '');
    btn.dataset.index = i;
    btn.innerHTML = `
      <span class="set-num">ĐỀ ${String(i + 1).padStart(2, '0')}</span>
      <div class="set-info">
        <strong>${set.meta.title.replace('Trắc nghiệm cuối kỳ Pháp luật đại cương ', 'Bộ đề ')}</strong>
        <span>${set.data.length} câu · ${set.meta.timeLimit} phút · ID ${set.meta.idRange[0]}–${set.meta.idRange[1]}</span>
      </div>
      <i class="ph ph-check-circle set-check"></i>
    `;
    btn.addEventListener('click', () => {
      state.selectedSet = i;
      document.querySelectorAll('.set-item').forEach((el, j) => {
        el.classList.toggle('selected', j === i);
      });
    });
    container.appendChild(btn);
  });
}

function initHome() {
  renderSetList();

  // Mode toggle
  ['exam', 'practice'].forEach(mode => {
    $(`btn-mode-${mode}`).addEventListener('click', () => {
      state.mode = mode;
      document.querySelectorAll('.mode-card').forEach(el => el.classList.remove('active'));
      $(`btn-mode-${mode}`).classList.add('active');
    });
  });

  $('btn-start').addEventListener('click', startQuiz);
}

// ── Quiz start ─────────────────────────────────────────────────
function startQuiz() {
  const set = SETS[state.selectedSet];
  state.questions = [...set.data];
  state.answers   = {};
  state.flagged   = new Set();
  state.current   = 0;
  state.secondsLeft = set.meta.timeLimit * 60;

  $('quiz-set-label').textContent = `Đề ${state.selectedSet + 1}`;
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

// ── Timer ──────────────────────────────────────────────────────
function startTimer() {
  updateTimerDisplay();
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.secondsLeft--;
    updateTimerDisplay();
    if (state.secondsLeft <= 0) {
      clearInterval(state.timerInterval);
      submitQuiz(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(state.secondsLeft / 60);
  const s = state.secondsLeft % 60;
  $('timer-display').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  const block = $('timer-block');
  block.classList.remove('warn', 'urgent');
  if (state.secondsLeft <= 60)  block.classList.add('urgent');
  else if (state.secondsLeft <= 300) block.classList.add('warn');
}

// ── Render question ────────────────────────────────────────────
function renderQuestion() {
  const q   = state.questions[state.current];
  const ans = state.answers[state.current];

  $('q-current').textContent = state.current + 1;
  $('question-text').textContent = q.question;

  // Progress bar
  const pct = ((state.current + 1) / state.questions.length) * 100;
  $('progress-bar').style.width = pct + '%';

  // Flag button
  const flagBtn = $('btn-flag');
  flagBtn.classList.toggle('flagged', state.flagged.has(state.current));

  // Options
  const grid = $('options-grid');
  grid.innerHTML = '';

  // Remove old feedback
  const existingFeedback = document.querySelector('.practice-feedback');
  if (existingFeedback) existingFeedback.remove();

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
    } else if (state.mode === 'exam') {
      if (opt.key === ans) cls = 'selected';
    }
    if (cls) btn.classList.add(cls);

    btn.innerHTML = `<span class="option-key">${opt.key.toUpperCase()}</span><span>${opt.text}</span>`;

    if (!isPracticeAnswered) {
      btn.addEventListener('click', () => selectAnswer(opt.key));
    }
    grid.appendChild(btn);
  });

  // Practice: show feedback if already answered
  if (isPracticeAnswered) {
    showPracticeFeedback(ans === q.answer);
  }

  // Prev/Next
  $('btn-prev').disabled = state.current === 0;

  // Update map highlight
  document.querySelectorAll('.map-btn').forEach((btn, i) => {
    btn.classList.toggle('current', i === state.current);
  });
}

// ── Answer selection ───────────────────────────────────────────
function selectAnswer(key) {
  const q = state.questions[state.current];
  state.answers[state.current] = key;

  // Update option visuals
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.classList.remove('selected', 'correct', 'wrong');
    if (state.mode === 'exam') {
      if (btn.dataset.key === key) btn.classList.add('selected');
    } else {
      // Practice mode: reveal immediately
      if (btn.dataset.key === q.answer) btn.classList.add('correct');
      else if (btn.dataset.key === key && key !== q.answer) btn.classList.add('wrong');
      btn.disabled = true;
    }
  });

  // Practice feedback
  if (state.mode === 'practice') {
    showPracticeFeedback(key === q.answer);
  }

  // Update map
  updateMapBtn(state.current);
}

function showPracticeFeedback(isCorrect) {
  const grid = $('options-grid');
  const existing = document.querySelector('.practice-feedback');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.className = `practice-feedback ${isCorrect ? 'correct' : 'wrong'}`;
  div.innerHTML = isCorrect
    ? `<i class="ph ph-check-circle"></i> Chính xác!`
    : `<i class="ph ph-x-circle"></i> Chưa đúng. Đáp án đúng: <strong>${state.questions[state.current].answer.toUpperCase()}</strong>`;
  grid.after(div);
}

// ── Navigation ─────────────────────────────────────────────────
function goTo(index) {
  state.current = index;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$('btn-prev').addEventListener('click', () => {
  if (state.current > 0) goTo(state.current - 1);
});
$('btn-next').addEventListener('click', () => {
  if (state.current < state.questions.length - 1) goTo(state.current + 1);
  else openSubmitModal();
});
$('btn-flag').addEventListener('click', () => {
  if (state.flagged.has(state.current)) state.flagged.delete(state.current);
  else state.flagged.add(state.current);
  $('btn-flag').classList.toggle('flagged', state.flagged.has(state.current));
  updateMapBtn(state.current);
});

$('btn-back-home').addEventListener('click', () => {
  clearInterval(state.timerInterval);
  showScreen('home');
});

// ── Question map ───────────────────────────────────────────────
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
  updateMapBtn(-1); // refresh all
}

function updateMapBtn(index) {
  const btns = document.querySelectorAll('.map-btn');
  btns.forEach((btn, i) => {
    btn.classList.remove('answered', 'flagged', 'current');
    if (i === state.current) btn.classList.add('current');
    else if (state.flagged.has(i)) btn.classList.add('flagged');
    else if (state.answers[i] !== undefined) btn.classList.add('answered');
  });
}

$('btn-toggle-map').addEventListener('click', () => {
  const map = $('question-map');
  const toggle = $('btn-toggle-map');
  map.classList.toggle('open');
  toggle.classList.toggle('open');
});

// ── Submit ─────────────────────────────────────────────────────
$('btn-submit').addEventListener('click', openSubmitModal);

function openSubmitModal() {
  const unanswered = state.questions.length - Object.keys(state.answers).length;
  $('modal-unanswered').textContent = unanswered;
  $('modal-submit').classList.add('open');
}

$('modal-cancel').addEventListener('click', () => {
  $('modal-submit').classList.remove('open');
});
$('modal-confirm').addEventListener('click', () => {
  $('modal-submit').classList.remove('open');
  submitQuiz(false);
});
$('modal-submit').addEventListener('click', e => {
  if (e.target === $('modal-submit')) $('modal-submit').classList.remove('open');
});

function submitQuiz(timeUp = false) {
  clearInterval(state.timerInterval);

  let correct = 0, wrong = 0, skip = 0;

  state.questions.forEach((q, i) => {
    const ans = state.answers[i];
    if (!ans) skip++;
    else if (ans === q.answer) correct++;
    else wrong++;
  });

  const total = state.questions.length;
  const score = ((correct / total) * 10).toFixed(1);

  // Score ring
  const pct = correct / total;
  const circumference = 327;
  const offset = circumference - (pct * circumference);
  const ring = $('ring-fill');
  ring.style.strokeDashoffset = offset;
  ring.classList.remove('good', 'mid', 'low');
  if (pct >= 0.8) ring.classList.add('good');
  else if (pct >= 0.5) ring.classList.add('mid');
  else ring.classList.add('low');

  $('score-num').textContent = score;
  $('score-denom').textContent = '/10';
  $('stat-correct').textContent = correct;
  $('stat-wrong').textContent   = wrong;
  $('stat-skip').textContent    = skip;

  const verdicts = [
    [9,  'Xuất sắc — bạn nắm vững toàn bộ kiến thức!'],
    [8,  'Giỏi — kết quả rất tốt, chỉ cần ôn thêm vài điểm nhỏ.'],
    [6.5,'Khá — đủ điều kiện qua môn, hãy củng cố thêm.'],
    [5,  'Trung bình — cần ôn tập kỹ hơn trước kỳ thi.'],
    [0,  'Cần cố gắng hơn — đừng bỏ cuộc, ôn tập lại nhé!'],
  ];
  const verdict = verdicts.find(([min]) => parseFloat(score) >= min);
  $('result-verdict').textContent = timeUp ? 'Hết giờ! ' + verdict[1] : verdict[1];

  renderReview();
  showScreen('result');
}

function renderReview() {
  const list = $('review-list');
  list.innerHTML = '';

  state.questions.forEach((q, i) => {
    const ans = state.answers[i];
    const item = document.createElement('div');
    item.className = 'review-item ' +
      (!ans ? 'skipped' : ans === q.answer ? 'correct-answer' : 'wrong-answer');

    const myOptText = ans ? q.options.find(o => o.key === ans)?.text : null;
    const okOptText = q.options.find(o => o.key === q.answer)?.text;

    item.innerHTML = `
      <div class="review-q-num">Câu ${i + 1} (ID ${q.id})</div>
      <p class="review-q">${q.question}</p>
      <div class="review-meta">
        ${!ans
          ? `<span class="review-tag skip"><i class="ph ph-minus"></i> Bỏ qua</span>`
          : ans !== q.answer
            ? `<span class="review-tag my-ans"><i class="ph ph-x"></i> ${ans.toUpperCase()}. ${myOptText}</span>`
            : ''
        }
        <span class="review-tag ok-ans"><i class="ph ph-check"></i> ${q.answer.toUpperCase()}. ${okOptText}</span>
      </div>
    `;
    list.appendChild(item);
  });
}

// ── Retry / Home ───────────────────────────────────────────────
$('btn-retry').addEventListener('click', () => {
  startQuiz();
});
$('btn-home').addEventListener('click', () => {
  showScreen('home');
});

// ── Init ───────────────────────────────────────────────────────
initHome();