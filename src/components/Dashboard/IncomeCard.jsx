import { BsCurrencyDollar } from "react-icons/bs";
import { useExpense } from "../Context/ExpenseContext";
const IncomeCard = () => {
  const { income } = useExpense();
  return (
    <div className=' flex flex-col justify-center items-center h-32 w-[25%] border border-amber-800 rounded-xl'>
      <BsCurrencyDollar className='text-green-600 text-4xl bg-gray-300 p-1 rounded' />

      <h4 className='text-2xl font-bold text-center'>Monthly Income</h4>
      <p className=' text-medium font-bold text-center text-green-600'>{income}$</p>
    </div>
  )
}

export default IncomeCard
