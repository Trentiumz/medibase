import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVolumeHigh} from '@fortawesome/free-solid-svg-icons'

export default function TTSIcon(props){
    const text = props.text;
    const lang = props.lang;
    let link = `http://api.voicerss.org/?key=${process.env.REACT_APP_TTS_KEY}&hl=${lang}&src=${text}`;
    function onClick(){
        console.log(link);
        if(link){
            const audio = new Audio(link)
            audio.play();
        }
    }
    return(
        <div className="icon-buttons" onClick = {() => onClick()}>
            <FontAwesomeIcon id="info-tts-icon" icon={faVolumeHigh} />
        </div>
    )
}