import React, { useEffect } from 'react';

import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router';

export default function Profile() {
    const cookies = new Cookies();
    let curId = cookies.get('cur-id');
    const navigate = useNavigate();

    useEffect(() => {
        console.log(curId);
        if(!curId) navigate("/login");
    }, [curId]);

    return(
        <div>
            Profile!
        </div>
    );
}