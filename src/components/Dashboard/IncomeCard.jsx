import { BsCurrencyDollar } from "react-icons/bs";
import { useExpense } from "../Context/ExpenseContext";
const IncomeCard = () => {
  const { income } = useExpense();
  return (
    <div className=' min-w-[32%] flex flex-col justify-center items-center  border border-amber-800 rounded-xl md: h-36 w-[25%]'>
      <BsCurrencyDollar className='text-green-600 text-4xl bg-gray-300 p-1 rounded' />

      <h4 className='text-[16px] md:text-xl font-bold text-center '>Total Income</h4>
      <p className=' text-medium font-bold text-center text-green-600'>{income}$</p>
    </div>
  )
}

export default IncomeCard
