import React, { useState } from 'react'
import { IoAdd } from "react-icons/io5";
import Modalform from './Modalform';
const TNav = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>

            <div className='nav flex justify-between m-2 p-2 '>
                <div className="heading">
                    <h1 className='text-2xl font-black' >Transactions</h1>
                    <p className='text-sm font-light' >Manage your transactions here</p>
                </div>
                <div className="btn">
                    <button onClick={() => setShowModal(true)} className='bg-blue-400 rounded  p-2 flex items-center justify-center gap-x-2 hover:scale-105' > <IoAdd /> <span>Add Transaction</span></button>
                </div>
            </div>
            {showModal && (
                <Modalform
                    onClose={() => {
                      setShowModal(false)
                    }}
                />

            )}
        </>
    )
}

export default TNav
