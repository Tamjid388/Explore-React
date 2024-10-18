import { useState } from "react"

export default function Team(){
    const teamStyle={
        border:'2px solid purple',
        margin:'20px 0px',
        color:'red'
    }
    


 const [count,setteam]=useState(11)

const handleAdd=()=>{
    const newTeam=count+1
    setteam(newTeam)

}

    return (
        <div style={teamStyle}>
            <h3>Players: {count}</h3>
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}