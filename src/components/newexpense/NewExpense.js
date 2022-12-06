import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense=(props)=>{

    const newExpenseHandler =(newExpense)=>{

        const expenseData={
            ...newExpense,
            id: Math.random().toString()
        }

        props.onSaveNewExpense(expenseData);
    }

    return(
    <div className='new-expense'>
    <ExpenseForm onAddNewExpense={newExpenseHandler}/>
    </div>
    );
}


export default NewExpense;