import React from 'react';
import {useParams} from "react-router-dom";
import { useState } from 'react';
import MakeDINRequests from './api-calls/drugDatabase';
import Cookies from 'universal-cookie';


export default function Information(){
    const {din} = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const cookies = new Cookies();
    if (loading) {
        MakeDINRequests(din).then(response => {
            setData(response);
        });
        setLoading(false);
    }

    function onClick(){
        let profile = cookies.get("profile");
        profile.medication.push({
            medication_name: data.brand_name,
            din: data.din,
            notes: data.descriptor,
            last_date_taken: parseInt(new Date().getDate())
        })
        cookies.set("profile", profile);
    }

    if (!data) {
        return (<div>Loading...</div>);
    } else {
        return(
            <div>
                <div>{data.brand_name}</div>
                <div>{data.company_name}</div>
                <div>Active Ingredients</div>
                {data.ingredients.map((el, key) => {
                    return(
                        <div key={key}>{el.name} {el.strength}</div>
                    )
                })}
                <div>Dosage Form: {data.form}</div>
                <div>Route of Administration: {data.route}</div>
                <button value="Add Medication" onClick={onClick}></button>
            </div>
        );
    }
}
