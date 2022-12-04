import React , { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props){
    let [keyWord, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }
    function handlePexelsResponse(response){
        console.log(response.data);
        setPhotos(response.data.photos);
    }

function search(){       
    //   https://api.dictionaryapi.dev/api/v2/entries/en/hello
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(url).then(handleResponse); 

    let pexelsApiKey =  "563492ad6f91700001000001554748fe4d244429a42ad03d588dfe29" ;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl,{headers: headers}).then(handlePexelsResponse); 
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
                         defaultValue={props.defaultKeyword} autoFocus = {true}/>
                    
                    </form> 
                </section>                
                    <Results results={results}/>  
                    <Photos photos = {photos} />     
             </div>
          </div>
        </div>
    )}else{
        load();
        return "Loading...";
    }
}