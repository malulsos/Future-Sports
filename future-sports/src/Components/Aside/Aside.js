import React from "react";
import Weather from './Weather';
import Calendar from './Calendar';
import Contact from './ContactUs';

const Aside = () => {
  return (
    <aside>
      <Weather />
      <Calendar />
      <Contact />
    </aside>
  );
};

export default Aside;