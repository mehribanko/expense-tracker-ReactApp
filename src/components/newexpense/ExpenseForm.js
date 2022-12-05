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

            // props.onAddNewExpense()
            console.log("from Expense form", event)

        }
        return  (
        <form onSubmit={submitHandler}>
             <div className='new-expense__controls'> 

                <div className='new-expense__control'> 
                    <label>Title</label>
                    <input type='text' onChange={inputTitleHandler} />
                </div>

                <div className='new-expense__control'> 
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'  onChange={inputAmountHandler}/>
                </div>

                <div className='new-expense__control'> 
                    <label>Date</label>
                    <input type='date' max='2023-01-01' min='2019-01-01' onChange={inputDateHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                    <button type='submit' >Add Expense</button>
            </div>
        </form>
        );
    }


export default ExpenseForm;