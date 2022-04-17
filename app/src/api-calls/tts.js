import React, {useState, useEffect} from "react";

export default function TTS(props){
    const text = props.text;
    const lang = props.lang;
    let link = `http://api.voicerss.org/?key=${process.env.REACT_APP_TTS_KEY}&hl=${lang}&src=${text}`;
    console.log(link);
    if(link){
        const audio = new Audio(link)
        audio.play();
    }
}