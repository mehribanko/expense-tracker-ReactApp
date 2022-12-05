import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense=(props)=>{

    const newExpenseHandler =(newExpense)=>{

        props.onSaveNewExpense(newExpense);
    }

    return(
    <div className='new-expense'>
    <ExpenseForm onAddNewExpense={newExpenseHandler}/>
    </div>
    );
}


export default NewExpense;