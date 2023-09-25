import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleSection from '../Main/Article/ArticleSection.js';
import '@testing-library/jest-dom/extend-expect';


// Mock the Article component
jest.mock('../Main/Article/Article.js', () => () => <div>Mocked Article</div>); 

test('renders ArticleSection with correct articles', () => {
  render(<ArticleSection />);

  // Check if section title exists
  expect(screen.getByText('News')).toBeInTheDocument();

  // Check if the mocked articles are rendered
  const articles = screen.getAllByText('Mocked Article');
  expect(articles).toHaveLength(2);  
});
