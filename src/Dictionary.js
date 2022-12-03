import React , { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props){
    let [keyWord, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

function search(){       
    //   https://api.dictionaryapi.dev/api/v2/entries/en/hello
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(url).then(handleResponse); 
}

function handleSubmit(event){
    event.preventDefault()              
    search();
   }

function load(){
    setLoaded(true);
    search();
}

function handleKeywordChange(event){
        setKeyword(event.target.value)
}

    if (loaded){
    return(
        <div className="container dictionary">    
          <div class="row justify-content-center">
             <div class="col text-center">
                <section>
                    <form  onSubmit = {handleSubmit}>
                        <label for="exampleInputEmail" className="form-label-form-text-color:#6f7dfb ms-2" >What word do you want to find?</label>    
                        <input type = "search" className="form-control border" onChange = {handleKeywordChange}
                         defaulValue={props.defaultKeyword} autoFocus = {true}/>
                    
                    </form> 
                </section>
                    <Results results={results}/>       
             </div>
          </div>
        </div>
    )}else{
        load();
        return "Loading...";
    }
}