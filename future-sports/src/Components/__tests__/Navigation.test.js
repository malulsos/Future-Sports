import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '../Navigation/Navigation.js'; 

describe('Navigation', () => {
  it('renders navigation items', () => {
    const { getByText } = render(<Navigation />);
    
    // Verify that all navigation items are rendered
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('News')).toBeInTheDocument();
    expect(getByText('Photos')).toBeInTheDocument();
    expect(getByText('Videos')).toBeInTheDocument();
    expect(getByText('Calendar')).toBeInTheDocument();
    expect(getByText('Weather')).toBeInTheDocument();
    expect(getByText('Roster')).toBeInTheDocument();
    expect(getByText('Contact Us')).toBeInTheDocument();
  });

  it('renders search input and button', () => {
    const { getByPlaceholderText, getByText } = render(<Navigation />);
    
    // Verify that search input and button are rendered
    expect(getByPlaceholderText('Enter your search')).toBeInTheDocument();
    expect(getByText('Search')).toBeInTheDocument();
  });
 
});
