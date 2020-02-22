import React, {Fragment, useState} from 'react';
import Error from './Error';

const BudgetForm = ({}) => {
  const [budget, setBudget] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = event => {
    setBudget(+event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    setError(false);

    if (budget < 1) {
      setError(true);
      return;
    }

    setError(false);

    //TODO: next actions
  };

  return (
    <Fragment>
      <h2>Set up your budget</h2>

      {error && <Error msg="Invalid budget value" />}

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
