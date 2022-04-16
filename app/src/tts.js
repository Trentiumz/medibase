import React, {useState, useEffect} from "react";
import textToSpeech from "./api-calls/textToSpeech";

export default function TTSIcon(props){
    const text = props.text;
    const lang = props.lang;
    let link = null;
    textToSpeech(text, lang, (response) => {
        console.log(response);
        const file = new Blob([response.data])
        link = URL.createObjectURL(file)
    });
    function onClick(){
        if(link){
            const audio = new Audio(link)
            audio.play();
        }
    }
    return(
        <button onClick={onClick}></button>
    )
}