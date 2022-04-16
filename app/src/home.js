import React from 'react';
import './home.css';
import TTSIcon from './tts';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Homepage(){
    return(
        <div>
            <nav id="navbar">
              <div id="subnavbarleft">
                <img id="logo" src="/assets/logo.png" alt="MediBase"/> 
              </div>
              <div id="subnavbarright">
                <a className="navbar-subtitle-text nav-underline" href="/medication">medication</a>
                <a className="navbar-subtitle-text nav-underline" href="/schedule">schedule</a>
                <a className="navbar-subtitle-text nav-underline" href="/scan">scan</a>
                <a className="navbar-subtitle-text nav-underline" href="/profile">profile</a>
              </div>

            </nav>
            <div className="content">
              <div className="inner-content">
                <p className="feature-text">All your medication at your fingertips.</p>
              </div>
            </div>
            <div className = "test">
            </div>    
            <FontAwesomeIcon icon={faCoffee} />
        </div>
    );
}
