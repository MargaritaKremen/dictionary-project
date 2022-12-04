import React from "react";

export default function Photos(props){
    if (props.photos){
    return "Hello from Pfotos";
    console.log(props.photos);
    }else{
        return null;
    }
}