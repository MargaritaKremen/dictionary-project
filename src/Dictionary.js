import React , { useState } from "react";
import "./Dictionary.css";


export default function Dictionary(){
    let [keyWord, setKeyword] = useState(" ");
    function search(event){
        event.preventDefault()
        alert(`searching ${keyWord}`);        
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }

    return(
        <div className="Dictionary">    
         <label for="exampleInputEmail1" class="form-label">What word do you want to find?</label>     
            <form onSubmit = {search}>
           
                <input type = "search" onChange = {handleKeywordChange} autoFocus = {true}/>
               
            </form>
        </div>
    )
}