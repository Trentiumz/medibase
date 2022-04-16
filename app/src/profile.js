import React, {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router';

export default function Profile(){
    const cookies = new Cookies();
    let cur_id = cookies.get('cur-id');
    const navigate = useNavigate();

    useEffect(() => {
        console.log(cur_id);
        if(!cur_id){
            navigate("/login");
        }
    })

    return(
        <div>
            Profile!
        </div>
    );
}