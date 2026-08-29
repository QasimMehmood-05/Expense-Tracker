import { useState } from 'react'
import { FiRefreshCw } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
// import AddTransactionModal from './AddtrModal';
import Modalform from '../Transaction/Modalform';
const Header = () => {
  const [showmodal, setshowmodal] = useState(false)

  return (
    <>
      <div className='parent border rounded-2xl flex justify-between px-3 my-2 mx-2'>
        <div className='lheader'>
          <h2 className='text-2xl font-black'>Dashboard</h2>
          <p className='font-medium'>Welcome Back!</p>
        </div>
        <div className='Rheader mx-3 flex  justify-center items-center gap-3'>
          <button className='bg-gray-400 rounded  p-2 flex items-center justify-center gap-x-2 hover:scale-105' > <FiRefreshCw />
            <span>Refersh</span></button>
          <button onClick={() => { setshowmodal(true)  }} className='bg-blue-400 rounded  p-2 flex items-center justify-center gap-x-2 hover:scale-105' > <IoAdd /> <span>Add Transaction</span></button>
        </div>
      </div>

      {showmodal && (
        <Modalform    
          onClose={()=>{
            setshowmodal(false)
          }}
          onSave={(data) => console.log('Saved:', data)}
        />
      )}
    </>
  )
}

export default Header
