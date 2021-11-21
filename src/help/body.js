import React from 'react'
import icons from '../img/tem1.svg';

function body({ city }) {

    const converterktor = (data) => {
        return Math.round(data - 273.15);
    }

    return (
        <div className="find-container">
            <div className="find right-box">
                <h1>🌃 {city?.name},{city?.country} 🌃 </h1>
                <div className="box">
                    <img src={icons} alt="1" />
                    <div className="title">{city?.weather[0]?.main}</div>
                    <div className="description">{city?.weather[0]?.description}</div>
                    <div className="description">lat{city?.coord?.lat} lon{city?.coord?.lon} </div>
                </div>
            </div>

            <div className="box left-box">


                <div className="tem">
                    <h3>tamprechar ⛅</h3>
                    <div>
                        <span>
                            Tamprechar
                        </span>
                        <span>
                            {converterktor(city?.main?.temp)} °C
                        </span>


                    </div>
                    {/* <div>

                feels like{converterktor(city?.main?.feels_like)} °C

                </div> */}
                    <div>


                        <span>



                        Tamprechar min
                        </span>
                        <span>

                            {converterktor(city?.main?.temp_min)} °C
                        </span>

                    </div>
                    <div>
                        <span>


                        Tamprechar max
                        </span>
                        <span>


                            {converterktor(city?.main?.temp_max)} °C
                        </span>

                    </div>
                    <div>

                        <span>

                            pressure
                        </span>
                        <span>
                            {city?.main?.pressure} mb
                        </span>
                    </div>
                    <div>

                        <span>

                            humidity
                        </span>
                        <span>
                            {city?.main?.humidity}
                        </span>
                    </div>
                    <div>

                        <span>
                            sea level
                        </span>
                        <span>
                            {city?.main?.sea_level || '__'} m
                        </span>

                    </div>
                    <div>

                        <span>
                            ground level
                        </span>
                        <span>
                            {city?.main?.grnd_level || '__'} m
                        </span>

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
    )
}

export default body
