import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
    console.log(props);
    if (props.phonetic.audio){
    return (
        <div className = "Phonetic">
            <a href= {props.phonetic.audio} target = "_blank">Listen   </a>
                {props.phonetic.text}
          </div>  );     
    }else{
    return( 
        <div className = "Phonetic">
        <span className="text"> {props.phonetic.text} </span>
        </div>);
        }                       
   
}