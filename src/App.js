
import './App.css';
import React,{useState} from 'react';

const Calculator=()=> {

  const [result,setResult]=useState("");

  const click =(e)=>{
    setResult(result.concat(e.target.name));
  }

  const clear =()=>{
    setResult("");
  }

  const backspace=()=>{
    setResult(result.slice(0,result.length-1));
  }

  const calculate=()=>{
    try{
      setResult(eval(result).toString());
    }
    catch(error){
      setResult("invalid")
    }
  };  

  return (
    <div className='container'>
      <div className='results'>
        <input className='inp' type='text' value={result}></input>
      </div>
      <div className='buttons'>
        <button className='item item1 clear' onClick={clear}>AC</button>
        <button className='item item1 negative' onClick={backspace}>C</button>
        <button name='%' className='item item1 percent sign' onClick={click}>%</button>
        <button name='/' className='item item3 sign' onClick={click}>&divide;</button>
        <button name='7' className='item numbers' onClick={click}>7</button>
        <button name='8' className='item numbers' onClick={click}>8</button>
        <button name='9' className='item numbers' onClick={click}>9</button>
        <button name='*' className='item item3 sign' onClick={click}>&times;</button>
        <button name='4' className='item numbers' onClick={click}>4</button>
        <button name='5' className='item numbers' onClick={click}>5</button>
        <button name='6' className='item numbers' onClick={click}>6</button>
        <button name='-' className='item item3 sign' onClick={click}>-</button>
        <button name='1' className='item numbers' onClick={click}>1</button>
        <button name='2' className='item numbers' onClick={click}>2</button>
        <button name='3' className='item numbers' onClick={click}>3</button>
        <button name='+' className='item item3 sign' onClick={click}>+</button>
        <button name='0' className='item zero numbers' onClick={click}>0</button>
        <button name='.' className='item dot' onClick={click}>.</button>
        <button className='item item3 equals' onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
