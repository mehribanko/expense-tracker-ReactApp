import "./Expenses.css";
import Card from "../UI/Card";
import DateFilter from "./DateFilter";
import {useState} from 'react';
import ExpensesList from "./ExpensesList";

function Expenses(props){

  const [filteredYear, setFilteredYear] = useState('2020');

  const dateFilterHandler =(selectedDateFilter)=>{
    setFilteredYear(selectedDateFilter);    
  }
  const filteredArr = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return(
    <div>   
      <Card className="expenses">
        <DateFilter filterYear={filteredYear} onSelectDateFilter={dateFilterHandler} />
         <ExpensesList filteredArr={filteredArr} />
      </Card>
    </div>

    );
}

export default Expenses;