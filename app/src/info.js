import React from 'react';
import {useParams} from "react-router-dom";
import { useState } from 'react';
import MakeDINRequests from './api-calls/drugDatabase';
import Cookies from 'universal-cookie';
import TTSIcon from './tts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { getProfile } from './tools';
import {CurLang} from "./tools.js"
import "./info.css";

export function InformationFormat(data){
    console.log(data);

    const message = `${data.brand_name}. Dosage form: ${data.form}. Route of administration: ${data.route}.`;
    console.log(message)

    return(

          <div id="medication-info" className="rectangles">
            <div className="top-bar">
              <div className="info-icons">
                <div className="icon-buttons" onClick={() => console.log("hi")}>
                  <FontAwesomeIcon id="info-notif-icon" icon={faBell} />
                </div>
                <TTSIcon text={message} lang={getProfile().language}/>
                <p className = "top-bar-title">{data.brand_name}</p>
              </div>
            </div>
            <hr/>
            <div className="medication-info-body">
              <div className="inner-medication-info-body">
                <p className="info-item"><CurLang text="Company"/>:</p>
                <p className="info-description">{data.company_name}</p>
                <p className="info-item"><CurLang text="Active Ingredients"/>:</p>
                <div className="info-description">{data.ingredients.map((el, key) => {
                    return (
                        <div key={key}>
                            <p className="info-description">{el.name} - <CurLang text="Strength"/>: {el.strength}</p>
                        </div>
                    )
                })}</div>
                <p className="info-item"><CurLang text="Dosage Form"/>:</p>
                <p className="info-description"><CurLang text={data.form}/></p>
                <p className="info-item"><CurLang text="Route of Administration"/>:</p>
                <p className="info-description"><CurLang text={data.route}/></p>
                <p className="info-item"><CurLang text="Descriptor"/>:</p>
                <p className="info-description">{data.descriptor.length === 0 ? "N/A" : data.descriptor}</p>
              </div>
            </div>
        </div>

    );
}

export default function Information(din){
    //const {din} = useParams();
    const [loading, setLoading] = useState(true);
    const [oldData, setOldData] = useState(null);
    const [data, setData] = useState(null);
    if (!loading && data !== null && data.din !== din) {
        setLoading(true);
        setOldData(data);
        setData(null);
    }
    if (loading) {
        MakeDINRequests(din).then(response => {
            setData(response);
        });
        setLoading(false);
    }

    if (!data && !oldData) {
        return (<div>Loading...</div>);
    } else if (!data) {
        return InformationFormat(oldData);
    } else {
        return InformationFormat(data);
    }
}
