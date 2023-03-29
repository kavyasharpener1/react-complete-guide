import './Expenses.css';
import ExpenseChart from './ExpensesChart';
import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
const Expenses=(props)=>{
    const [Userselected, setUserSelected]=useState('2020');
    const onUserSelected=(userSelectedYear)=>{
        setUserSelected(userSelectedYear);
        }
        const filterdExpenses=props.items.filter(expense=>{
            return expense.date.getFullYear().toString()===Userselected;
        })
return (
    <div>
    <Card className="expenses">
    <ExpenseFilter selected={Userselected} onSelected={onUserSelected}/>
<ExpenseChart expenses={filterdExpenses}/>
<ExpenseList items={filterdExpenses}/>
</Card>
</div>
)
}
export default Expenses;