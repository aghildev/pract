import React,{useState,useEffect} from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
    const[isRunning,setIsRunning] = useState(true)
    useEffect(()=>{
        let timerId;
        if(isRunning){
         timerId = setInterval(()=>{
                    setCount((prevCount) => prevCount+1)
            },1000)
        }
     return ()=>{
        clearInterval(timerId)
     }
    },[isRunning])
  return (
    <div>
       <h1>{count}</h1>
       <button onClick={()=>setIsRunning(true)}>Start</button>
       <button onClick={()=>setIsRunning(false)}>Stop</button>
       <button onClick={()=>setCount(0)}>Reset</button>

    </div>
  )
}

export default Counter