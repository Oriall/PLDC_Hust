
# LexQuiz — General Law Quiz Platform

A dark-mode, browser-based quiz application for reviewing the General Law (Pháp Luật Đại Cương) course. Built with plain HTML, CSS, and JavaScript (ES modules) — no build step or framework required.

## Overview

LexQuiz organizes 175 multiple-choice questions across five question sets and offers three distinct study modes, a searchable PDF document library, and a curated list of external study resources, all within a single-page interface using bottom-tab navigation.

## Tech Stack

- HTML5 (single entry point: `index.html`)
- CSS3 with custom properties (`style.css`) — dark theme, monospace + sans-serif type pairing
- Vanilla JavaScript, ES modules (`app.js`)
- Phosphor Icons (via CDN) for all iconography — no emoji used anywhere in the UI
- Question data stored as separate ES module files (`quizData01.js` – `quizData05.js`)

## File Structure

.
├── index.html          Main HTML shell, contains all screens
├── style.css            All styling and theme tokens
├── app.js                Application logic and state management
├── quizData01.js         Question set 1 (sample structure included)
├── quizData02.js         Question set 2
├── quizData03.js         Question set 3
├── quizData04.js         Question set 4
├── quizData05.js         Question set 5
└── docs/                 PDF files referenced by the Library section

## Features

### 1. Home Screen

Entry point for the quiz. Lets the user choose one of three modes and configure the question scope before starting.

- **Exam Mode** — single question set, timed countdown, results are scored only after final submission.
- **Practice Mode** — single question set, no timer, correct/incorrect feedback shown immediately after each answer.
- **Flashcard Mode** — combines all five sets or any custom subset selected via multi-select chips, with sequential or randomized question order.

### 2. Quiz Screen (Exam / Practice)

- Per-question navigation with previous/next controls
- Progress bar and live question counter
- Flag-for-review marker on individual questions
- Collapsible question map showing answered, flagged, and current questions at a glance
- Submit confirmation modal that warns about unanswered questions

### 3. Result Screen

- Animated score ring (score out of 10) color-coded by performance band
- Breakdown of correct, incorrect, and skipped counts
- Full answer review list per question, showing the user's selection against the correct answer
- Options to retry the same set or return home

### 4. Flashcard Screen (Combined Review)

- Card-based single-question view drawn from the scope selected on the Home screen
- Immediate answer feedback (correct/incorrect) per card
- Mini circular progress indicator and running correct/incorrect tally
- Collapsible question map for direct navigation between cards

### 5. Document Library

- Grid of downloadable/viewable PDF resources (lecture slides, past exams, theory summaries, legal texts)
- Category filter tabs and live text search
- In-app PDF viewer (modal with embedded iframe), plus direct download and open-in-new-tab actions
- Category metadata (icon, label) is centrally defined and reused across cards and tags

### 6. External Resources

- Curated grid of links to outside study platforms and official legal references (e.g. flashcard tools, quiz platforms, government legal portals)
- Each entry includes an icon, short description, and category tag
- All links open in a new tab; a disclaimer notes that linked content is third-party and not affiliated with this site

## Data Model

Each question set file exports a default array of question objects plus a metadata object:

```javascript
const quizDataXX = [
  {
    id: 1,
    question: "Question text",
    options: [
      { key: "a", text: "Option A" },
      { key: "b", text: "Option B" },
      { key: "c", text: "Option C" },
      { key: "d", text: "Option D" },
    ],
    answer: "a",
  },
];

export const quizMetaXX = {
  title: "Set title",
  source: "Source name",
  totalQuestions: 35,
  timeLimit: 18,        // minutes
  idRange: [1, 35],
};

export default quizDataXX;
```

To add a new question set, create a new file following this pattern, then import and register it in the `SETS` array near the top of `app.js`.

## Customization

- **PDF Library** — edit the `PDF_LIBRARY` array in `app.js` to add, remove, or update documents. Each entry requires `title`, `category`, `desc`, `size`, and `url`.
- **External Links** — edit the `EXTERNAL_LINKS` array in `app.js` to manage the resources shown on the Links screen.
- **Theme** — color tokens, fonts, and spacing are defined as CSS custom properties at the top of `style.css` and can be adjusted globally from there.

## Running Locally

Because the app uses ES modules, it must be served over HTTP rather than opened directly as a local file. Any static server works, for example:

```bash
npx serve .
```

Then open the provided local address in a browser.

