import React, {useState} from "react";
import {getProfile, setProfile} from "./tools.js";
import './medication.css';
import Navbar from './nav-bar.js';
import {useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import Information from "./info.js";

export default function Search() {
    const {din} = useParams();
    return(
      <div>
        <Navbar />
        <div class='search-info-body'>
            {Information(din)}
        </div>
      </div>
    );
}
