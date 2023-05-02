import React from 'react';
import {useParams} from "react-router-dom";
import { useState } from 'react';
import MakeDINRequests from './api-calls/drugDatabase';
import Cookies from 'universal-cookie';
import TTSIcon from './api-calls/tts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes, faBell, faVolumeHigh, faBellSlash } from '@fortawesome/free-solid-svg-icons'
import { getProfile, setProfile } from './tools';
import {CurLang} from "./tools.js"
import "./info.css";
import Notifier from "react-desktop-notification";

function getInd(din){
    for(let ind = 0; ind < getProfile().medication.length; ind++){
        if(parseInt(getProfile().medication[ind].din) === parseInt(din)){
            return ind;
        }
    }
    return -1;
}

export function InformationFormat(props){
    const data = props.data
    const x = props.x;
    let profile = getProfile();
    console.log(profile);
    const ind = getInd(data.din);
    const [tmp, setNotif] = useState(false);
    const notif = (ind >= 0 && x) ? profile.medication[ind].to_notify : false;

    const message = `${data.brand_name}. Instructions: ${data.instructions}. Warnings: ${data.warnings}. Dosage form: ${data.form}. Route of administration: ${data.route}.`;
    console.log(message)

    function onToggle(){
        if(ind >= 0){
            profile = getProfile();
            profile.medication[ind].to_notify = !profile.medication[ind].to_notify;
            setProfile(profile);
            setNotif(!tmp);
        }
    }

    return(
          <div id="medication-info" className="rectangles">
            <div className="top-bar">
              <div className="info-icons">
                <div style={{display: x ? 'inline' : 'none'}} onClick={props.onclickX} className='icon-buttons'>
                    <FontAwesomeIcon id="info-times-icon" icon={faTimes} />
                </div>
                <div className="icon-buttons" onClick={() => onToggle()}>
                  {notif ? <FontAwesomeIcon id="info-notif-icon" icon={faBell} /> : <FontAwesomeIcon id="info-notif-icon" icon={faBellSlash} />}
                </div>
                <TTSIcon text={message} lang={getProfile().language}/>
                <p className = "top-bar-title">{data.brand_name}</p>
                <p className="info-item">DIN: {data.din}</p>
              </div>
            </div>
            <hr/>
            <div className="medication-info-body">
              <div className="inner-medication-info-body">
              <p className="info-description">for <b>{data.patient_name}</b>, prescribed by <b>{data.doctor_name}</b> on <b>{data.prescribed_date}</b></p>
              <p className="info-item"><CurLang text="Instructions"/>:</p>
              <p className="info-description"><CurLang text={data.instructions}/></p>
              <p className="info-item"><CurLang text="Warnings"/>:</p>
              <p className="info-description"><CurLang text={data.warnings}/></p>
              <p className="info-item"><CurLang text="Quantity Dispensed"/>:</p>
              <p className="info-description"><CurLang text={data.quantity_dispensed}/></p>
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

export default function Information(props){
    //const {din} = useParams();
    const din = props.din;
    const [loading, setLoading] = useState(true);
    const [oldData, setOldData] = useState(null);
    const [data, setData] = useState(null);

    console.log(data,din);
    if (!loading && data !== null && data.din !== din) {
        setLoading(true);
        setOldData(data);
        setData(null);
    }
    if (loading) {
        const temp = [props.din.patient_name,props.din.prescribed_date,props.din.doctor_name,props.din.din,props.din.quantity_dispensed,props.din.instructions,props.din.warnings];
        console.log(temp);
        MakeDINRequests(temp).then(response => {
            setData(response);
        });
        setLoading(false);
        //setData(null);
    }

    if (!data && !oldData) {
        return (<div>Loading...</div>);
    } else if (!data) {
        return <InformationFormat data={oldData} x={true}/>;
    } else if (data.error === "DIN not found") {
        return (
            <div class="din-not-found">
                <p>DIN not found</p>
                <p>Please try again</p>
                <a href="/">Return Home</a>
            </div>
        );
    } else {
        return <InformationFormat data={din} x={true} onclickX={props.deleteSave}/>;
    }
}
