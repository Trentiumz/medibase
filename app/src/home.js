import React from 'react';
import './home.css';
import TTSIcon from './tts';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Homepage(){
    return(
        <div>
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
