import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [year, setYear] = useState("2019");
  const filterYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  // Function that will filter year
  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onChangeFilterYear={filterYearHandler}
        />
        <ExpensesList items={filteredExpense} />
      </Card>
    </li>
  );
}
export default Expenses;
