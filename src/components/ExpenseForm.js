import React from "react";
import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm=()=>{
    const [enterdTitle, setEnterdTitle]=useState('')
   /* const [userInput, setUserInput]=useState({
    enterTitle:'',
    enterdAmount:'',
    enterdDate:'',
   }); */
    const titleChangeHandler=(event)=>{
        setEnterdTitle(event.target.value);
      /*  setUserInput((previousState)=>{
        return {...previousState, enterTitle:event.target.value};
       }) */
    }
   const [enterdAmount, setEnterdAmount]=useState('')
    const amountChangeHandler=(event)=>{
        setEnterdAmount(event.target.value);
      /*  setUserInput((previousState)=>{
        return {...previousState, enterdAmount:event.target.value};
       }) */
    }
    const [enterdDate, setEnterdDate]=useState('')
    const dateChangeHandler=(event)=>{
setEnterdDate(event.target.value);
       /*  setUserInput((previousState)=>{
            return {...previousState, enterdDate:event.target.value};
           }) */
    }
    
const SubmitHandler=(event)=>{
    event.preventDefault();
const expenseData={
   title:enterdTitle,
   amount:enterdAmount,
   date:new Date(enterdDate)
}
console.log(expenseData)
}

    return <form onSubmit={SubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input  type='text' onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="2022-12-31" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
<button type='submit'>Add Expense</button>
        </div>
    </form>
}
export default ExpenseForm;
