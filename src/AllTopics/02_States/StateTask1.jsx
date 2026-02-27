//? initaly the list should be hidden on toggle it should display the list
//? coditional rendering

import { useState } from "react";

const StateTask1 = () => {
  const [list, setList] = useState("Hide");
  const [list2, setList2] = useState("Hide");

  const toggle = () => {
    setList(!list);
  };


  const toggle2 = () => {
    setList2(!list2);
  };
  return (
    <section>
      <h3>Native Languages</h3>
      <button onClick={toggle}>{list ? "Show" : "Hide"}</button>
      {list && (  // conditional rendering
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
        </ul>
      )}

      <h3>Web Dev</h3>
      <button onClick={toggle2}>{list2 ? "Show" : "Hide"}</button>
      {list2 && (
        <ol>
          <li>React</li>
          <li>Next</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ol>
      )}
    </section>
  );
};

export default StateTask1;
