# ChatGPT UI Clone

A clean, responsive frontend clone of the ChatGPT interface created using **HTML5, SCSS, and Vanilla JavaScript (ES6 Modules)**. 

The primary goal of this project is to replicate the ChatGPT user interface, chat interactions, and state persistence without using external frontend frameworks or backend APIs.

---

## Tech Stack

* **HTML5**: Semantic web markup.
* **SCSS**: Modular architecture (`abstract`, `base`, `components`, `layout`).
* **Vanilla JavaScript**: ES6 modules for modular UI logic.
* **LocalStorage**: State persistence for chat history and selection.

---

## Features

* **Chat Interface**: Support for multi-block messages (text, unordered/ordered lists, tables, links, code blocks).
* **State Persistence**: Conversations and active selection persist via browser `localStorage`.
* **Sidebar Controls**: Expand/collapse sidebar navigation, active chat selection, and automatic mobile drawer collapse on screens under 760px.
* **Message Actions**: Copy message text to clipboard, thumbs up/down rating UI, share, and response regeneration.
* **Response Regeneration**: Dynamic cycling through alternative mock response options.
* **Smart Auto-resizing Input**: Composer textarea automatically adjusts height while typing and resets upon sending.
* **Model Selector**: Custom interactive dropdown UI for selecting models.

---

## Project Structure

```text
├── assets/
├── css/
│   └── main.css
├── js/
│   ├── auth.js
│   ├── chat.js
│   ├── data.js
│   ├── input.js
│   ├── main.js
│   └── sidebar.js
├── scss/
│   ├── abstract/
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   ├── base/
│   │   ├── _global.scss
│   │   └── _reset.scss
│   ├── components/
│   │   ├── _chat.scss
│   │   ├── _modal.scss
│   │   └── _msgInput.scss
│   ├── layout/
│   │   └── _sidebar.scss
│   └── main.scss
├── index.html
├── readme.md
└── requirement.txt

---

## JavaScript Modules Overview
```
main.js: Main application entry point initializing component event listeners.

chat.js: Handles conversation state, message rendering, block formatting, storage synchronization, and response regeneration.

data.js: Exports application initial state, default greetings, and mock response topics.

sidebar.js: Handles chat history rendering, chat selection handlers, and responsive sidebar behavior.

input.js: Manages auto-resizing composer textareas and model selector dropdowns.

auth.js: Handles basic authentication state checks.

Future Enhancements
LLM Integration: Connect the client interface to a real OpenAI API or custom server backend.

Streaming Output: Implement Server-Sent Events (SSE) for typewriter-style streaming responses.

Conversation Search: Add client-side keyword search to filter chat history items in the sidebar.

Markdown Support: Integrate a Markdown parser (e.g., marked.js) for richer automated message formatting.

Theme Support: Add system theme detection with manual light and dark mode toggling.

## Disclaimer
This project is created strictly for learning and frontend practice purposes. It is not affiliated with OpenAI and does not connect to any live AI server APIs.