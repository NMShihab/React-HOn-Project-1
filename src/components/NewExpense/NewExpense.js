import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [pkey, setPkey] = useState(0);
  const expenseSaveHandler = (expense) => {
    setPkey(pkey + 1);
    const expenseData = {
      id: pkey,
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
