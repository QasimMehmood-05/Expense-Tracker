# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- src/  Project Structure
│
├── pages/
│   ├── Dashboard.jsx
│   ├── AddTransaction.jsx
│   ├── Transactions.jsx
│   └── Settings.jsx
│
├── components/
│   │
│   ├── Dashboard/
│   │   ├── BalanceCard.jsx
│   │   ├── IncomeCard.jsx
│   │   ├── ExpenseCard.jsx
│   │   ├── BalanceChart.jsx
│   │   ├── RecentTransactions.jsx
│   │   └── TransactionItem.jsx
│   │
│   ├── Transactions/
│   │   ├── SearchBar.jsx
│   │   ├── Filter.jsx
│   │   ├── TransactionList.jsx
│   │   └── TransactionItem.jsx
│   │
│   ├── AddTransaction/
│   │   └── TransactionForm.jsx
│   │
│   ├── Settings/
│   │   ├── ProfileSettings.jsx
│   │   ├── CurrencySettings.jsx
│   │   └── ThemeSettings.jsx
│   │
│   ├── Navbar.jsx
│   └── Sidebar.jsx
│
├── App.jsx
├── main.jsx
└── index.css -->

<!-- In fact, for a React website, JavaScript is the natural choice.
You can use libraries such as:
charts lib
Recharts — excellent for React
Chart.js
Apache ECharts
D3.js — more advanced
For your project, I'd use Recharts. -->

<!-- Version 1
✅ 4 pages
✅ Add transaction
✅ Delete
✅ Edit
✅ Search
✅ Filter
✅ Balance calculation
✅ Income calculation
✅ Expense calculation
✅ localStorage
Version 2
✅ Charts
✅ Dark mode
✅ Better responsive design
✅ Form validation
✅ Toast notifications
Version 3

Then, if you want to turn it into a full-stack portfolio project:

React
   ↓
Express / Node
   ↓
MongoDB
   ↓
User accounts
   ↓
Login/Register
   ↓
Each user has their own transactions

That last version would be a very solid project for your React portfolio. -->