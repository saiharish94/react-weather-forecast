import React from 'react';
import PropTypes from 'prop-types';

const WeatherCard = ({ day }) => {
    return (
        <div className="card mt-4">
            <div className="card-body">
                <div className="text-center">
                    <img
                        src={day.icon}
                        alt={day.name}
                        width="120px"
                        className="rounded-circle"
                    />
                    <ul className="list-group list-group-flush text-left">
                        <li className="list-group-item">{`${day.temperature} ${day.temperatureUnit}`}</li>
                        <li className="list-group-item">{`${day.name} (${new Date(day.startTime).toLocaleString("en-US")})`}</li>
                        <li className="list-group-item">{`${day.shortForecast}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

WeatherCard.propTypes = {
    day: PropTypes.object
};

export default WeatherCard
