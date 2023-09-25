import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Video from '../Main/Video.js';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

// Mock ReactPlayer and MyButton components
jest.mock('react-player', () => {
    return ({ url }) => <div>Mocked ReactPlayer, URL: {url}</div>;
});
  
jest.mock('../button.js', () => {
    return ({ label, onClick }) => <button onClick={onClick}>{label}</button>;
});

test('renders Video section correctly and handles click events', async () => {
    render(<Video />);
  
    // Initial expectations
    expect(screen.getByText('Video Section')).toBeInTheDocument();
    expect(screen.getByText('Video List')).toBeInTheDocument();
    expect(screen.getByText(/Mocked ReactPlayer, URL:/)).toBeInTheDocument();
  
    // Check for buttons and their initial state
    const video1Button = screen.getByRole('button', { name: /Video 1/i });
    expect(video1Button).toBeInTheDocument();
  
    const video2Button = screen.getByRole('button', { name: /Video 2/i });
    expect(video2Button).toBeInTheDocument();
  
    const video3Button = screen.getByRole('button', { name: /Video 3/i });
    expect(video3Button).toBeInTheDocument();
  
    // Initial video should be Video 1
    expect(screen.getByText(/Mocked ReactPlayer, URL: vid1.mp4/)).toBeInTheDocument();
  
  // Act: Click on Video 2 button
  act(() => {
    userEvent.click(video2Button);
  });

    // Use `waitFor` to ensure the component has updated
    await waitFor(() => {
      expect(screen.getByText(/Mocked ReactPlayer, URL: vid2.mp4/)).toBeInTheDocument();
    });
});
