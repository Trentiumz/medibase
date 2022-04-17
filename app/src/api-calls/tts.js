import React, {useState, useEffect} from "react";

export default function TTSIcon(props){
    const text = props.text;
    const lang = props.lang;
    let link = `http://api.voicerss.org/?key=${process.env.REACT_APP_TTS_KEY}&hl=${lang}&src=${text}`;
    //function onClick(){
        console.log(link);
        if(link){
            const audio = new Audio(link)
            audio.play();
        }
    //}
    // return(
    //     <button onClick={onClick}>Click</button>
    // )
}