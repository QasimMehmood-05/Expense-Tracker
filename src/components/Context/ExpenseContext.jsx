
import React, { createContext, useContext, useState, useEffect } from "react"

const ExpenseContext = createContext()
const API_URL = "http://localhost:3000/api/transaction";

export const ExpenseProvider = ({ children }) => {
    // 1. Initialize State directly from LocalStorage (Lazy initialization)
    const [income, setincome] = useState(() => {
        const savedIncome = localStorage.getItem("income")
        return savedIncome !== null ? Number(savedIncome) : 0
    })

    const [transactions, settransactions] = useState([])

    // 2. Persist State Changes to LocalStorage
    useEffect(() => {
        const fetchtransaction = async () => {
            try {
                const response = fetch(API_URL)
                if (!response.ok) {
                    throw new Error('failed to fetch transaction')
                }
                const data = await response.json()
                settransactions(data)
            } catch (error) {
                console.log("Error fetching transaction:", error.message)
            }
        }
        fetchtransaction()
    }, [])

    // useEffect(() => {
    //     localStorage.setItem("transactions", JSON.stringify(transactions))
    // }, [transactions])

    // Derived Values
    const totalExpense = transactions.reduce((acc, curr) => acc + Number(curr.amount), 0)
    let currentBalance = 0
    if (income === 0) {
        currentBalance = 0
    } else {

        currentBalance = income - totalExpense
    }

    // Action Methods
    const addTransaction = async (transactionData) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(transactionData),
            })
            if (!response.ok) {
                throw new Error("Failed to save transaction")
            }
            const savedTx = await response.json()
            settransactions((prev => [savedTx, ...prev]))
        } catch (error) {
            console.error("Error saving transaction:", error)

        }
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