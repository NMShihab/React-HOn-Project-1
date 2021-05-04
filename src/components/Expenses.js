import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expenses(props) {
  const [year, setYear] = useState("2019");
  const filterYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  console.log(year);
  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilterYear={filterYearHandler} />
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
    </Card>
  );
}
export default Expenses;
