import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
    if (props.phonetic.audio){
    return (
        <div className = "Phonetic">
            <a href= {props.phonetic.audio}  rel="noopener noreferrer" target = "_blank">Listen   </a>
                {props.phonetic.text}
          </div>  );     
    }else{
    return( 
        <div className = "Phonetic">
        <span className="text"> {props.phonetic.text} </span>
        </div>);
        }                       
   
}