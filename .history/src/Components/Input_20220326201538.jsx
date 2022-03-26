import React from "react";

const Input = ({ id, type, placeholder, text }) => {
  return (
    <div>
      <label for="email">
        <b>{text}</b>
      </label>
      <div className="nav_input auth_input">
        <input
          className="input input_wide shadow"
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
