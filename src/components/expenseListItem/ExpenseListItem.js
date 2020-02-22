import React from 'react';
import './expenseListItem.scss';
import PropTypes from 'prop-types';

const ExpenseListItem = ({expense: {name}, expense: {amount}}) => (
  <li className="expense">
    <p>
      {name}
      <span className="amount">{amount} €</span>
    </p>
  </li>
);

ExpenseListItem.propTypes = {
  expense: PropTypes.object.isRequired
};

export default ExpenseListItem;
