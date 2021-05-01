import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        expenseDate={props.expenses[0].date}
        expenseItem={props.expenses[0].title}
        expensePrice={props.expenses[0].amount}
      />
      <ExpenseItem
        expenseDate={props.expenses[1].date}
        expenseItem={props.expenses[1].title}
        expensePrice={props.expenses[1].amount}
      />
      <ExpenseItem
        expenseDate={props.expenses[2].date}
        expenseItem={props.expenses[2].title}
        expensePrice={props.expenses[2].amount}
      />
      <ExpenseItem
        expenseDate={props.expenses[3].date}
        expenseItem={props.expenses[3].title}
        expensePrice={props.expenses[3].amount}
      />
    </div>
  );
}
export default Expenses;
