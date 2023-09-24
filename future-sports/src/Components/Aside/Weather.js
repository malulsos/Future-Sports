import React from 'react';

const Weather = () => {
  return (
    <div className="weather">
      <a id="weather"></a>
      <h2>Weather</h2>
      <iframe
        src="https://embed.windy.com/embed2.html?lat=-38.199&lon=144.998&detailLat=-37.810&detailLon=144.960&width=250&height=400&zoom=8&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=%C2%B0C&radarRange=-1"
        width="300"
        height="400"
        title="Weather Map"
      ></iframe>
    </div>
  );
};

export default Weather;
