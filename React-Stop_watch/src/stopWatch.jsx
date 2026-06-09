import React,{useState,useEffect,useRef} from 'react'
export const Stopwatch = ()=>{
  // setCount(1) call karne par UI update hoga
  const [count,setCount]= useState(0);
  const [isRunning,setIsRunning]= useState(false);
  // intervalRef.current.focus() se UI re-render nahi hoga
  const  intervalRef= useRef(null);
  //useffect 
  useEffect(()=>{
    if(isRunning){
      intervalRef.current= setInterval(()=>{
        setCount((prevCount)=> prevCount+1);
      },10);
    }else{
      clearInterval(intervalRef.current);
    }
  return()=>clearInterval(intervalRef.current);

  },[isRunning]);




// handle start,stop,reset count

function handleStart(){
 setIsRunning(true);
}
function handleStop(){
 setIsRunning(false);
}
function handleReset(){
 setCount(0);
}
function formatTime(){
  let hours=Math.floor(count/3600);
  const minutes=Math.floor((count%3600)/60);
  const seconds=count%60;
  return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}





    return(
    <div className='stopwatch'>
      <div className='stopwatch-time'>
        <span className='stopwatch-time'>{formatTime()}</span>
      </div>
      <div className='stopwatch-btns'>
        <button onClick={handleStart} className='stopwatch-btn-start'>Start</button>
        <button onClick={handleStop} className='stopwatch-btn-stop'>Stop</button>
        <button onClick={handleReset} className='stopwatch-btn-reset'>Reset</button>
      </div>
    </div>)
}