import { useEffect, useState } from 'react';

const foreCastFallbackURL = '';

export function useForecast(forecastUrl = foreCastFallbackURL) {

    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        if (forecastUrl) {
            fetch(forecastUrl)
                .then((res) => res.json())
                .then((data) => {
                    setApiData(data?.properties);
                });
        }
    }, [forecastUrl]);

    return apiData;
}