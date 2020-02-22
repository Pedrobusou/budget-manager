import React, {Fragment} from 'react';

const BudgetForm = ({}) => {
  return (
    <Fragment>
      <h2>Set up your budget</h2>
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Set up your budget"
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
