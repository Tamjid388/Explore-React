import { useState } from 'react'

import './App.css'
import Counter from './Count'
import Team from './Team'

import Users from './UseEffect'
import Friends from './Freinds'
import Friend from './Friend'


function App() {

  return (
    <>
 
      <h3>React Core Concepts</h3>
      <Counter></Counter>
      <Team></Team>
    <Test name="Tamjid"></Test>
      <Friends></Friends>
     

 


     
     
     
    </>
  )
}




function Test({name}){
   return(
<h3>Name:{name}</h3>
   )
}


export default App
