import React from 'react';
import './expenseListItem.scss';

const ExpenseListItem = ({expense: {name}, expense: {amount}}) => (
  <li className="expense">
    <p>
      {name}
      <span className="amount">{amount} €</span>
    </p>
  </li>
);

export default ExpenseListItem;
