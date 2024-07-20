import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Components/style.css'
import Hero from './Components/Hero'
import Delivery from './Components/Delivery'
import Healthy from './Components/Healthy'
import HProduct from './Components/HProduct'
import ProductSlider from './Components/ProductSlider'
import SProduct from './Components/SProduct'
import Products from './Components/Products'
import Product from './Components/Product'
import Footer from './Components/Footer'
function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Delivery/>
    <Healthy/>
    <HProduct/>
    <ProductSlider/>
    <SProduct/>
    <Products/>
    <Product/>
    <Footer/>
    </>
  )
}

export default App
