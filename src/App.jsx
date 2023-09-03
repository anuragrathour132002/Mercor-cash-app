import React from 'react'
import Layer from './assets/images/Vector.png'
import Navber from './components/Navber'
import Hero from './components/Hero'
import Footer from './components/Footer'
export default function App() {
  return (
    <div style={{backgroundImage:`url(${Layer})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',objectFit:'contain',backgroundPosition:'center'}} className=' bg-[#000000] object-center font-bold overflow-hidden  h-screen'>
    <Navber/>
    <Hero/>
    <Footer/>
    </div>
  )
}
