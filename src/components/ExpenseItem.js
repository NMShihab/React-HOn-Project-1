import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [expenseItem, setExpenseItem] = useState(props.expenseItem);
  const changeClick = () => {
    setExpenseItem("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">${props.expensePrice}</div>
      </div>

      <button onClick={changeClick}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
