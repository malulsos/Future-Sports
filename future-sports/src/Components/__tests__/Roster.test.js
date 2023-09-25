import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Roster from '../Aside/Roster.js';  

describe('Roster', () => {
    let getByText, getByAltText, queryByAltText, getAllByAltText, queryAllByAltText, getByTestId, container;

    beforeEach(() => {
      const renderResults = render(<Roster />);
      getByText = renderResults.getByText;
      getByAltText = renderResults.getByAltText;
      queryByAltText = renderResults.queryByAltText;
      getAllByAltText = renderResults.getAllByAltText; 
      queryAllByAltText = renderResults.queryAllByAltText;
      getByTestId = renderResults.getByTestId;
      container = renderResults.container; 
    });
    
    it('opens and closes the lightbox when image is clicked', () => {
        // Find and click on the team image to open the lightbox
        const teamImage = getByAltText('Team');
        fireEvent.click(teamImage);
      
        // Lightbox should open, so there should now be 2 images with "Team" alt text
        const teamImages = getAllByAltText('Team');
        expect(teamImages.length).toBe(2);
      
        // Find and click on the close button 
        const closeButton = container.querySelector('.lightbox-close'); 
      
        fireEvent.click(closeButton);
      
        // Lightbox should close, so only one image with "Team" should be present
        const remainingTeamImages = queryAllByAltText('Team');
        expect(remainingTeamImages.length).toBe(1);
    });
});
