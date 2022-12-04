import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import DateFilter from "./DateFilter";
import {useState} from 'react';

function Expenses(props){

  const [filteredYear, setFilteredYear] = useState('2020');

  const dateFilterHandler =(selectedDateFilter)=>{
    const dateFilter= selectedDateFilter;
    console.log("date filter date", dateFilter);
    setFilteredYear(dateFilter);
  }

    return(
    <div>
      
    <Card className="expenses">
    <DateFilter filterYear={filteredYear} onSelectDateFilter={dateFilterHandler} />
        <ExpenseItem  title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
        <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
        <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
        <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} />
      </Card>
    </div>

    );
}

export default Expenses;