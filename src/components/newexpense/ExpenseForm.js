import './ExpenseForm.css'; 
import { useState } from 'react';

    const ExpenseForm=(props)=>{


        const [inputTitle, setInputTitle] = useState(''); 
        const [inputAmount, setInputAmount] = useState(''); 
        const [inputDate, setInputDate] = useState(''); 

        const inputTitleHandler = (event) =>{
            setInputTitle(
               event.target.value
            )
        }


        const inputAmountHandler = (event) =>{
            setInputAmount(
               event.target.value
            )
        }

        const inputDateHandler = (event) =>{
            setInputDate(
               event.target.value
            )
        }

        const submitHandler = (event) =>{

            event.preventDefault();

            const expenseObject = {
                title: inputTitle,
                amount: +inputAmount,
                date: new Date(inputDate)
            }

            props.onAddNewExpense(expenseObject);
            setInputAmount('');
            setInputDate('');
            setInputTitle('');

        }


    
        return  (
        <form onSubmit={submitHandler} >
             <div className='new-expense__controls'> 

                <div className='new-expense__control'> 
                    <label>Title</label>
                    <input type='text' value={inputTitle} onChange={inputTitleHandler} />
                </div>

                <div className='new-expense__control'> 
                    <label>Amount</label>
                    <input type='number' value={inputAmount} min='0.01' step='0.01'  onChange={inputAmountHandler}/>
                </div>

                <div className='new-expense__control'> 
                    <label>Date</label>
                    <input type='date' value={inputDate} max='2023-01-01' min='2019-01-01' onChange={inputDateHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                    <button type='button' onClick={props.onClickFormHandler} >Cancel</button>
                    <button type='submit' >Add Expense</button>
            </div>
        </form>
        );
    }


export default ExpenseForm;