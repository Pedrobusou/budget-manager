import React, {Fragment} from 'react';

const RemainingBudget = ({budget, remaining}) => (
  <Fragment>
    <div className="alert alert--primary">Budget: {budget} €</div>
    <div className="alert">Remaining: {remaining} €</div>
  </Fragment>
);

export default RemainingBudget;
