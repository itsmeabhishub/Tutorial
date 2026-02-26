import { useState } from "react"


const Functional = () => {

    const [count, setCount] = useState(1)

    const increment = () =>{
        setCount(prev=> prev+1)
    }
    const decrease= () =>{
        setCount(prev=>{
        if(count<=1){
            return count
        }
            return prev-1
    })
    }

  return (
    <div className="welcome">
        <div><h2>{count}</h2></div>
        
        <button className="button" onClick={increment}>Increase</button>
        <button className="button" onClick={decrease} disabled={count<=1}>Decrease</button>
    </div>
  )
}

export default Functional