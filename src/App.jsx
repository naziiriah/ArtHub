import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Exhibition from './Pages/Exhibition'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'
import SignIN from './Pages/SignIn'
import SignUP from './Pages/SignUp'
import Artists from './Pages/Artists'
import Artist from './Pages/Artist'
import FinalPage from './Pages/Final'
import PaymentDetail from './Pages/PaymentDetail'
import Galleries from './Pages/Galleries'
import ShopDetail from './Pages/ShopDetail'
import Shops from './Pages/Shop'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/Exhibition" element= {<Exhibition/>}/>
        <Route path="/sign-in" element={<SignIN/>}/>
        <Route path='/sign-up' element={<SignUP/>}/>
        <Route path="/Artists" element = {<Artists/>}/>
        <Route path="/Artist" element = {<Artist/>}/>
        <Route path='/final' element={<FinalPage/>}/>
        <Route path='/payment' element={<PaymentDetail/>}/>
        <Route path='/Gallery' element={<Galleries />}/>
        <Route path='/Detail' element={<ShopDetail/>}/>
        <Route path='/shop' element={<Shops/>}/>
        <Route path='/shop/item' element={<ShopDetail/>}/>
      </Routes>
    </>
  )
}

export default App
