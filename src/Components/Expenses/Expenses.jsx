import React, { useState } from 'react'
import Card from '../UI/Cards'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

import ExpensesList from './ExpensesList'

import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    //  console.log("This is expense.js file")
    //  console.log(selectedYear)
    setFilteredYear(selectedYear)
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  });



  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />

        <ExpensesChart  expenses = {filteredExpenses}/>
        
          <ExpensesList  items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses