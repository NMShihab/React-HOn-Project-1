import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [pkey, setPkey] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const expenseSaveHandler = (expense) => {
    setPkey(pkey + 1);
    const expenseData = {
      id: pkey,
      ...expense,
    };

    props.onExpenseData(expenseData);
  };
  const showFormChangeHandler = () => {
    setShowForm(true);
  };

  const hideFormChangeHandler = () => {
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={showFormChangeHandler}>Add Expense</button>
      ) : (
        <NewExpenseForm
          onExpenseSave={expenseSaveHandler}
          onCancle={hideFormChangeHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
