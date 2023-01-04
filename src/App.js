import React, { useEffect, useState } from 'react';

function App() {

const [num ,setNum] = useState(0);
const [nums ,setNums] = useState(0);

const increment = () =>{
     setNum(num + 1)
}
const stop = () =>{
  setNums(nums + 1)
}
useEffect(()=>{
  alert("you clicked me");
},[nums])
  return (
   <>
   <div className="main">
   <h1>UseEffectHooks!!!</h1>

   <button onClick={increment}>Click me {num}</button>
   <button onClick={stop}>Click me {nums}</button>
   </div>


   </>
  );
}

export default App;
