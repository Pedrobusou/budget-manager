import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
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

RemainingBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
};

export default RemainingBudget;
