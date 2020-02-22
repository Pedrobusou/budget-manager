import React, {useState} from 'react';

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    //TODO: validate

    setName('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

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

export default ExpenseForm;
