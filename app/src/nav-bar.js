import React from 'react';

export default function Navbar(){
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
        </div>
    );
}
