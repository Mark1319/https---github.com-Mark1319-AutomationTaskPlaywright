# Playwright Automation Task

This project contains UI and API automation scripts developed using Playwright with JavaScript.

## Features

- UI automation using Playwright
- API automation using Playwright Request Context
- Page Object Model (POM)
- Test data stored in JSON
- Environment variable support using .env
- HTML test report

## Project Structure

```
AutomationTask
│
├── pages
├── tests
├── testData
├── screenshots
├── results.txt
├── playwright.config.js
├── package.json
└── .env
```

## Installation

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Environment

Create a `.env` file in the project root.

Example:

```
REQRES_API_KEY=your_api_key
```

## Run Tests

Run all tests

```bash
npx playwright test
```

Run UI tests

```bash
npx playwright test tests/uitest.spec.js
```

Run API tests

```bash
npx playwright test tests/api.spec.js
```

View HTML report

```bash
npx playwright show-report
```

## Technologies

- JavaScript
- Playwright
- Node.js
- Dotenv

## Notes

This project was created for learning Playwright automation concepts including UI testing, API testing and Page Object Model implementation.
