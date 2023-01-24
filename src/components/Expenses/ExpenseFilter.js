import React, { useState } from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
	const [yearSelected, setYearSelected] = useState("2020");
	const picAYearHandler = (event) => {
		setYearSelected(event.target.value);
	};
	const yearPiked = {
		currentYear: yearSelected,
	};
	props.onPickedYear(yearPiked);

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year: </label>
				<select value={yearSelected} onChange={picAYearHandler}>
					<option value="2019">2019</option>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
				</select>
			</div>
		</div>
	);
}

export default ExpenseFilter;
