// Import necessary libraries
import React from "react";
import Weather from './Weather';
import Calendar from './Calendar';
import Roster from "./Roster";

// Define the Aside component
const Aside = () => {
  // Render the Aside component
  return (
  // Render JSX for Aside
    <aside>
      <Weather />
      <Calendar />
      <Roster />
    </aside>
  );
};

// Export the Aside component
export default Aside;