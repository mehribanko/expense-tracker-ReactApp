import ExpenseItem from "./ExpenseItem";
import  "./ExpensesList.css";

const ExpensesList = (props) => {
    if(props.filteredArr.length === 0){
      return <h2  className="expenses-lsit_fallback"> No expenses found.</h2>
    }

    return (
        <ul className="expenses-list">
            { props.filteredArr.map( (expense) => ( 
                <ExpenseItem 
                title={expense.title} 
                amount={expense.amount}  
                date={expense.date} 
                />
            )) };
        </ul>
    )
}

 export default ExpensesList;