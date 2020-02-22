import React, {Fragment, useState} from 'react';
import Error from './Error';

const BudgetForm = ({setBudget, setRemaining}) => {
  const [value, setValue] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = event => {
    setValue(+event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value < 1) {
      setError(true);
      return;
    }

    setError(false);
    setBudget(value);
    setRemaining(value);
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
