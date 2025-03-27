import { useState } from 'react'
import './App.css';
import Desserts from './components/Desserts/'
import CarShop from './components/Carshop'

function App() {

  const [useOrder, setOrder] = useState()

  return (
    <>
      <section className=" flex justify-around content-center">
       
        <section className='m-10'>
        <h1> Desserts</h1>
        <Desserts  />
        </section>
        <section>
          <CarShop />
        </section>
      </section>
    </>
  )
}

export default App
