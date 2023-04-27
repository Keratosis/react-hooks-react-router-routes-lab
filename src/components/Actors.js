import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
  <h1>Actors Page</h1>
  {actors.map(d => (
    <li key={d.name}>{d.name}{d.movies}</li>
  ))}
  </div>;
}

export default Actors;
