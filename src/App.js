import React, {useState} from 'react';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Budget manager</h1>
      </header>

      <div className="content content--main">
        <BudgetForm setBudget={setBudget} setRemaining={setRemaining} />

        <div className="row">
          <div className="one-half column">
            <ExpenseForm />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
