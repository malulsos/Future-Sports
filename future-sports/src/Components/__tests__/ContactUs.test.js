import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactUs from '../Main/ContactUs';
describe('ContactUs', () => {
  it('renders the Contact Us section correctly', () => {
    const { getByText, container } = render(<ContactUs />);

    // Check if the heading is rendered
    expect(getByText('Contact Us')).toBeInTheDocument();

    // Check if the iframe is rendered with the correct attributes
    const iframe = container.querySelector('iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'https://docs.google.com/forms/d/e/1FAIpQLSdGuNZuUUzlG76fe9noS-ACo2-adYtShnO91zQ5OM8yvcVZiQ/viewform?embedded=true');
    expect(iframe).toHaveAttribute('width', 'auto');
    expect(iframe).toHaveAttribute('height', '400');
  });
});
