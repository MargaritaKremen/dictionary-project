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
        <div className="container dictionary">    
          <div class="row justify-content-center">
             <div class="col text-center">
                    <form  onSubmit = {search}>
                        <label for="exampleInputEmail" className="form-label">What word do you want to find?</label>    
                        <input type = "search" className="form-control" onChange = {handleKeywordChange} autoFocus = {true}/>
                    
                    </form>          
             </div>
          </div>
        </div>
    )
}