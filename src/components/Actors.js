import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>{/*{code here}*/}
  <h1>Actors Page</h1>
  {actors.map(d => (
    <li key={d.name}>{d.name}{d.movies}</li>
  ))}
  </div>;
}

export default Actors;
