/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useState } from 'react';
// import {auth} from '../firebase'
import { getUser, out } from '../functions/user'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export default function user() {

    // eslint-disable-next-line react-hooks/rules-of-hooks


    const [email, setEmail] = useState('');
    const r = useHistory();
    const [name, setName] = useState('');
    // const [password, setPassword] = useState(user.password);
    const [state, setstate] = useState('');
    const [contry, setcontry] = useState('');
    const user = getUser();
    // const [isLogout,setLogout]=useState(false);
    // const [name,setName]=useState('');

    useEffect(() => {


        if (!user) {
            r.push('/')
            return;
        }
        const data = user.displayName.split(',');
        setEmail(user.email)
        setName(data[0])
        setcontry(data[2]);
        setstate(data[1])



    })


    return (
        <div className="center">
            <h3>User Profile</h3>
            <div className="form">

                <div>

                    <span>Name:</span>
                    <input

                        type="text" value={name} onChange={(e) => setName(e.target.value)}




                    >
                    </input>
                </div>
                <div>

                    <span>Email:</span>
                    <input

                        type="text" value={email} onChange={(e) => setEmail(e.target.value)}




                    >
                    </input>
                </div>
                {/* <div> */}
                {/* 
                    <span>Password:</span>
                    <input 
                    
                    type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    >
                    </input>
                </div> */}
                <div>

                    <span>country:</span>
                    <input

                        type="text" value={contry} onChange={(e) => setcontry(e.target.value)}

                    >
                    </input>
                </div>
                <div>

                    <span>State:</span>
                    <input

                        type="text" value={state} onChange={(e) => setstate(e.target.value)}

                    >
                    </input>
                </div>

                <button className="btn" onClick={
                    () => {
                        out()
                            .then(() => {
                                r.push("/")

                            })
                    }

                }>

                    Logout


                </button>


            </div>


        </div>
    )
}
