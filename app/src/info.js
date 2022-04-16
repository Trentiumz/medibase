import React from 'react';
import {useParams} from "react-router-dom";
import { useState } from 'react';
import MakeDINRequests from './api-calls/drugDatabase';


export default function Information(){
    const {din} = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    if (loading) {
        MakeDINRequests(din).then(response => {
            setData(response);
        });
        setLoading(false);
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
            </div>
        );
    }
}
