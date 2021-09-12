import { useEffect, useState } from 'react';

export function useWeather({ lat, lon, }) {

    const [apiData, setApiData] = useState(null);

    const apiUrl = `https://api.weather.gov/points/${lat},${lon}`;

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setApiData(data?.properties);
            });
    }, [apiUrl]);

    return apiData;
}