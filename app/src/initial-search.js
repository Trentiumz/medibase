import React, {useState} from "react";
import {getProfile, setProfile} from "./tools.js";
import './info.css';
import Navbar from './nav-bar.js';
import {useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import Cookies from "universal-cookie";
import Information, { InformationFormat } from "./info.js";
import MakeDINRequests from "./api-calls/drugDatabase.js";
import {CurLang} from "./tools.js"

import "./initial-search.css"

export default function InitialSearch() {
  const cookies = new Cookies();
  const {din} = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  if (loading) {
      MakeDINRequests(din.split(";")).then(response => {
          setData(response);
      });
      setLoading(false);
  }

  function onClick() {
    if(data){
      let profile = getProfile();
      for(let med of profile.medication){
        if(med.din === data.din){
          alert("medication already added!");
          return;
        }
      }
      console.log(profile);
      profile.medication.push({
          medication_name: data.brand_name,
          din: data.din,
          patient_name: data.patient_name,
          prescribed_date: data.prescribed_date,
          doctor_name: data.doctor_name,

          quantity_dispensed: data.quantity_dispensed,
          instructions: data.instructions,
          warnings: data.warnings,
          notes: data.descriptor,
          to_notify: true,

          last_date_taken: parseInt(new Date().getDate())
      })
      setProfile(profile);
      console.warn(profile);
      alert("medication added!");
    }
  }
  if (data && data.error === "DIN not found") {
    return (
      <div>
        <Navbar />
        <div className="content">
            <div className="inner-content">
                <div className="error-text">
                    DIN <CurLang text="Not Found. Please check that you entered a valid" /> DIN <CurLang text="number."/> <a className="a-error" href="/"><CurLang text="click here"/></a> <CurLang text="to return home."/>
                </div>
            </div>
        </div>
      </div>
    );
  } else if (data) {
    return(
      <div>
        <Navbar />
        <div className='info-content'>
          <div className='info-inner-content'>
            <InformationFormat data={data} x={false} />
            <button className="save-medication-btn" value="Save Medication" onClick = {onClick}>Save Medication</button>
          </div>
        </div>
    </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        Loading
      </div>
    );
  }
}
