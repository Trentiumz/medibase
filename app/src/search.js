import React, {useState} from "react";
import {getProfile, setProfile} from "./tools.js";
import './medication.css';
import Navbar from './nav-bar.js';
import {useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import Cookies from "universal-cookie";
import Information, { InformationFormat } from "./info.js";
import MakeDINRequests from "./api-calls/drugDatabase.js";

export default function Search() {
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
          return;
        }
      }
      profile.medication.push({
          medication_name: data.brand_name,
          din: data.din,
          notes: data.descriptor,
          last_date_taken: parseInt(new Date().getDate())
      })
      cookies.set("profile", profile);
    }
  }

  if(data){
    return(
      <div>
        <Navbar />
        <div class='search-info-body'>
          {InformationFormat(data)}
          <button value="Save Medication" onClick = {onClick}/>
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
