import React from 'react';
import {useParams} from "react-router-dom";
import { useEffect, useState } from 'react';
import MakeDINRequests from './api-calls/drugDatabase';


export default function Information(){
    const {din} = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    if (loading) {
        setData(MakeDINRequests(din));
        setLoading(false);
        console.log(data, loading);
    }
    if (!data) {
        return (<div>Hi</div>);
    } else {
        console.log("HI")
        return(
            <div>
                <h1>{data.company_name}</h1>
            </div>
        );
    }
}
