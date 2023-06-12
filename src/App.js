import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";






function App() {
  const[result,setResult]=useState("");
  //const operator=[{'/','7','8','9','*','4','5','6','-','1','2','3','+','0','.',}]


  const handleclick=(number)=>{
    console.log('e.target.value',number)
     setResult(result.concat(number));
  }
  function clear(){
    setResult("");
  }
  function backspace(){
    setResult(result.slice(0,-1))
  }
  function calculate(){
     setResult(eval(result))
    //  try {
    //   const cal = eval(result); // Use eval() with caution or consider using a safer alternative
    //   setResult(cal);
    // } catch (error) {
    //   setResult('Error');
    // }
  }
  return (
    <div className="container">
      <form>
        <input type="text" id="num" value={result} placeholder="" />
      </form>
      <div className="keypad">
        <button onClick={()=>clear()} id="clear" >clear</button>
        <button onClick={()=>backspace()} id="backspace">C</button>
        
        <button  onClick={()=>handleclick('7')}>7</button>
        <button  onClick={()=>handleclick('8')}>8</button>
        <button  onClick={()=>handleclick('9')}>9</button>
        <button   onClick={()=>handleclick('*')}>&times;</button>
        <button   onClick={()=>handleclick('4')}>4</button>
        <button  onClick={()=>handleclick('5')}>5</button>
        <button   onClick={()=>handleclick('6')}>6</button>
        <button   onClick={()=>handleclick('-')}>&ndash;</button>
        <button  onClick={()=>handleclick('1')}>1</button>
        <button  onClick={()=>handleclick('2')}>2</button>
        <button  onClick={()=>handleclick('3')}>3</button>
        <button  onClick={()=>handleclick('+')}>+</button>
        <button  onClick={()=>handleclick('0')}>0</button>
        <button  onClick={()=>handleclick('.')}>.</button>
        
        <button className="highlight" onClick={()=>calculate()} id='result'>=</button>
    
        
      </div>
    </div>
  );
}

export default App;
