import './App.css';
import React,{useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const  App=()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure:"bidar",
    },
    { id: 'e2',
     title: 'New TV',
      amount: 799.49,
       date: new Date(2021, 2, 12) ,
       LocationOfExpenditure:"aurad",
  },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure:"bhalki",
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure:"humnabad",
    },

  ];
const [exp,SetUserInput]=useState(expenses)
  const addExpenseHandler=expense=>{
    SetUserInput(previousExpenses=>{
      return [expense, ...previousExpenses];
    });
}
 
   return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items={exp}/>
     </div>
  ); 
}

export default App;
