import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import { LoginForm, SignupForm } from './components/Auth/AuthForms';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { addTransaction, deleteTransaction, getUserTransactions } from './firebase/transactionService';
import './App.css';

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const userTransactions = await getUserTransactions(currentUser.uid);
        setTransactions(userTransactions);
      } catch (error) {
        console.error('Error loading transactions:', error);
      }
    };
    loadTransactions();
  }, [currentUser]);

  const handleAddTransaction = async (newTransaction) => {
    try {
      await addTransaction(currentUser.uid, newTransaction);
      const updatedTransactions = await getUserTransactions(currentUser.uid);
      setTransactions(updatedTransactions);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const handleDeleteTransaction = async (id) => {
    try {
      await deleteTransaction(id);
      const updatedTransactions = await getUserTransactions(currentUser.uid);
      setTransactions(updatedTransactions);
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="app-title">Personal Finance Tracker</h1>
        <button onClick={logout} className="logout-button">Logout</button>
      </div>
      <ExpenseSummary transactions={transactions} />
      <ExpenseForm onAddTransaction={handleAddTransaction} />
      <ExpenseList 
        transactions={transactions} 
        onDeleteTransaction={handleDeleteTransaction}
      />
    </div>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className="app-container">
        <h1 className="app-title">Personal Finance Tracker</h1>
        {showLogin ? (
          <>
            <LoginForm />
            <p>Don't have an account? 
              <button onClick={() => setShowLogin(false)} className="link-button">
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <SignupForm />
            <p>Already have an account? 
              <button onClick={() => setShowLogin(true)} className="link-button">
                Login
              </button>
            </p>
          </>
        )}
      </div>
    );
  }

  return <Dashboard />;
}

export default App;
