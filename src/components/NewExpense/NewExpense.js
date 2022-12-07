import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense (props) {
  const [formDisplay, setFormDisplay] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setFormDisplay(false);
  };

  return (
    <div className="new-expense">
      {formDisplay ? <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} setFormDisplay={setFormDisplay}/> : <button onClick={() => setFormDisplay(true)}>Add New Expense</button>}
    </div>
  )
}

export default NewExpense;
