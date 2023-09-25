import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Article from '../Main/Article/Article.js';

// Mock the LightboxContent component
jest.mock('../Lightbox.js', () => ({
  LightboxContent: ({ content }) => <div>{content}</div>,
}));

test('Article displays its props and handles button click', () => {
  render(
    <Article
      title="Test Title"
      intro="Test Intro"
      content={<p>Test Content</p>}
    />
  );

  // Check if title and intro are displayed
  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(screen.getByText("Test Intro")).toBeInTheDocument();

  // Lightbox should not be in the document initially
  const queryLightboxContent = () => screen.queryByText("Test Content");
  expect(queryLightboxContent()).not.toBeInTheDocument();

  // Check if the Read More button opens the lightbox
  fireEvent.click(screen.getByText("Read more"));
  expect(queryLightboxContent()).toBeInTheDocument();

  // Check if clicking the Read More button again hides the lightbox
  fireEvent.click(screen.getByText("Read more"));
  expect(queryLightboxContent()).not.toBeInTheDocument();
});
