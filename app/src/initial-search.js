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

export default function InitialSearch() {
  const cookies = new Cookies();
  const {din} = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  if (loading) {
      MakeDINRequests(din).then(response => {
          setData(response);
      });
      setLoading(false);
  }

  function onClick() {
    if(data){
      let profile = cookies.get("profile");
      for(let med of profile.medication){
        if(med.din === data.din){
          alert("medication already added!");
          return;
        }
      }
      profile.medication.push({
          medication_name: data.brand_name,
          din: data.din,
          notes: data.descriptor,
          to_notify: true,
          last_date_taken: parseInt(new Date().getDate())
      })
      cookies.set("profile", profile);
      console.warn(profile);
      alert("medication added!");
    }
  }
  if (data && data.error === "DIN not found") {
    return (
      <div>
        <Navbar />
        <div class="din-not-found">
          <p>DIN not found</p>
          <p>Please try again</p>
          <a href="/">Return Home</a>
        </div>
      </div>
    );
  } else if (data) {
    return(
      <div>
        <Navbar />
        <div className='info-content'>
          <div className='info-inner-content'>
            <InformationFormat data={data} />
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
