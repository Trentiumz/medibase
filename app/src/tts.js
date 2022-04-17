import React, {useState} from "react";
import { toCurLang } from "./tools";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVolumeHigh} from '@fortawesome/free-solid-svg-icons'

export default function TTSIcon(props){
    const text = props.text;
    const lang = props.lang;
    const [curText, setText] = useState(text);
    const [origText, setOrigText] = useState(text);
    const [ready, setReady] = useState(false)

    if(origText !== text && ready){
        setReady(false);
    }

    if(!ready){
        toCurLang(text).then(response => {
            setReady(true);
            setOrigText(text);
            setText(response);
        })
    }
    let link = `http://api.voicerss.org/?key=${process.env.REACT_APP_TTS_KEY}&hl=${lang}&src=${curText}`;
    function onClick(){
        if(ready && link){
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