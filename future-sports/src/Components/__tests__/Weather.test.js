import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Weather from '../Aside/Weather.js'; 

describe('Weather', () => {
  it('renders the Weather component correctly', () => {
    const { getByText, getByTitle } = render(<Weather />);

    // Check if the heading is rendered
    expect(getByText('Weather')).toBeInTheDocument();

    // Check if the iframe is rendered with correct attributes
    const iframe = getByTitle('Weather Map');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'https://embed.windy.com/embed2.html?lat=-38.199&lon=144.998&detailLat=-37.810&detailLon=144.960&zoom=10&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=%C2%B0C&radarRange=-1');
    expect(iframe).toHaveAttribute('width', 'auto');
    expect(iframe).toHaveAttribute('height', '600');
  });
});
