import React from 'react';
import './home.css';
import { CurLang } from './tools';

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
        </div>
    );
}
