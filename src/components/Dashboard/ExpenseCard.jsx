import React from 'react'
import { FaArrowTrendDown, } from "react-icons/fa6";
import { useExpense } from '../Context/ExpenseContext';
const ExpenseCard = () => {
  const {totalExpense} =useExpense()
  return (
    <>
      <div className=' min-w-[33%] flex flex-col justify-center items-center   border border-amber-800 rounded-xl md: h-36 w-[25%]'>
        <FaArrowTrendDown className='text-red-600 text-4xl bg-gray-300 p-1 rounded' />
        <h4 className='text-[16px] md:text-xl font-bold text-center'>Total Expense</h4>
        <p className=' text-medium font-bold text-center text-red-600'>{totalExpense}$</p>
      </div>
    </>
  )
}

export default ExpenseCard
