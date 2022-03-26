import React from "react";

const Input = ({ id, type, placeholder, text, labelFor }) => {
  return (
    <div>
      <label for={labelFor}>
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
