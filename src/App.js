import React, {useState, useEffect} from 'react';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpensesList from './components/ExpensesList';
import RemainingBudget from './components/RemainingBudget';

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [expenseCreated, setExpenseCreated] = useState(false);

  useEffect(() => {
    if (expenseCreated) {
      setExpenses([...expenses, expense]);
      setRemaining(remaining - expense.amount);
      setExpenseCreated(false);
    }
  }, [expense]);

  return (
    <div className="container">
      <header>
        <h1>Budget manager</h1>
      </header>

      <div className="content content--main">
        {budget === 0 ? (
          <BudgetForm setBudget={setBudget} setRemaining={setRemaining} />
        ) : (
          <div className="row">
            <div className="one-half column">
              <ExpenseForm
                setExpense={setExpense}
                setExpenseCreated={setExpenseCreated}
              />
            </div>
            <div className="one-half column">
              <ExpensesList expenses={expenses} />
              <RemainingBudget budget={budget} remaining={remaining} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
