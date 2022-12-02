
import React, {useState} from 'react';
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';


function ExpenseItem(props){

    const [title, setTitle]=useState(props.title);

    const clickHandler=()=>{
        setTitle("updated");
        console.log(title);
    };

    return(
        <Card className="expense-item">

            <div>
            <ExpenseDate date={props.date}/>
            </div>
            

            <div className="expense-item__description"><h2>{title}</h2></div>
            <div className="expense-item__price">${props.amount}</div>

            <button onClick={clickHandler}>Change title</button>
       
        </Card>      
    );
}


export default ExpenseItem;