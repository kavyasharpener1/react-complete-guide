import './ExpenseItem.css';
import Card from '../UI/Card';
const ExpenseItem=(props)=>{

const clickHandler=()=>{
console.log("clicked!")
}
const DeleteHandler=()=>{
    console.log("Deleted!")
}
    return(
        <Card className="expense-item">
       <ExpenseDate date={props.date}/>
       <ExpenseDetails
       title={props.title}
       LocationOfExpenditure={props.LocationOfExpenditure}
       amount={props.amount}/>
    <button onClick={clickHandler}>Change Title</button>
    <button onClick={DeleteHandler}>Delete Expense</button>
       </Card>
    )
}