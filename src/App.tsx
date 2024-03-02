import './App.module.css'
import NavBar from "./components/navbar"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar></NavBar>      
      <Outlet></Outlet>
    </>
  )
}

export default App
