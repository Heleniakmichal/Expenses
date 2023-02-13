import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";
function NewExpenses(props) {
	const [formOn, setFormOn] = useState(false);
	const loadFormHandler = () => {
		setFormOn(true);
	};

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};
	const cancelFormHandler = () => {
		setFormOn(false);
	};
	return (
		<div className="new-expense">
			{!formOn && <button onClick={loadFormHandler}>Add New Expense</button>}
			{formOn && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancelForm={cancelFormHandler}
				/>
			)}
		</div>
	);
}

export default NewExpenses;
