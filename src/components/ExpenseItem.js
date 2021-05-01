import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{props.expenseItem}</h2>
        <div className="expense-item__price">${props.expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
