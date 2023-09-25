import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calendar from '../Aside/Calendar';  

describe('Calendar', () => {
    it('renders the calendar section with an iframe', () => {
        const { getByText, container } = render(<Calendar />);
        
        // Verify that the header "Calendar" is rendered
        expect(getByText('Calendar')).toBeInTheDocument();

        // Verify that the iframe is rendered
        const iframe = container.querySelector('iframe');
        expect(iframe).toBeInTheDocument();
        expect(iframe).toHaveAttribute('src', 'https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%239E69AF&ctz=Australia%2FSydney&showNav=0&showTitle=0&showTabs=1&showCalendars=0&title=Future%20Sports&src=NmRlMzZmNTU4YmE3ODMwZTAwZDU0Y2QzYzYwMzE4NmQzMjMwY2RmMzM0NjQ1NDBiMjZmYzZlYjJjNTA3ZjY0ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457');
        expect(iframe).toHaveAttribute('width', 'auto');
        expect(iframe).toHaveAttribute('height', '400px');
    });
});
