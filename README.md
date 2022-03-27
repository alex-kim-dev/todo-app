[![Depfu](https://badges.depfu.com/badges/803012639f518a47c6a68a08614cea8a/overview.svg)](https://depfu.com/github/alex-kim-dev/todo-app?project_id=33533)
[![CD](https://github.com/alex-kim-dev/todo-app/actions/workflows/cd.yml/badge.svg)](https://github.com/alex-kim-dev/todo-app/actions/workflows/cd.yml)

# Todo app

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Why a todo app? Because you're not a frontend dev, if you haven't made one.

- [Solution](https://www.frontendmentor.io/solutions/yet-another-todo-app-AKkXMGsxw)
- [Live Site](https://alex-kim-dev.github.io/todo-app/)

## The challenge

Users should be able to:

- [x] View the optimal layout for the app depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [x] Add new todos to the list
- [x] Mark todos as complete
- [x] Delete todos from the list
- [x] Filter by all/active/complete todos
- [x] Clear all completed todos
- [x] Toggle light and dark mode
- [x] **Bonus**: Drag and drop to reorder items on the list

## Built with

- semantic html markup & aria
- mobile-first workflow
- Vite (build tool)
- Typescript & React
- Emotion - styling library (css-in-js), using its styled API
- React context & Immer for organizing global immutable state
- linting (Eslint, Prettier, Commitlint)
- testing (Jest, React Testing library)
- pre-commit hooks
- CI (Github Actions) for running tests & deploying to Github Pages

## What I learned

Typescript - typing stuff is not easy, but it greatly helps finding errors even before I hit the `ctrl + s`, and it's nice to have more accurate auto suggestions.

Emotion - the 2nd css-in-js library I've tried (after JSS). This time I used the styled API, and I liked it much more than JSS, however, there's more work to do naming all those styled components. I also faced an issue running Stylelint v14 for linting the css template strings. Sadly, the emmet support for css in js (in vscode) is mixed with html and it's hard to be as productive in writing as in a regular css file.

## Useful resources

_Docs, docs, docs_
_and a bit of google_
