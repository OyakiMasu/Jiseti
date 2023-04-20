import React, { useState, useEffect } from "react";

const GeolocationDetector = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=5cd12a06034d486cb4e8aa4520da32e1`
          );
          const data = await response.json();
          const location = data.results[0].formatted_address;
          setLatitude(latitude);
          setLongitude(longitude);
          setError(null);
          console.log(`Your current location is: ${location}`);
        },
        (error) => {
          setError(error.message);
          console.error(`Error getting location: ${error.message}`);
        }
      );
    } else {
      setError("Geolocation is not supported in this browser");
    }
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {latitude && longitude && (
        <p>
          Your current location is: {latitude}, {longitude}
        </p>
      )}
    </div>
  );
};

export default GeolocationDetector;
