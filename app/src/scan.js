import React, {useState} from 'react';
import {CurLang} from './tools.js';
import {useNavigate} from "react-router-dom";
import Navbar from './nav-bar';

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
        <div class="scan-content">
            <div class="scan-inner-content">
                <div id="scan-left-column">
                  <div class="scan-container">
                    <div class="scan-placeholder"><p class="scan-placeholder-text"><CurLang text="coming soon!" /></p></div>
                    <div class="scan-label"><CurLang text="scan QR code" /></div>
                  </div>
                </div>
                <div id="scan-middle-column">
                  <p class="small"><CurLang text="OR" /></p>
                </div>
                <div id="scan-right-column">
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
            <Navbar />
            <GetDIN />
        </div>
    );
}
