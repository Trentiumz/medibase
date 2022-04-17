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
    const medication = current.medication;
    const [din, setDin] = useState(medication.length > 0 ? medication[0].din : null);

    if (din === null) {
      return (
        <div>
          <Navbar />  
        <div className="content">
          <div className="inner-content">
            <p className="error-text"> Oops! Looks like you don't have any medications. <a href="/search/">Click here</a> to add some.</p>
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
              <Information din={din} />
            </div>
          </div>
        </div>
      </div>
    );
}
