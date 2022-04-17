import React, {useState} from 'react';
import {CurLang} from './tools.js';
import {useNavigate} from "react-router-dom";

import "./scan.css";


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
        <div class="content">
            <div class="inner-content">
                <div id="left-column">
                  <div class="scan-container">
                    <div class="scan-placeholder"><p class="scan-placeholder-text"><CurLang text="currently not supported" /></p></div>
                    <div class="scan-label"><CurLang text="scan QR code" /></div>
                  </div>
                </div>
                <div id="middle-column">
                  <p class="small"><CurLang text="OR" /></p>
                </div>
                <div id="right-column">
                  <span class="din-label"><CurLang text="enter DIN:" /></span>
                  <div class="din-info"><CurLang text="DIN is the Drug Identification" /><br/><CurLang text="Number on prescription labels." /></div>
                  <form class="input-form" onSubmit={onSubmit}>
                      <label class="din-input-container">
                          <input class="din-input" type="number" value={content} onChange={onDinChange} name="din" />
                      </label>
                      <input class="input-submit" type="submit" value="→"/>
                  </form>
                </div>
            </div>
        </div>
    );
}

export default function Scan(){

    return(
        <div>
            <img src="app/public/assets/qrcode.png" alt="app/public/assets/logo.png"></img>
            <GetDIN />
        </div>
    );
}
