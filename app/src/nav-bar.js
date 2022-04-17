import React from 'react';
import { CurLang } from './tools';

export default function Navbar(){
    return(
        <div>
            <nav id="navbar">
              <div id="subnavbarleft">
                <a href="/"><img id="logo" src="/assets/logo.png" alt="MediBase"/></a> 
              </div>
              <div id="subnavbarright">
                <a className="navbar-subtitle-text nav-underline" href="/medication"><CurLang text="medication" /></a>
                <a className="navbar-subtitle-text nav-underline" href="/schedule"><CurLang text="schedule" /></a>
                <a className="navbar-subtitle-text nav-underline" href="/search"><CurLang text="search" /></a>
                <a className="navbar-subtitle-text nav-underline" href="/profile"><CurLang text="profile" /></a>
              </div>
            </nav>
        </div>
    );
}
