import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import Navbar from './nav-bar.js';
import newProfile from './tools.js';

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
    const cookies = new Cookies();
    let current = cookies.get("profile");
    
    if(!current){
        newProfile();
        current = cookies.get("profile");
    }

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
                        cookies.set("profile", {...current, language: lan.value});
                        setLanguage(lan.value)
                    }}/>
                    <p className="feature-text">Color-Blind Mode: {colorblind ? "Off" : "On"}</p>
                    <button onClick={() => {
                        cookies.set("profile", {...current, colorblind: !colorblind});
                        setColorblind(!colorblind)
                    }}>Change</button>
                </div>
            </div>
        </div>
    );
}