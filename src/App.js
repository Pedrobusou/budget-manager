import React from 'react';
import BudgetForm from './components/budgetForm';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Budget manager</h1>

        <div className="content content--main">
          <BudgetForm />
        </div>
      </header>
    </div>
  );
}

export default App;
