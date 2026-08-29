import { useState } from 'react'
import { FiRefreshCw } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
// import AddTransactionModal from './AddtrModal';
import Modalform from '../Transaction/Modalform';
const Header = () => {
  const [showmodal, setshowmodal] = useState(false)

  return (
    <>
      <div className='parent border rounded-2xl flex justify-between items-center px-3 m-2 mx-0.5'>
        <div className='lheader font-bold'>
          <h2 className='  text-xl md:text-2xl'>Dashboard</h2>
          <p className='font-medium '>Welcome Back!</p>
        </div>
        <div className='Rheader m-2 flex  justify-center items-center gap-2'>
          <button className='bg-gray-400 rounded  p-1 flex items-center justify-center gap-x-1 hover:scale-105 ' > <FiRefreshCw />
            <span>Refersh</span></button>
          <button onClick={() => { setshowmodal(true)  }} className='  bg-blue-400 rounded  hover:scale-105  my-2 py-1.5 px-1.5 mx-2' >  + Add Record</button>
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
