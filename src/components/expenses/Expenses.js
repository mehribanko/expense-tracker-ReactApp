import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import DateFilter from "./DateFilter";
import {useState} from 'react';

function Expenses(props){

  const [filteredYear, setFilteredYear] = useState('2020');


  const dateFilterHandler =(selectedDateFilter)=>{
    
    setFilteredYear(selectedDateFilter);
    
  }

    return(
    <div>   
      <Card className="expenses">
        <DateFilter filterYear={filteredYear} onSelectDateFilter={dateFilterHandler} />
          {props.expenses.filter(ele => ele.date.getFullYear().toString() === filteredYear).map(expense => 
          <ExpenseItem 
            title={expense.title} 
            amount={expense.amount}  
            date={expense.date} 
            />
          )}
    
      </Card>
    </div>

    );
}

export default Expenses;