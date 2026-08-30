
import React, { createContext, useContext, useState, useEffect } from "react"

const ExpenseContext = createContext()
export const ExpenseProvider = ({ children }) => {
    // 1. Initialize State directly from LocalStorage (Lazy initialization)
    const [income, setincome] = useState(() => {
        const savedIncome = localStorage.getItem("income")
        return savedIncome !== null ? Number(savedIncome) : 0
    })

    const [transactions, settransactions] = useState(() => {
        const savedTransactions = localStorage.getItem("transactions")
        return savedTransactions ? JSON.parse(savedTransactions) : []
    })

    // 2. Persist State Changes to LocalStorage
    useEffect(() => {
        localStorage.setItem("income", income.toString())
    }, [income])

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions))
    }, [transactions])

    // Derived Values
    const totalExpense = transactions.reduce((acc, curr) => acc + Number(curr.amount), 0)
    let currentBalance=0
    if (income===0) {
         currentBalance=0
    } else {
        
         currentBalance = income - totalExpense
    }

    // Action Methods
    const addTransaction = (transactionData) => {
        const newTx = { ...transactionData, id: Date.now() }
        settransactions((prev) => [newTx, ...prev])
    }

    // Edits transaction while preserving its existing `id`
    const editTransaction = (updatedTx) => {
        settransactions((prev) =>
            prev.map((tx) => (tx.id === updatedTx.id ? updatedTx : tx))
        )
    }

    const deleteTransaction = (id) => {
        settransactions((prev) => prev.filter((tx) => tx.id !== id))
    }

    const updateIncome = (newincome) => {
        setincome(Number(newincome))
    }

    return (
        <ExpenseContext.Provider
            value={{
                income,
                transactions,
                totalExpense,
                currentBalance,
                addTransaction,
                editTransaction,
                deleteTransaction,
                updateIncome,
            }}
        >
            {children}
        </ExpenseContext.Provider>
    )
}

export const useExpense = () => useContext(ExpenseContext)



// import React, { createContext, useContext, useState } from "react"
// const ExpenseContext = createContext();

// export const ExpenseProvider = ({ children }) => {
//     const [income, setincome] = useState(0)
//     const [transactions, settransactions] = useState([])
//     // Derived Values (computed automatically when state updates)
//     const totalExpense = transactions.reduce((acc, curr) => acc + Number(curr.amount), 0)
//     const currentBalance = income - totalExpense
//     const addTransaction = (transactions) => {
//         const newTx = { ...transactions, id: Date.now() }
//         settransactions((prev) => [newTx, ...prev]);
//     }
//     const deleteTransaction = (id) => {
//         settransactions((prev) => prev.filter((tx) => tx.id !== id))
//     }
//     const updateIncome = (newincome) => {
//         setincome(Number(newincome))
//     }
//     return (
//         <ExpenseContext.Provider
//             value={{
//                 income,
//                 transactions,
//                 totalExpense,
//                 currentBalance,
//                 addTransaction,
//                 deleteTransaction,
//                 updateIncome,
//             }}
//         >
//             {children}
//         </ExpenseContext.Provider>
//     )
// }
// // // Custom hook for easier consumption in components
// export const useExpense = () => useContext(ExpenseContext);