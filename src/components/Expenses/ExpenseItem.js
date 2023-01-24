import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

function ExpoenseItem(props) { 
    const [title, setTitle] = useState(props.title);
    const clickHendler = () => {
        setTitle('Updated!');
    }  
        return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHendler}>Click me</button>
    </Card>
        )
}

export default ExpoenseItem;