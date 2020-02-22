import React, {Fragment, useState} from 'react';

const BudgetForm = ({}) => {
  const [budget, setBudget] = useState(0);

  const handleChange = event => {
    setBudget(+event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    //TODO: validate
    //TODO: next actions
  };

  return (
    <Fragment>
      <h2>Set up your budget</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Set up your budget"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Set"
        />
      </form>
    </Fragment>
  );
};

export default BudgetForm;
