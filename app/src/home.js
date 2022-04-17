import React from 'react';
import './home.css';
import { CurLang } from './tools';
import Navbar from './nav-bar';

export default function Homepage(){
    return(
        <div>
          <Navbar />
            <div className="home-content">
              <div className="home-inner-content">
                <p className="feature-text"><CurLang text="All your medication at your fingertips." /></p>
                <p className="feature-body"><CurLang text="MediBase is a medication assistant allowing people who have poorer eyesight, don’t understand English well, or have trouble remembering - to safely take medication." /></p>
              </div>
            </div>
            <div className = "test">
            </div>
        </div>
    );
}
