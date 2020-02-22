import React from 'react';
import ExpenseListItem from './expenseListItem/ExpenseListItem';

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

export default ExpensesList;
