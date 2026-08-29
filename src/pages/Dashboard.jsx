
import Header from "../components/Dashboard/Header";
import IncomeCard from "../components/Dashboard/IncomeCard";
import ExpenseCard from "../components/Dashboard/ExpenseCard";
import BalanceCard from "../components/Dashboard/BalanceCard";
import Recenttran from "../components/Dashboard/Recenttran";

const Dashboard = () => {

  return (
    <div className={` flex w-full min-h-screen border bg-gray-100 text-gray-800 `}>
      {/* Main Content */}
      <main className="flex-1 min-w-0 transition-all duration-300">

        <Header />

        {/* Cards */}
        <div className="cards  flex justify-between items-center gap-2 p-1.5 md:gap-5 px-5 my-6">
          <IncomeCard />
          <ExpenseCard />
          <BalanceCard />
        </div>

        {/* Recent Transactions */}
        <div className="rtras">
          <Recenttran />
        </div>

      </main>
    </div>
  );
};

export default Dashboard;