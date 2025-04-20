HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Personal Finance Tracker

A full-stack React application for tracking personal finances with Firebase authentication and Firestore database integration. Users can register, login, and manage their income and expenses securely.

## Features

- User authentication (signup/login)
- Add and delete transactions
- Categorize transactions as income or expense
- Real-time transaction updates
- Secure data storage with Firestore
- Responsive and clean UI

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a Firebase project and enable Authentication and Firestore
4. Copy `.env.example` to `.env` and fill in your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Dependencies

- React
- Firebase (Authentication & Firestore)
- Vite

## Usage

1. Register a new account or login with existing credentials
2. Add transactions with description, amount, and date
3. View your transaction history and summary
4. Delete transactions as needed
5. Logout when finished

## Security

- User data is protected with Firebase Authentication
- Each user can only access their own transactions
- Secure environment variable handling for Firebase configuration
