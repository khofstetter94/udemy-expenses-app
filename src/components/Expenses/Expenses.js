import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const yearForFilter = year => {
    setFilteredYear(year);
  }

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() === parseInt(filteredYear))

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter yearForFilter={yearForFilter} selected={filteredYear}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses;
