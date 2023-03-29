import './ExpenseItem.css';
import Card from '../UI/Card';
const ExpenseItem=(props)=>{
let title = props.title;
const clickHandler=()=>{
    title ='Updated!';
console.log("clicked!")
}
const DeleteHandler=()=>{
    console.log("Deleted!")
}
    return(
        <Card className="expense-item">
       <ExpenseDate date={props.date}/>
       <div className='expense-item__description'></div>
       <ExpenseDetails
       title={props.title}
       LocationOfExpenditure={props.LocationOfExpenditure}
       amount={props.amount}/>
    <button onClick={clickHandler}>Change Title</button>
    <button onClick={DeleteHandler}>Delete Expense</button>
       </Card>
    )
}