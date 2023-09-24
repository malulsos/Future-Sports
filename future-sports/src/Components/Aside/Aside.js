import React from "react";
import Weather from './Weather';
import Calendar from './Calendar';
import Roster from "./Roster";

const Aside = () => {
  return (
    <aside>
      <Weather />
      <Calendar />
      <Roster />
    </aside>
  );
};

export default Aside;