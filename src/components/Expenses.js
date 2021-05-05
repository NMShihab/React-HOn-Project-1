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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilterYear={filterYearHandler} />
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            expenseDate={expense.date}
            expenseItem={expense.title}
            expensePrice={expense.amount}
          />
        );
      })}
    </Card>
  );
}
export default Expenses;
