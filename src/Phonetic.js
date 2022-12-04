import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
    if (props.phonetic.audio && props.phonetic.text){
    return (
        <div className = "Phonetic">
            <a href= {props.phonetic.audio}  rel="noopener noreferrer" target = "_blank">Listen   </a>
            <span className="text"> {props.phonetic.text}</span>            
        </div>  );     
    }else if(props.phonetic.audio){
        return( 
            <div className = "Phonetic">
                <a href= {props.phonetic.audio}  rel="noopener noreferrer" target = "_blank">Listen   </a>
                <span className="text"> Not found...</span>            
            </div>  );        
            }else if(props.phonetic.text){
                return( 
                    <div className = "Phonetic">
                    <a className = "disabled" href= {props.phonetic.audio} rel="noopener noreferrer" target = "_blank">Not found</a>
                    <span className="text"> {props.phonetic.text}</span>       
                </div>  ); 
            }                       
   
}