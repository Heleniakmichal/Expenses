import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2023");
	const pickedYearHandler = (yearPicked) => {
		setFilteredYear(yearPicked);
	};
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});
	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={filteredYear}
					onPickedYear={pickedYearHandler}
				/>
				{filteredExpenses.length === 0 && (
					<p>There is no expenses found in the list</p>
				)}
				<ExpenseChart expenses={filteredExpenses} />
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
}

export default Expenses;
