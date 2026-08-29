
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Addtrans from './pages/Addtrans'
import Settings from './pages/Settings'
import Layout from './Layouts/Layout'
import { ExpenseProvider } from './components/Context/ExpenseContext'

function App() {
  return (
    <>
      <ExpenseProvider >
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/Addtrans' element={<Addtrans />} />
            <Route path='/Settings' element={<Settings />} />
          </Route>
        </Routes>
      </ExpenseProvider>
    </>
  )
}

export default App
