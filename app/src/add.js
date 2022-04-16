import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function LoggedOut(){
    const [content, setContent] = useState("")
    const navigate = useNavigate();

    function onDinChange(event){
        if(event.target.value.length <= 8){
            setContent(event.target.value);
        }
    }

    function onSubmit(){
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
        <LoggedOut />
    );
}