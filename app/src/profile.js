import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import Navbar from './nav-bar.js';
import newProfile from './tools.js';

import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
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
                    <Select options={options} onChange={(lan) => {setLanguage(lan.value)}}/>
                    <p className="feature-text">Color-Blind Mode: {colorblind ? "Off" : "On"}</p>
                    
                </div>
            </div>
        </div>
    );
}