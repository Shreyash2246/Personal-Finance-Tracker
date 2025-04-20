// Component for displaying list of transactions
const ExpenseList = ({ transactions, onDeleteTransaction }) => {
  return (
    <div className="expense-list">
      <h2>Transaction History</h2>
      {transactions.length === 0 ? (
        <p className="no-expenses">No transactions added yet.</p>
      ) : (
        <div className="expense-items">
          {transactions.map((transaction) => (
            <div key={transaction.id} className={`expense-item ${transaction.type}`}>
              <div className="expense-info">
                <h3>{transaction.description}</h3>
                <p className="expense-date">{transaction.date}</p>
              </div>
              <div className="amount-section">
                <p className={`amount ${transaction.type}-amount`}>
                  {transaction.type === 'expense' ? '-' : '+'}
                  ${Math.abs(transaction.amount).toFixed(2)}
                </p>
                <button 
                  onClick={() => onDeleteTransaction(transaction.id)}
                  className="delete-btn"
                  aria-label="Delete transaction"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;