import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense=(props)=>{

    const [isFormShown, setIsFormShown] = useState(false); 
 
    const newExpenseHandler =(newExpense)=>{

        const expenseData={
            ...newExpense,
            id: Math.random().toString()
        }

        props.onSaveNewExpense(expenseData);
        setIsFormShown(false);
    }

    const showFormHandler = () => {
        setIsFormShown(true);
    }

    const hideFormHandler = () => {
        setIsFormShown(false);
    }

    return(
    <div className='new-expense'>
        {!isFormShown && <button onClick={showFormHandler} >Add New Expense</button> }
        {isFormShown && <ExpenseForm onClickFormHandler={hideFormHandler} onAddNewExpense={newExpenseHandler}/> }
    </div>
    );
}


export default NewExpense;