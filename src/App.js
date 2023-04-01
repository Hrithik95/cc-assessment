import React, {useState} from "react";
import {initialField} from "./data";
import FieldList from "./FieldList";

import "./App.css";

const App = () => {
  const [fields, setFields] = useState([initialField]);

  const handleSave =()=> {
    console.log(fields);
  }

  return (
    <div className="data-form">
      <FieldList fields={fields} onChange={setFields} onDelete={setFields} />
      
      <button className="save-data" onClick={handleSave}>Save</button>
    </div>
  );
};

export default App;