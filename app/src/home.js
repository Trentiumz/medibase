import React from 'react';
import TTSIcon from './tts';
import './home.css';

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
                <a className="navbar-subtitle-text nav-underline" href="/login">login</a>
              </div>

            </nav>
            <div className="content">
              <div className="inner-content">
                <p className="feature-text">All your medication at your fingertips.</p>
              </div>
            </div>
            <div>
            Hello World!
            <TTSIcon text="Hello World" lang="en-us"/>
            </div>    
        </div>
    );
}
