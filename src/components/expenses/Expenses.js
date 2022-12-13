import "./Expenses.css";
import Card from "../UI/Card";
import DateFilter from "./DateFilter";
import {useState} from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){

  console.log("what are in props.expenses", props.expenses);

  const [filteredYear, setFilteredYear] = useState('2020');

  const dateFilterHandler =(selectedDateFilter)=>{
    setFilteredYear(selectedDateFilter);    
  }
  const filteredArr = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return(
    <div>   
      <Card className="expenses">
        <DateFilter filterYear={filteredYear} onSelectDateFilter={dateFilterHandler} />
        <ExpensesChart expenses={filteredArr} /> 
         <ExpensesList filteredArr={filteredArr} />
      </Card>
    </div>

    );
}

export default Expenses;