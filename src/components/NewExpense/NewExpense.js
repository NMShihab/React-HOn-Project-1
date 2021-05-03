import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const expenseSaveHandler = (expense) => {
    const expenseData = {
      ...expense,
    };
    console.log(expenseData);
    props.onExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onExpenseSave={expenseSaveHandler} />
    </div>
  );
};

export default NewExpense;
