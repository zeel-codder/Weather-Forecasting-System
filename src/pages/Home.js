import React from 'react'
import { useHistory } from 'react-router-dom';

import { isUserLogin } from '../functions/user';
import Login from './Login';
import Home from './Home_Data'
import { useState, useEffect } from 'react'
import Load from '../help/loadder';

// import {useState} from 'react';

export default function Find() {

    const router = useHistory();
    const [login, setlogin] = useState(false);
    const [loading, setLoading] = useState(true);

    isUserLogin(setLoading,setlogin)
   



    return (

        <>

            {
                loading

                    ?
                    <Load></Load>
                    :
                    login
                    ?
                    <Home></Home>
                    :
                    <Login isSingIn={true}></Login>

            }

        </>
    )
}
