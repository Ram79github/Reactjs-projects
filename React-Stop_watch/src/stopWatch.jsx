import React,{useState,useEffect,useRef} from 'react'
export const Stopwatch = ()=>{
    return(
    <div className='stopwatch'>
      <div className='stopwatch-time'>
        <span className='stopwatch-time-min'>00</span>
        <span className='stopwatch-time-sec'>00</span>
        <span className='stopwatch-time-msec'>00</span>
      </div>
      <div className='stopwatch-btns'>
        <button className='stopwatch-btn-start'>Start</button>
        <button className='stopwatch-btn-stop'>Stop</button>
        <button className='stopwatch-btn-reset'>Reset</button>
      </div>
    </div>)
}