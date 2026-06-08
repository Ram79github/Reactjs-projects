import {Sun ,Moon, Lightbulb} from 'lucide-react';
import React,{useState,useEffect} from 'react';
import './index.css';
export const ThemeToggle = ()=>{
 const [isDarkMode , setIsDarkMode] = useState(false);
 //set useEffect to check for saved theme in localStorage.
 // If a saved theme is found, apply it to the document body and update the isDarkMode state accordingly.
 // This ensures that the user's theme preference is preserved across sessions and applied when they revisit the application.
 // The empty dependency array [] ensures that this effect runs only once when the component mounts, preventing unnecessary re-renders and ensuring that the theme is set correctly based on the saved preference in localStorage.
 // By implementing this useEffect, we enhance the user experience by remembering their theme choice and applying it consistently, creating a more personalized and user-friendly interface.
 // This implementation allows users to have a seamless experience with their preferred theme, making the application more enjoyable and visually appealing.
 useEffect(()=>{
  const savedTheme =localStorage.getItem('theme')
  if(savedTheme === 'dark'){
    setIsDarkMode(true);
    document.body.classList.add('dark-mode');//adding dark css class to body
  }else{
    setIsDarkMode(false);
    document.body.classList.remove('dark-mode');//removing dark css class from body
  }
 },[])

 function toggleTheme(){
  if(isDarkMode){
    setIsDarkMode(false);
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme' , 'light');
  }
  else {
    setIsDarkMode(true);
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme' , 'dark');
  }
 }


 return(
  <div className='app'>
   <button className='toggle-btn' onClick={toggleTheme}>
    {isDarkMode ? <Moon size={20} /> : <Sun size={20} color="#f2d410"/>}
   </button>
   </div>)

    
    
}