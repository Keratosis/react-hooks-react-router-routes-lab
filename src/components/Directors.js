import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}
  <h1>Directors Page</h1>
{directors.map(d=>(

<li key={d.name}> {d.name} {d.movies}</li>

))}
</div>;
  
}

export default Directors;
