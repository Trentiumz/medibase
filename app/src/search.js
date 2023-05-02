import React, { useState } from 'react';
import { CurLang } from './tools.js';
import { useNavigate } from "react-router-dom";
import Navbar from './nav-bar';
import { Html5QrcodeScanner } from "html5-qrcode"

import "./search.css";

function GetDIN() {
    const [content, setContent] = useState("00000000")
    const navigate = useNavigate();

    function pad(n) {
        n = n + '';
        return n.length >= 8 ? n : new Array(8 - n.length + 1).join('0') + n;
    }

    function onDinChange(event) {
        event.target.value = pad(parseInt(event.target.value));
        if (event.target.value.length <= 8) {
            setContent(event.target.value);
        }
    }

    function onSubmit() {
        const input_data = content.split(';')
        if (input_data.length === 7 && !input_data[3].isNaN && input_data[3].length === 8) {
            navigate(`/info/${content}`);
        } else {
            alert("Invalid data or QR code");
        }
    }

    function setUpQR() {
        var html5QrCodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
        html5QrCodeScanner.render(onScanSuccess, onScanError);
        function onScanSuccess(qrCodeMessage) {
            document.getElementById("result").innerHTML = '<span class="result">' + qrCodeMessage + "</span>";
            setContent(qrCodeMessage);
            html5QrCodeScanner.clear();
        }

        function onScanError(errorMessage) {
            document.getElementById("result").innerHTML = '<span class="result">' + 'error' + "</span>";
        }
    }

    return (
        <div class="scan-content" onLoad={setUpQR}>
            <div class="scan-inner-content">
                <div id="scan-left-column"></div>
                <div id="scan-middle-column">
                    <div class="scan-placeholder">
                        <div id="reader">
                        <button onClick={setUpQR} class="scan-placeholder"><CurLang text="press here to scan QR code" /></button>

                        </div>
                    </div>
                    <form class="input-form" onSubmit={onSubmit}>
                        <label class="din-input-container">
                            <div display='none' id="result"></div>
                            <input class="din-input" value={content} onChange={onDinChange} name="din" />
                        </label>
                        <input class="input-submit" type="submit" value="→" />
                    </form>
                </div>
                <div id="scan-right-column"></div>
            </div>
        </div>

    );
}

export default function Search() {

    return (
        <div>
            <Navbar />
            <GetDIN />
        </div>
    );
}
