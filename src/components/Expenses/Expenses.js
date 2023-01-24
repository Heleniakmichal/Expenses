import React from "react";
import ExpoenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
function Expenses(props) {
	const pickedYearHandler = (yearPicked) => {
		const newYearPicked = {
			...yearPicked,
		};
		console.log("picketed year from Expenses.js");
		console.log(newYearPicked);
	};
	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={props.yearSelected}
					onPickedYear={pickedYearHandler}
				/>
				<ExpoenseItem
					title={props.expenses[0].title}
					amount={props.expenses[0].amount}
					date={props.expenses[0].date}
				/>
				<ExpoenseItem
					title={props.expenses[1].title}
					amount={props.expenses[1].amount}
					date={props.expenses[1].date}
				/>
				<ExpoenseItem
					title={props.expenses[2].title}
					amount={props.expenses[2].amount}
					date={props.expenses[2].date}
				/>
				<ExpoenseItem
					title={props.expenses[3].title}
					amount={props.expenses[3].amount}
					date={props.expenses[3].date}
				/>
			</Card>
		</div>
	);
}

export default Expenses;
