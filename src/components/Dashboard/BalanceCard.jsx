
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useExpense } from '../Context/ExpenseContext';
const BalanceCard = () => {
  const{currentBalance,income} =useExpense();
  return (
    <>
      <div className=' min-w-[32%] flex flex-col justify-center items-center  border border-amber-800 rounded-xl md: h-36 w-[25%]'>
        <MdOutlineAccountBalanceWallet className='text-amber-800 text-4xl bg-gray-300 p-1 rounded'/>
        <h4 className='text-[16px] md:text-xl font-bold text-center'>Net Balance</h4>
        <p className=' text-medium font-bold text-center text-amber-800'> {currentBalance}$ </p>
      </div>
    </>
  )
}

export default BalanceCard
