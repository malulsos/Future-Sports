// Import necessary libraries
import React from 'react';

// Define the Calendar component
const Calendar = () => {
  // Render the Calendar component
  return (
    // Render JSX for Calendar and embed the calendar
    <section className="calendar">
        <a id="calendar"></a>
        <h2>Calendar</h2>
    <iframe
        src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%239E69AF&ctz=Australia%2FSydney&showNav=0&showTitle=0&showTabs=1&showCalendars=0&title=Future%20Sports&src=NmRlMzZmNTU4YmE3ODMwZTAwZDU0Y2QzYzYwMzE4NmQzMjMwY2RmMzM0NjQ1NDBiMjZmYzZlYjJjNTA3ZjY0ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457"
        width="auto"
        height="400px"
        title="Calendar">
    </iframe>
    </section>
  );
};

// Export the Calendar component
export default Calendar;
