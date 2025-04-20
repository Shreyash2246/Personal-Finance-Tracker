// Component for displaying financial summary
const ExpenseSummary = ({ transactions }) => {
  // Calculate totals
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((total, t) => total + Math.abs(t.amount), 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((total, t) => total + Math.abs(t.amount), 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="expense-summary">
      <div className="summary-item income">
        <h3>Total Income</h3>
        <p className="amount income-amount">+${totalIncome.toFixed(2)}</p>
      </div>
      <div className="summary-item expense">
        <h3>Total Expenses</h3>
        <p className="amount expense-amount">-${totalExpenses.toFixed(2)}</p>
      </div>
      <div className="summary-item balance">
        <h3>Balance</h3>
        <p className={`amount ${balance >= 0 ? 'income-amount' : 'expense-amount'}`}>
          ${balance.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ExpenseSummary;