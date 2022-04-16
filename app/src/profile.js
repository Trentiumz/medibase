import React, {useState, useEffect} from 'react';

import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router';

export default function Profile() {
    const cookies = new Cookies();

    return(
        <div>
            Profile!
        </div>
    );
}