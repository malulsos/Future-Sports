// Import necessary libraries
import React from 'react';

// Define the Weather component
const Weather = () => {
  // Render the Weather component
  return (
    // Render JSX for Weather and embed the weather map
    <section className="weather">
      <a id="weather"></a>
      <h2>Weather</h2>
      <iframe
        src="https://embed.windy.com/embed2.html?lat=-38.199&lon=144.998&detailLat=-37.810&detailLon=144.960&zoom=10&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=%C2%B0C&radarRange=-1"
        width="auto"
        height="600"
        title="Weather Map"
      ></iframe>
    </section>
  );
};

// Export the Weather component
export default Weather;
