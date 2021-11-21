import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
import icons from '../img/tem1.svg';
import search from '../img/search.svg';
import Load from '../help/loadder'
import Template from '../help/body'
import { useHistory } from 'react-router-dom';

import { isUserLogin,getUser } from '../functions/user';
import Login from './Login';

function Home_Data() {
    const [city, setCity] = useState({})

    const [Load1, setLoad] = useState(false);
    const user=getUser();

    const name1 = useRef();

    useEffect(() => {

        setLoad(true)

        console.log(user)

        const find=user.displayName.split(',')[1];
        // console.log('call')
        var options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/find',
            params: {
                q: find,
                cnt: '1',
                mode: 'null',
                lon: '0',
                type: 'link, accurate',
                lat: '0',
                units: 'imperial, metric'
            },
            headers: {
                'x-rapidapi-key':process.env.REACT_APP_rapidapi_key,
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            const data = response.data.list;
            if (data.length !== 0) {
                const tem = data[0];
                tem['country'] = tem.sys.country;
                setCity(tem);
                setLoad(false);

            } else {
                setCity({})
            }

        }).catch(function (error) {
            setLoad(false)

            console.error(error);
        });


    }, [])
    return (
        <div className="find"  >



        {

            Load1 ?

                <Load></Load>

                :


                !city?.name || city?.name == 'Globe'

                    ?
                    <div className=" _404">
                        <img src={search} alt="404"></img>
                    </div>
                    :

                    <Template city={city}></Template>



        }
    </div>
    )
}

export default Home_Data
