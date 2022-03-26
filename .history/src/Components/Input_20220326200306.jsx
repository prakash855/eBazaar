import React from "react";

const Input = ({ id, type, placeholder }) => {
  return (
    // <div className="nav_input auth_input">
      <input
        className="input input_wide shadow"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    // </div>
  );
};

export default Input;
