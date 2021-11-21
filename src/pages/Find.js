import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
import icons from '../img/tem1.svg';
import search from '../img/search.svg';
import Load from '../help/loadder'

export default function Find() {

    const [city, setCity] = useState({})
    const [text,settext]=useState('');
    const [query,setQuery]=useState('');
    const [Load1,setLoad]=useState(false);
    const name1 = useRef();

    useEffect(() => {
        // console.log(query)

        if(!query){
            return;
        }
        const tem=query;
        setLoad(true)
        var options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/find',
            params: {
              q: query,
              cnt: '1',
              mode: 'null',
              lon: '0',
              type: 'link, accurate',
              lat: '0',
              units: 'imperial, metric'
            },
            headers: {
                'x-rapidapi-key': '8e03c2716fmshe4ca45f894c833fp197069jsn6f5871a50cda',
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              const data=response.data.list;
            //   const regex=`/${query}/gi`;
            //   console.log(regex,regex.match(data[0]?.name),data[0]?.name)
              if(data.length!==0 && data[0]?.name[0].toLowerCase()==query[0].toLowerCase()){
                  const tem=data[0];
                  tem['country']=tem.sys.country;
                  setCity(tem);
                  setLoad(false);
                  setQuery('');
              }else{
                  setCity({})
              }

          }).catch(function (error) {
              setLoad(false)
    
              console.error(error);
          });

          const c=setTimeout(()=>{
              if(query?.name==tem?.name){

                setLoad(false)
                setQuery('')
               
                

              }
          },4000)

          return ()=>{  
            clearTimeout(c)
          }
    }, [query])

    const converterktor=(data)=>{
        return Math.round(data-273.15);
    }


    return (
        <div className="find"  >

            <div className="row">


                <input id="q" type='text' autoComplete="false" ref={name1} placeholder="Find Weather By Location Name" value={text} 
                onChange={(e)=>settext(e.target.value)}
                onKeyDown={(e)=>{
                    if(e.code=="Enter"){

                        // console.log(e)
                        setQuery(text)
                    }
                }}

                autoCorrect
        
                
                ></input>
                <button className="btn" onClick={()=>{
                    // console.log(document.querySelector(".row #q").value)
                    setQuery(text)
                    // settext('')
                }}>
                    <FaSearch></FaSearch>
                </button>
            </div>

            {

                Load1 ?
                
                <Load></Load>

                :
        

               ! city?.name || city?.name=='Globe'

               ?
               <div className=" _404">
                   <img src={search} alt="404"></img>
                </div>
               :

               <div className="find-container">
                <div className="find right-box">
                    <h1>🌃 {city?.name},{city?.country} 🌃 </h1>
                    <div className="box">
                        <img src={icons} alt="1" />
                        <div className="title">{city?.weather[0]?.main}</div>
                        <div className="description">{city?.weather[0]?.description}</div>
                        <div className="description">lat:{city?.coord?.lat} lon:{city?.coord?.lon} </div>
                    </div>
                </div>

                <div className="box left-box">


                    <div className="tem">
                    <h3>tamprechar ⛅</h3>
                        <div>
                        temp:{ converterktor(city?.main?.temp)} °C


                        </div>
                        {/* <div>

                        feels like:{converterktor(city?.main?.feels_like)} °C

                        </div> */}
                        <div>

                        temp min:{converterktor(city?.main?.temp_min)} °C

                        </div>
                        <div>

                        temp max:{converterktor(city?.main?.temp_max)} °C

                        </div>
                        <div>

                        pressure:{city?.main?.pressure} mb
                        </div>
                        <div>

                        humidity:{city?.main?.humidity } 
                        </div>
                        <div>

                        sea level:{city?.main?.sea_level || '__'} m
                        </div>
                        <div>

                        ground level:{city?.main?.grnd_level || '__'} m
                        </div>
                    </div>
                    <div className="wind">

                        <h3>Wind 🍃</h3>
                        <div className="row">
                        <div>
                        speed
                        <div className="description">
                         {city?.wind?.speed}Km/h
                        </div>
                        </div>
                        <div>
                        deg
                        <div className="description">

                            

                        {`${city?.wind?.deg}°`}
                              
                        </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>

          }
        </div>
    )
}
