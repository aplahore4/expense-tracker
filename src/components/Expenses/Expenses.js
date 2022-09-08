import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from '../Expenses/ExpensesFilter'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import ExpensesChart from '../Expenses/ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  )
}

export default Expenses
