import React from "react";
import newProfile from './tools.js';
import Cookies from "universal-cookie";

export default function Medication(){
    const cookies = Cookies();
    let current = cookies.get("profile");

    if(!current){
        newProfile();
        current = cookies.get("profile");
    }

    // each medication is an object
    /**
     * [{
     *      name of medication: ,
     *      dosage: ,
     *      dosage_unit: ,
     *      notes: ,
     * }]
     */
    const medication = current.medication;
    return(
        <div>
            Testing Medication
        </div>
    );
}