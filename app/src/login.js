import React, {useState} from 'react';

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div>
            <form>
                <label>
                    Username: 
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                </label>
                <br></br>
                <label>
                    Password:
                    <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
            </form>

            <a href="/register" class="to-register">Register</a>
        </div>
    );
}