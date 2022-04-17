import React from "react";

const Input = ({ id, type, placeholder, text }) => {
  return (
    <div className="left_aligned">
      <label>
        <b>{text}</b>
      </label>
      <div className="nav_input auth_input">
        <input
          className="input input_wide"
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
