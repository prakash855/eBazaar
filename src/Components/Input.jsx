import React from "react";

const Input = ({ id, type, placeholder, text, value, onChange }) => {
  return (
    <div className="left_aligned">
      <label>
        <b>{text}</b>
      </label>
      <div className="nav_input auth_input">
        <input
          onChange={onChange}
          className="input input_wide"
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          required
        />
      </div>
    </div>
  );
};

export default Input;
