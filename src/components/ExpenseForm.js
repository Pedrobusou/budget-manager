import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const ExpenseForm = ({setExpense, setExpenseCreated}) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    if (amount < 1 || !name.trim()) {
      setError(true);
      return;
    }

    setError(false);
    setExpenseCreated(true);
    setExpense({id: shortid.generate(), name, amount});
    setName('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      {error && <Error msg="Invalid field values" />}

      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="Skates"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          className="u-full-width"
          placeholder="200"
          value={amount}
          onChange={e => setAmount(+e.target.value)}
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

ExpenseForm.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setExpenseCreated: PropTypes.func.isRequired
};

export default ExpenseForm;
