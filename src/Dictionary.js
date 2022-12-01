import React , { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(){
    let [keyWord, setKeyword] = useState(" ");
    let [results, setResults] = useState(null);
    function handleResponse(response){
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault()     
    
    //   https://api.dictionaryapi.dev/api/v2/entries/en/hello
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(url).then(handleResponse);
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
                    <Results results={results}/>       
             </div>
          </div>
        </div>
    )
}