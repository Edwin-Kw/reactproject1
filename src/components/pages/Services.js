import React, { useState } from 'react';
import '../../App.css';
import './Services.css';
import CirBar from '../CirBar';

function Services(){
  const [progress, setProgress] = useState(0);

  const randomProgressValue = () =>{
    const progressValue = Math.floor(Math.random() * 101)
    setProgress(progressValue)
  }

  const onChange = e =>{
    if (e.target.value){
      let progress = parseInt(e.target.value,10);
      if (progress > 100){
        progress = 100;
      }
      setProgress(progress);
    }else{

    }
    
    

  }
  const state1 ={
    size:250,
    name:"python",
    progress:70,
    strokeWidth: 15,
    circleOneStroke: '#d9edfe',
    circleTwoStroke: '#7ea9e1'
  }
  const state2 ={
    size:250,
    name:"Java&JavaScript",
    progress:60,
    strokeWidth: 15,
    circleOneStroke: '#d9edfe',
    circleTwoStroke: '#7ea9e1'
  }
  const state3 ={
    size:250,
    name:"C&C++",
    progress:65,
    strokeWidth: 15,
    circleOneStroke: '#d9edfe',
    circleTwoStroke: '#7ea9e1'
  }
  return (
    <>
      <div className="Appp">
        <h1>Languages and frameworks Skill</h1>
        <div className='Appp-container'>
        
          <div className='Appp-wrapper'>
            <ul className="barlist">
              <CirBar {...state1}/>
              <CirBar {...state2}/>
              <CirBar {...state3}/>
            </ul>
            {/* <p>
              <input 
                type="text"
                name="percent"
                placeholder="Add Progress Value"
                onChange={onChange}
              ></input>
            </p> */}
            <button onClick={randomProgressValue}>
                Random
            </button>
          </div>
        </div>
        
      </div>
      
      

    </>
  )
}

export default Services;
/*
export default function Services() {
  return <h1 className='services'>SERVICES</h1>;
}
*/