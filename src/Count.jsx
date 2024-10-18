import { useState } from "react"


export default function Counter(){
  
const [count,setCount]=useState(0)
const handleAdd=()=>{
    const NewCount=count+1
    setCount(NewCount)
}
const handleAdd2=()=>{
    const NewCount=count-1
    setCount(NewCount)
}


    return(
<div style={{border:'2px solid red',marginBottom:'10px'}}>
<h3>Counter:{count}</h3>
<button onClick={handleAdd}>+</button>
<button onClick={handleAdd2}>-</button>


</div>
    )
}