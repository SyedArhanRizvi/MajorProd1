import { useContext, useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter} from "react-router-dom"
import {Route, Routes} from "react-router"
import Registration from './Components/Authentication/Registration/Registration'
import Login from './Components/Authentication/LogIn/Login'
import AdminLogin from './Components/Authentication/AdminLogin/AdminLogin'
import Header from './Components/HeaderorFooter/Header/Header'
import LandingPage from './Components/Home/UserSection/LandingPage/LandingPage'
import Admin from './Components/Home/Admin/Admin'
import AddProds from './Components/Home/Admin/Adding-Products/AddProds'
import MenWear from './Components/Home/UserSection/Sections/MenWearSection/MenWear'
import UbdateProd from './Components/Home/Admin/Ubdate-Products/UbdateProd'
function App() {
  
  return (
    <>
     <BrowserRouter>
     <Header></Header>
        <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
          <Route path='/registration' element={<Registration></Registration>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/adminLogin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path='/adminPage' element={<Admin></Admin>}></Route>
          <Route path='/addProducts' element={<AddProds></AddProds>}></Route>
          <Route path='/updateProd' element={<UbdateProd></UbdateProd>}></Route>
          <Route path='/menWears' element={<MenWear></MenWear>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
