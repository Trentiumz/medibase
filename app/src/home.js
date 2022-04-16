import React from 'react';
import './home.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { CurLang } from './tools';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Homepage(){
    return(
        <div>
            <div className="content">
              <div className="inner-content">
                <p className="feature-text"><CurLang text="All your medication at your fingertips." /></p>
              </div>
            </div>
            <div className = "test">
            </div>
            <FontAwesomeIcon icon={faCoffee} />
        </div>
    );
}
