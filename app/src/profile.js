import React, { useState } from 'react';
import {CurLang} from "./tools.js"
import { getProfile, setProfile } from './tools.js';
import Navbar from './nav-bar.js';

import Select from 'react-select'
import "./profile.css";

const options = [
    { value: 'de-de', label: 'Deutsch (de)' },
    { value: 'en-us', label: 'English (en)' },
    { value: 'es-es', label: 'Español (es)' },
    { value: 'fr-fr', label: 'Français (fr)' },
    { value: 'zh-cn', label: '简体中文 (zh-cn)' },
    { value: 'zh-tw', label: '繁體中文 (zh-tw)' },
  ]
  

export default function Profile() {
    let current = getProfile();

    const [language, setLanguage] = useState(current.language);    
    const [colorblind, setColorblind] = useState(current.colorblind);


    return(
        <div id='container'>
            <Navbar />
            <div className="profile-content">
                <div className="profile-inner-content">
                  <div className="inner-profile-info-body">
                    <p className="profile-title"><CurLang text="profile" /></p>
                    <div id="profile-info" className="rectangles">
                      <div className="top-bar"><p className="top-bar-title">{current.name}</p></div>
                      <hr/>
                      <div className="profile-info-body">
                        <div className="profile-list">
                          <p className="profile-item"><CurLang text="Language: " />{language}</p>
                          <Select className="profile-description-dropdown" defaultValue={language} options={options} onChange={(lan) => {
                              setProfile({...current, language: lan.value});
                              current = getProfile();
                              setLanguage(lan.value);
                              }}/>
                        </div>
                        <div className="profile-list">
                          <p className="profile-item"><CurLang text="Color-Blind Mode: " /><CurLang text={colorblind ? "Off" : "On"} /></p>
                          <button className="profile-description-btn" onClick={() => {
                            setProfile({...current, colorblind: !colorblind});
                            setColorblind(!colorblind)
                            }}><CurLang text="Change" /></button>
                       </div>
                    </div>
                      </div> </div>
                </div>
            </div>
        </div>
    );
}