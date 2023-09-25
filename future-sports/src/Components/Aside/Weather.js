import React from 'react';

const Weather = () => {
  return (
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

export default Weather;
