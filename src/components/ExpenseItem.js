import React, {useState} from 'react';
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
const ExpenseItem=(props)=>{
   const [title,setTitle]= useState(props.title);
  const [amount, setAmount]=useState(props.amount);
const clickHandler=()=>{
setTitle('Updated!');
}
const AmountHandler=()=>{
    setAmount('$100');
}
    return(
        <Card className="expense-item">
       <ExpenseDate date={props.date}/>
       <ExpenseDetails
       title={title}
       LocationOfExpenditure={props.LocationOfExpenditure}
       amount={amount}/>
    <button onClick={clickHandler}>Change Title</button>
    <button onClick={AmountHandler}>change amount</button>
       </Card>
    )
}
export default ExpenseItem;