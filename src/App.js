import { useState } from "react";
import Dropdown from "./Dropdown";

const App = () => {
  const options = ["Yes", "No", "Probably Not"];
  return (
    <div className="container">
      <h1>Should you use a dropdown?</h1>

      <Dropdown options={options} />
    </div>
  );
};

export default App;
