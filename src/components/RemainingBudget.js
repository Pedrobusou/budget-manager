import React, {Fragment} from 'react';
import {getRemainingClass} from '../helpers';

const RemainingBudget = ({budget, remaining}) => {
  return (
    <Fragment>
      <div className="alert alert--primary">Budget: {budget} €</div>
      <div className={getRemainingClass(budget, remaining)}>
        Remaining: {remaining} €
      </div>
    </Fragment>
  );
};

export default RemainingBudget;
