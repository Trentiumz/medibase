import React from 'react';
import {useParams} from "react-router-dom";
import { useEffect, useState } from 'react';
import MakeDINRequests from './api-calls/drugDatabase';


export default function Information(){
    const {din} = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    if (loading) {
        MakeDINRequests(din).then(response => {
            setData(response);
        }).then(() => setLoading(false));
    }
    return(
        <>
        <div style={{display: loading ? "block" : "none"}}>Loading...</div>
        <div style={{display: !loading ? "block" : "none"}}>
            {data.company_name}
        </div>
        </>
    );
}
