import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Photos from '../Main/Photos.js';

// Mock ImageCarousel component
jest.mock('../ImageCarousel.js', () => {
  return ({ images }) => <div>Mocked ImageCarousel, images length: {images.length}</div>;
});

test('renders Photos section with correct elements', () => {
  render(<Photos />);
  
  // Check if section title exists
  expect(screen.getByText('Photo Section')).toBeInTheDocument();
  
  // Check if the mocked ImageCarousel is rendered
  expect(screen.getByText(/Mocked ImageCarousel, images length:/)).toBeInTheDocument();
  
  // Check if the right number of images are passed to ImageCarousel
  expect(screen.getByText(/images length: 6/)).toBeInTheDocument();
});
