
import { useState } from "react";
import { useExpense } from "../Context/ExpenseContext";

const Tdetail = () => {
  const { transactions, deleteTransaction, editTransaction } = useExpense();

  // Tracks the ID of the row being edited
  const [editingId, setEditingId] = useState(null);
  // Holds temporary form changes while editing
  const [editFormData, setEditFormData] = useState({});

  if (!transactions || transactions.length === 0) {
    return (
      <h1 className="p-8 m-5 text-2xl font-bold text-gray-500 text-center">
        No Recent Transactions!
      </h1>
    );
  }

  const handleEditClick = (transaction) => {
    setEditingId(transaction.id);
    setEditFormData({ ...transaction });
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setEditFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveClick = (id) => {
    editTransaction({
      ...editFormData,
      id,
      amount: Number(editFormData.amount),
    });
    setEditingId(null);
  };

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm">
      <table className="w-full border-collapse text-left text-sm">
        {/* Table Header */}
        <thead>
          <tr className="bg-emerald-50/60 text-xs uppercase tracking-wider text-emerald-800">
            <th className="w-[18%] px-6 py-4 font-semibold">
              <div className="flex items-center gap-1.5 cursor-pointer select-none">
                <span>Date</span>
                <svg
                  className="h-3.5 w-3.5 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </div>
            </th>
            <th className="  px-3 py-3 font-semibold">Amount</th>
            <th className="  px-4 py-3 font-semibold">Description</th>
            <th className="  px-5 py-3 font-semibold">Type</th>
            <th className="  px-3 py-3 font-semibold">Category</th>
            <th className="  px-3 py-3 font-semibold text-center">Action</th>
          </tr>
        </thead>

        {/* Dynamic Table Body */}
        <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
          {transactions.map((transaction) => {
            const isEditing = (editingId === transaction.id);
            const isExpense = Number(transaction.amount) < 0;

            if (isEditing) {
              return (
                <tr key={transaction.id} className="bg-emerald-50/30">
                  <td className="px-3 py-2">
                    <input
                      type="date"
                      name="date"
                      value={editFormData.date || ""}
                      onChange={handleInputChange}
                      className="w-full rounded border border-gray-300 p-1 text-xs" />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      name="amount"
                      value={editFormData.amount || ""}
                      onChange={handleInputChange}
                      className="w-full rounded border border-gray-300 p-1 text-xs"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="text"
                      name={editFormData.title ? "title" : "name"}
                      value={editFormData.title || editFormData.name || ""}
                      onChange={handleInputChange}
                      className="w-full rounded border border-gray-300 p-1 text-xs"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="text"
                      name="type"
                      value={editFormData.type || ""}
                      onChange={handleInputChange}
                      className="w-full rounded border border-gray-300 p-1 text-xs"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="text"
                      name="category"
                      value={editFormData.category || ""}
                      onChange={handleInputChange}
                      className="w-full rounded border border-gray-300 p-1 text-xs"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => handleSaveClick(transaction.id)}
                        className="p-1.5 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors"
                        title="Save Changes"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                      <button
                        onClick={handleCancelClick}
                        className="p-1.5 text-gray-400 hover:bg-gray-200 rounded-lg transition-colors"
                        title="Cancel"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            }

            return (
              <tr key={transaction.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="whitespace-nowrap px-6 py-4 text-gray-600">
                  {transaction.date}
                </td>
                <td
                  className={`whitespace-nowrap px-6 py-4 font-semibold ${
                    isExpense ? "text-emerald-600" : "text-rose-500"
                  }`}
                >
                  {isExpense
                    ? `+ ${Math.abs(transaction.amount)}$`
                    : `-${transaction.amount}$`}
                </td>
                <td className="truncate px-6 py-4 text-gray-900">
                  {transaction.title || transaction.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-gray-600">
                  {transaction.type || "N/A"}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-gray-600">
                  {transaction.category}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    {/* EDIT ICON BUTTON */}
                    <button
                      onClick={() => handleEditClick(transaction)}
                      className="cursor-pointer p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      title="Edit Transaction"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>

                    {/* DELETE ICON BUTTON */}
                    <button
                      onClick={() => deleteTransaction(transaction.id)}
                      className="cursor-pointer p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Delete Transaction"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tdetail;
