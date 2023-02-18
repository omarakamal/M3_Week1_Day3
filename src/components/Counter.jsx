import { useState } from "react"

function Counter(props){



    //count is the state
   // setCount is a function to update the st
   //0 represents the initial value of my state
    const [count,setCount]=useState(0)


    const [userInput,setUserInput]=useState("craig")
  
    function increaseCount(){
      setCount("Valentine")
    }
    function decreaseCount(){
        if(count ===0){
            return
        }
        else{
            setCount(count -1)
        }
    
    }

    return(
        <div className="Counter">
            <h2>Counter</h2>

            <p>You clicked {count} times</p>

            <button onClick={decreaseCount}> - </button>
            <button onClick={increaseCount}> + </button>
            {/* <h3>{props.myName}</h3>
            <button onClick={(event)=>console.log(event.target)}>Click me</button> */}
            {/* <input value={userInput} type="text" onChange={(event)=>setUserInput(event.target.value)}/>
            <h3>{userInput}</h3>
            <select onChange={myEvent} name="" id="">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select> */}
            <input onChange={(event)=>setUserInput(event.target.value)} type="text" value={userInput}/>
        </div>
    )
}

export default Counter