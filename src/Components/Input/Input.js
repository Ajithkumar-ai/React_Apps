import React from "react";
import './Input.css'

export default function Input(props)
{
    return(
      <div id='displayNumber' className="displaybox">
        <div type="text" className="outputbox">
           <h1 className='outputvalue'>{props.inputValue}</h1>
        </div>
      </div>  
    );
}