import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Footer from './Components/Layout/Footer'
import Navbar from './Components/Layout/Navbar'
import About from './Components/Pages/About'
import Cart from './Components/Pages/Cart'
import Contact from './Components/Pages/Contact'
import FAQ from './Components/Pages/FAQ'
import Home from './Components/Pages/Home'
import Login from './Components/Pages/Login'
import Products from './Components/Pages/Products'
import Register from './Components/Pages/Register'
import First from './First'
import Counter from './Hook/Counter'
import Data from './Hook/Data'
import DataFetch from './Hook/DataFetch'
import Main from './Hook/Redux/Main'
import Second from './Second'



const Myroutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/first' element={<First/>}/>
        <Route path='/second' element={<Second/>}/>

        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>

        {/* Hooks */}
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/datafetch' element={<DataFetch/>}/>

        <Route path='/main' element={<Main/>}/>
 

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Myroutes