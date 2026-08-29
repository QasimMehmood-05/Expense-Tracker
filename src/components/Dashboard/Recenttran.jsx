
import { useExpense } from '../Context/ExpenseContext';
import Tdetail from '../Transaction/Tdetail';
const Recenttran = () => {
  const { transactions } = useExpense();

  if (!transactions || transactions.length === 0) {
    return <h1 className="p-8 m-5 text-2xl font-bold text-gray-500 text-center">No Recent Transactions!</h1>;
  }

  return (
    <>
      <div className="recent-transactions">
        {/* {transactions.map((transaction) => (
        <Transacitem key={transaction.id} item={transaction} />
        
        ))} */}
        <Tdetail/>
      </div>
    </>
  );
};

export default Recenttran;