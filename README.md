# Playwright Automation Suite – Singlish to Sinhala Translator

## Student Details
**Name:** FRANCISCO C T                 
**Registration Number:** IT23565180            
**Module:** IT3040 – IT Project Management             
**Assignment:** Assignment 01           

---

## Project Overview
This repository contains an automated testing solution built using **Playwright** to verify the **Singlish to Sinhala transliteration** feature of the SwiftTranslator web application.

🌐 **Application under test:**  
https://www.swifttranslator.com/singlish-to-sinhala

The test suite evaluates the system using **positive**, **negative**, and **user interface** scenarios to ensure correct translation behavior, stability, and proper UI response.

---

## Technologies Used
- Node.js
- Playwright Test Framework
- JavaScript
- Chromium Browser

---

## Prerequisites
Make sure the following tools are installed on your machine before execution:

- **Node.js** (v16 or later)
- **npm** (comes with Node.js)
- A modern web browser (Chromium is used by default)

---

## Installation Guide

### Step 1: Download the Project
Clone the repository or extract the provided project folder.

### Step 2: Navigate to Project Directory
```bash
cd ITPM-Assignment
Step 3: Install Dependencies
npm install
```

Step 4: Install Playwright Browsers
```bash
npx playwright install
```

## Executing Test Cases
▶ Run All Test Cases
```bash
npx playwright test
```

▶ Run Tests and Open HTML Report
```bash
npx playwright test
npx playwright show-report
```

▶ Run a Specific Test File
```bash
npx playwright test tests/translator.spec.js
```

▶ Run Tests in Headed Mode (Visible Browser)
```bash
npx playwright test tests/translator.spec.js --headed
```

## Project Directory Structure
```bash
ITPM-ASSIGNMENT
│
├── .github/                 # GitHub actions / workflows (optional)
├── node_modules/            # Installed npm packages
├── playwright-report/       # Generated HTML reports
├── test-results/            # Raw Playwright execution output
├── tests/
│   └── singlish_sinhala.spec.js   # Main Playwright test script
├── .gitignore               # Git ignore configuration
├── package.json             # Project dependencies and scripts
├── package-lock.json        # Dependency lock file
└── playwright.config.js     # Playwright configuration file
```

## Test Coverage Summary
Test Type	Count
✅ Positive Functional Tests	21              
❌ Negative Functional Tests	8             
🎨 UI Validation Tests	5             
🔢 Total Test Cases	34                

Additional Notes

: All tests are executed using the Chromium browser.      

: An HTML execution report is generated automatically after each run.          

: Screenshots are captured when a test fails for debugging purposes.           

: The automation framework is structured to support easy expansion and maintenance.       
