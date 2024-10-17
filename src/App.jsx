import { useState } from 'react'
import './App.css'
import AllProducts from './Components/AllProducts/AllProducts'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
   <AllProducts />
   <Toaster />
    </>
  )
}

export default App
