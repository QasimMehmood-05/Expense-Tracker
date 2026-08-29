// import React from 'react'
// import { FaArrowTrendDown, } from "react-icons/fa6";
// import { useExpense } from '../Context/ExpenseContext';
// const Transacitem = ({ item }) => {
//     const {deleteTransaction} =useExpense();
//     return (
//         <>
//             <div className="parent flex justify-between bg-gray-300 m-4 p-3 rounded-xl">
//                 <div className='left '>
//                     <FaArrowTrendDown color='red' />
//                     <h4 className=' text-xl font-bold'>{item.title}</h4>
//                     <p className='text-sm '>{item.amount}</p>
//                 </div>
//                 <div className='right text-2xl text-red-500'> -22$</div>
//                 <button onClick={() => deleteTransaction(item.id)}>Delete</button>
//             </div>
//         </>
//     )
// }

// export default Transacitem


import React from 'react';
import { FaArrowTrendDown } from "react-icons/fa6";
import { useExpense } from '../Context/ExpenseContext';

const Transacitem = ({ item }) => {
  // 1. Corrected casing to match context (deleteTransaction)
  const { deleteTransaction } = useExpense();

  // 2. Defensive Guard: Prevent crash if item is undefined
  if (!item) return null;

  return (
    <div className="parent flex justify-between bg-gray-300 m-4 p-3 rounded-xl">
      <div className='left'>
        <FaArrowTrendDown color='red' />
        <h4 className='text-xl font-bold'>{item.title}</h4>
        <p className='text-sm'>{item.amount}</p>
      </div>
      <div className='right text-2xl text-red-500'>-${item.amount}</div>
      <button onClick={() => deleteTransaction(item.id)}>Delete</button>
    </div>
  );
};

export default Transacitem;