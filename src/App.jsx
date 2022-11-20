import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Sidebar from './components/Sidebar'
import ManageVolunteer from './pages/ManageVolunteer'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<ManageVolunteer/>}/>
    </Routes>
    </>
  )
}

export default App
