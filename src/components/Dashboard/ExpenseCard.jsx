import React from 'react'
import { FaArrowTrendDown, } from "react-icons/fa6";
import { useExpense } from '../Context/ExpenseContext';
const ExpenseCard = () => {
  const {totalExpense} =useExpense()
  return (
    <>
      <div className=' flex flex-col justify-center items-center income h-32 w-[25%] border border-amber-800 rounded-xl'>
        <FaArrowTrendDown className='text-red-600 text-4xl bg-gray-300 p-1 rounded' />
        <h4 className='text-2xl font-bold text-center'>Monthly Expenses</h4>
        <p className=' text-medium font-bold text-center text-red-600'>{totalExpense}$</p>
      </div>
    </>
  )
}

export default ExpenseCard
