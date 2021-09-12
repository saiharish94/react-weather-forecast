import React from 'react';
import PropTypes from 'prop-types';
import { useForecast } from '../hooks/useForecast';
import { useWeather } from '../hooks/useWeather';
import './weather.css';
import WeatherCard from './WeatherCard';


const Weather = ({ coordinates }) => {
    const weather = useWeather({
        lat: coordinates.latitude,
        lon: coordinates.longitude,
    });

    const { periods: foreCasts = [] } = useForecast(weather?.forecast) || {};

    const todayData = foreCasts[0];
    return (
        <>
            {
                weather ? <><div className="card">
                    <div className="card-body py-5">
                        <div className="row">
                            <div className="col text-center">
                                {todayData && <>
                                    <img
                                        src={todayData?.icon}
                                        alt={todayData?.name}
                                        width="120px"
                                        className="rounded-circle"
                                    />
                                    <h6 className="mt-3 fs-6">{`${todayData.name} (${new Date(todayData?.startTime).toLocaleString("en-US")})`} { }</h6>
                                </>}
                            </div>
                            <div className="col">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><span className="fw-bold">State</span> : {weather?.relativeLocation?.properties?.state}</li>
                                    <li className="list-group-item"><span className="fw-bold">City</span> : {weather?.relativeLocation?.properties?.city}</li>
                                    {
                                        todayData && <li className="list-group-item"><span className="fw-bold">Description</span> : {todayData.detailedForecast}</li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="weather">
                        {foreCasts?.slice(1)?.filter(day => day.isDaytime).map((day, index) => (
                            <WeatherCard key={index} day={day} />
                        ))}
                    </div>
                </>
                    : <div className="text-center"> There is some error. please try again</div>
            }
        </>
    )
}

Weather.propTypes = {
    coordinates: PropTypes.object
};

export default Weather
