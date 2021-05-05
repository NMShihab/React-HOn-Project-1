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

  // Function that will filter year
  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  let expenseContent = <h2>No expense found</h2>;

  if (filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          expenseDate={expense.date}
          expenseItem={expense.title}
          expensePrice={expense.amount}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilterYear={filterYearHandler} />
      {expenseContent}
    </Card>
  );
}
export default Expenses;
