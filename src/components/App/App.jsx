
// import clsx from "clsx"

import { useEffect, useState } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

import './App.css';

export default function App() {

  const [clicks, setClicks] = useState(() => {
    // const savedValue = window.localStorage.getItem("saved-value");
    // if (savedValue !== null) {
    //   return JSON.parse(savedValue)
    // }
    // return { good: 0, neutral: 0, bad: 0 };
    
  });

  useEffect(() => {
    window.localStorage.setItem("saved-value", JSON.stringify(clicks))
  }, [clicks])
  
  const updateFeedback = feedbackType => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1, 
    });
  }
  
  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} />
      <Notification />
      <Feedback value={clicks} />
    </>
  )
}

 
