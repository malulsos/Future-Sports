import React from 'react';

const Calendar = () => {
  return (
    <div className="calendar">
      <a id="calendar"></a>
      <h2>Calendar</h2>
    <iframe
        src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%239E69AF&ctz=Australia%2FSydney&showNav=0&showTitle=0&showTabs=1&showCalendars=0&title=Future%20Sports&src=NmRlMzZmNTU4YmE3ODMwZTAwZDU0Y2QzYzYwMzE4NmQzMjMwY2RmMzM0NjQ1NDBiMjZmYzZlYjJjNTA3ZjY0ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457"
        width="300"
        height="300">
    </iframe>
    </div>
  );
};

export default Calendar;
