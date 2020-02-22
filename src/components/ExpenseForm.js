import React, {useState} from 'react';

const ExpenseForm = ({}) => {
  const [expense, setExpense] = useState(0);

  return (
    <form>
      <h2>Add Expense</h2>

      <div className="field">
        <label>Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Expense name"
        />
      </div>

      <div className="field">
        <label>Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Expense amount"
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add expense"
      />
    </form>
  );
};

export default ExpenseForm;
