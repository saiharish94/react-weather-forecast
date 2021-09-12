import { useEffect, useState } from 'react';
import Weather from './components/Weather';

function App() {
  const [coordinates, setCoordinates] = useState({ latitude: '39.7456', longitude: '-97.0892' })

  useEffect(() => {
    (async function () {
      try {
        // get Current position
        const { coords: { latitude, longitude } } = await getPosition();
        setCoordinates(c => ({ ...c, latitude, longitude }))
      } catch (e) {
        console.error(e);
        console.log(
          "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
        );
      }
    })();
  }, []);

  const getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Weather Forecast</h1>
      <Weather coordinates={coordinates} />
    </div>
  );
}

export default App;
