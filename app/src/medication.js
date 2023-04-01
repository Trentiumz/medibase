import React, {useState} from "react";
import {getProfile, setProfile} from "./tools.js";
import './medication.css';
import Navbar from './nav-bar.js';
import {CurLang} from "./tools.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import Information from "./info.js";

export default function Medication(){
    let current = getProfile();
    const [medication, setMedication] = useState(current.medication);
    const [din, setDin] = useState(medication.length > 0 ? medication[0].din : null);

    function deleteSave() {
      for (let i = 0; i < medication.length; i++) {
        if (medication[i].din === din) {
          current.medication.splice(i, 1);
          break;
        }
      }
      setProfile(current);
      setMedication(current.medication);
      alert("This medication has been unsaved.");
    }

    if (din === null) {
      return (
        <div>
          <Navbar />  
        <div className="content">
          <div className="inner-content">
            <p className="error-text"><CurLang text="Oops! Looks like you don't have any medications. "/><a className="a-error" href="/search/"><CurLang text="Click here" /></a> <CurLang text="to add some."/></p>
            </div>
          </div>
        </div>
      )
    }

    // each medication is an object
    /**
     * [{
     *      name of medication: ,
     *      dosage: ,
     *      dosage_unit: ,
     *      notes: ,
     * }]
     */
    console.log(medication);
    return(
      <div>
        <Navbar />
        <div className="content">
          <div className="inner-content">
            <div id="left-column">
              <div id="medication-list-header">
                <p id="medication-list-header-title"><CurLang text="medication"/></p>
                <a className="icon-buttons" href="/search/">
                  <FontAwesomeIcon id="medication-list-header-icon" icon={faPlus} />
                </a>
              </div>
              <div id="medication-list" className="rectangles">
                {
                  medication.map((el, key) => {
                    return (
                      <div key={key}>
                        <button className="medication-list-item" onClick={() => {
                          setDin(el.din);console.log(el.din)}}>
                          {el.medication_name}
                        </button>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div id="right-column">
              <Information din={medication[0]} deleteSave={deleteSave}/>
            </div>
          </div>
        </div>
      </div>
    );
}
