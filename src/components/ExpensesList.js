import React from 'react';
import ExpenseListItem from './expenseListItem/ExpenseListItem';
import PropTypes from 'prop-types';

const ExpensesList = ({expenses}) => (
  <div className="expenses">
    <h2>Expenses</h2>

    <ul>
      {expenses.map(expense => (
        <ExpenseListItem key={expense.id} expense={expense} />
      ))}
    </ul>
  </div>
);

ExpensesList.propTypes = {
  expenses: PropTypes.array.isRequired
};

export default ExpensesList;
