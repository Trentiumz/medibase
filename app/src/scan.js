import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function GetDIN() {
    const [content, setContent] = useState("00000000")
    const navigate = useNavigate();

    function pad(n) {
        n = n + '';
        return n.length >= 8 ? n : new Array(8 - n.length + 1).join('0') + n;
    }

    function onDinChange(event){
        event.target.value = pad(parseInt(event.target.value));
        if(event.target.value.length <= 8){
            setContent(event.target.value);
        }
    }

    function onSubmit() {
        navigate(`/info/${content}`);
    }

    return(
        <form class="input-form" onSubmit={onSubmit}>
            <label class="din-input-container">
                <span class="din-label">DIN Number:</span>
                <input class="din-input" type="number" value={content} onChange={onDinChange} name="din" />
            </label>
            <input class="input-submit" type="submit" value="Submit"/>
        </form>
    );
}

export default function Scan(){

    return(
        <GetDIN />
    );
}