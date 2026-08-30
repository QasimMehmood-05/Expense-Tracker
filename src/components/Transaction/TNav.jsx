import React, { useState } from 'react'
import Modalform from './Modalform';
const TNav = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>

            <div className='nav flex justify-between m-1 p-1 '>
                <div className="heading px-2">
                    <h1 className='text-2xl font-black' >Transactions</h1>
                    <p className='text-sm font-light' >Manage your transactions here</p>
                </div>
                <div className="btn ">
                    <button onClick={() => setShowModal(true)} className='bg-blue-400 rounded text-center  py-1  hover:scale-105' > + Add Transaction</button>
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
