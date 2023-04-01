import { FieldType } from "./data";
import { useState } from "react";
import "./App.css";

const FieldInput = ({ field, onChange, onDelete }) => {
    const[toggleButton,setToggleButton]=useState(false);

   const handleClick=()=>{
        setToggleButton(!toggleButton);
    }
  const handleNameChange = (event) => {
    onChange({ ...field, name: event.target.value });
  };

  const handleTypeChange = (event) => {
    onChange({ ...field, type: event.target.value, fields: [] });
  };

  const handleDelete = () => {
    handleClick();
     setTimeout(() => {
      onDelete(field);
    }, 90);
  };

  return (
    <div className="field-input">
      <input type="text" value={field.name} onChange={handleNameChange} />
      <select value={field.type} onChange={handleTypeChange} className="field-name-input">
        <option className="field-type-dropdown" value={FieldType.STRING}>String</option>
        <option className="field-type-dropdown" value={FieldType.NUMBER}>Number</option>
        <option className="field-type-dropdown" value={FieldType.BOOLEAN}>Boolean</option>
        <option className="field-type-dropdown" value={FieldType.OBJECT}>Object</option>
      </select>
      <button className="field-delete-button" onClick={handleDelete}>Delete</button>
      <div className="toggle-button">
        <div onClick={handleClick} className="toggle">
            {toggleButton ? <div className="toggle_left"></div> : <div className="toggle_right"></div>}
        </div>
    </div>
    </div>
  );
};

export default FieldInput;

