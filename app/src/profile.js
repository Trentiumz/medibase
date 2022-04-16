import React, { useState } from 'react';
import { getProfile, setProfile } from './tools.js';
import Navbar from './nav-bar.js';

import Select from 'react-select'

const options = [
    { value: 'de', label: 'Deutsch (de)' },
    { value: 'en', label: 'English (en)' },
    { value: 'es', label: 'Español (es)' },
    { value: 'fr', label: 'Français (fr)' },
    { value: 'zh-hans', label: '简体中文 (zh-hans)' },
    { value: 'zh-hant', label: '繁體中文 (zh-hant)' },
  ]
  

export default function Profile() {
    let current = getProfile();

    const [language, setLanguage] = useState(current.language);    
    const [colorblind, setColorblind] = useState(current.colorblind);


    return(
        <div id='container'>
            <Navbar />
            <div className="content">
                <div className="inner-content">
                    <p className="feature-text">{current.name}</p>
                    <p className="feature-text">Language: {language}</p>
                    <Select defaultValue={language} options={options} onChange={(lan) => {
                        setProfile({...current, language: lan.value});
                        setLanguage(lan.value)
                    }}/>
                    <p className="feature-text">Color-Blind Mode: {colorblind ? "Off" : "On"}</p>
                    <button onClick={() => {
                        setProfile({...current, colorblind: !colorblind});
                        setColorblind(!colorblind)
                    }}>Change</button>
                </div>
            </div>
        </div>
    );
}