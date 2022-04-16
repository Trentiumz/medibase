import React from "react";
import newProfile from './tools.js';
import Cookies from "universal-cookie";
import './medication.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

export default function Medication(){
    const cookies = Cookies();
    let current = cookies.get("profile");

    if(!current){
        newProfile();
        current = cookies.get("profile");
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
    const medication = current.medication;
    return(
      <div>
        <nav id="navbar">
          <div id="subnavbarleft">
            <img id="logo" src="/assets/logo.png" alt="MediBase"/> 
          </div>
          <div id="subnavbarright">
            <a className="navbar-subtitle-text nav-underline" href="/medication">medication</a>
            <a className="navbar-subtitle-text nav-underline" href="/schedule">schedule</a>
            <a className="navbar-subtitle-text nav-underline" href="/login">login</a>
          </div>
          
        </nav>
        <div className="content">
          <div className="inner-content">
            <div id="left-column">
              <div id="medication-list-header">
                <p id="medication-list-header-title">medication</p>
                <a className="icon-buttons" href="/add">
                  <FontAwesomeIcon id="medication-list-header-icon" icon={faPlus} />
                </a>
              </div>
              <div id="medication-list" className="rectangles">
                <div id="inner-medication-list">
                  <div class="medication-list-item"><p class="medication-list-item-text">drug1</p></div>
                  <div class="medication-list-item"><p class="medication-list-item-text">drug1</p></div>
                  <div class="medication-list-item"><p class="medication-list-item-text">drug1</p></div>
                  <div class="medication-list-item"><p class="medication-list-item-text">drug1</p></div>
                  <div class="medication-list-item"><p class="medication-list-item-text">drug1</p></div>
                  <div class="medication-list-item"><p class="medication-list-item-text">drug1</p></div>
                  <div class="medication-list-item"><p class="medication-list-item-text">drug1</p></div>
                  <div class="medication-list-item"><p class="medication-list-item-text">drug1</p></div>
                  <div class="medication-list-item"><p class="medication-list-item-text">drug1</p></div>
                  <div class="medication-list-item"><p class="medication-list-item-text">drug1</p></div>
                  <div class="medication-list-item"><p class="medication-list-item-text">drug1</p></div>
                </div>
              </div>
            </div>
            <div id="right-column">
              <div id="medication-info" className="rectangles">
                <div className="top-bar">
                  <div class="info-icons">
                    <a className="icon-buttons" href="/add">
                      <FontAwesomeIcon id="info-notif-icon" icon={faBell} />
                    </a>
                    <a className="icon-buttons" href="/add">
                      <FontAwesomeIcon id="info-tts-icon" icon={faVolumeHigh} />
                    </a>
                    <p className = "top-bar-title">drug 1</p>
                  </div>
                </div>
                <hr/>
                <div className="medication-info-body">
                  <div className="inner-medication-info-body">
                    <p className="info-item">instructions:</p>
                    <p className="info-description">placeholder</p>
                    <p className="info-item">frequency:</p>
                    <p className="info-description">placeholder</p>
                    <p className="info-item">quantity:</p>
                    <p className="info-description">placeholder</p>
                    <p className="info-item">ingredients:</p>
                    <p className="info-description">placeholder</p>  
                    <p className="info-item">purpose/description:</p>
                    <p className="info-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
