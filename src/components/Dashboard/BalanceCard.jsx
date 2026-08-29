
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useExpense } from '../Context/ExpenseContext';
const BalanceCard = () => {
  const{currentBalance,income} =useExpense();
  return (
    <>
      <div className=' flex flex-col justify-center items-center h-32 w-[25%] border border-amber-800 rounded-xl'>
        <MdOutlineAccountBalanceWallet className='text-amber-800 text-4xl bg-gray-300 p-1 rounded'/>
        <h4 className='text-2xl font-bold text-center'>Net Balance</h4>
        <p className=' text-medium font-bold text-center text-amber-800'> {currentBalance}$ </p>
      </div>
    </>
  )
}

export default BalanceCard
