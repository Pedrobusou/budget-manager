import React, {useState} from 'react';
import BudgetForm from './components/BudgetForm';

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Budget manager</h1>

        <div className="content content--main">
          <BudgetForm setBudget={setBudget} setRemaining={setRemaining} />
        </div>
      </header>
    </div>
  );
}

export default App;
