
import React, { useState } from 'react';
import { useExpense } from '../Context/ExpenseContext';

const DEFAULT_FORM = {
  type: 'Expense',
  category: 'Food',
  amount: '',
  description: '',
  date: ''
};

export default function AddTransactionModal({ isOpen, onClose }) {
  // Fix 1: Exact casing match with Context exports (addTransaction, updateIncome)
  const { addTransaction, updateIncome } = useExpense();
  const [formData, setFormData] = useState(DEFAULT_FORM);

  // Fix 2: Render nothing if modal is NOT open
  if (isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.type === 'Income') {
      // If user selected Income, update total income
      updateIncome(formData.amount);
    } else {
      // If user selected Expense, add transaction item
      addTransaction({
        title: formData.description || formData.category,
        amount: Number(formData.amount),
        category: formData.category,
        date: formData.date,
        type: formData.type
      });
    }

    // Reset form and close modal
    setFormData(DEFAULT_FORM);
    onClose();
  };

  const handleCancel = () => {
    setFormData(DEFAULT_FORM);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={handleCancel}
    >
      <div
        className="w-full max-w-[20rem] rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Add Transaction</h2>
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            >
              <option value="Expense">Expense</option>
              <option value="Income">Income</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            >
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Utilities">Utilities</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Amount *</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              required
              className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="What was this for?"
              className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-6 flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-indigo-600 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700 active:bg-indigo-800"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 rounded-xl bg-gray-200 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300 active:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}