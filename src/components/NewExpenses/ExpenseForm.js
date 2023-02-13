import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	function titleChangeHandler(event) {
		setEnteredTitle(event.target.value);
	}
	function amountChangeHandler(event) {
		setEnteredAmount(event.target.value);
	}
	function dateChangeHandler(event) {
		setEnteredDate(event.target.value);
	}
	function submitHandler(event) {
		event.preventDefault();
		const expenseDate = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseDate);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" value={enteredDate} onChange={dateChangeHandler} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={props.onCancelForm}>Cancel</button>
				<button type="submit">Add expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
