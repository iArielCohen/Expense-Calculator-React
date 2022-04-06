import "./Expenses.css";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const items = props.items;

  const [filterYear, setFilterYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          selectedYear={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {!filterExpenses.length ? (
          <p>No Expense Found !</p>
        ) : (
          filterExpenses.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Expenses;
