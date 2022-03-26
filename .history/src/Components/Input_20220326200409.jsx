import React from "react";

const Input = ({ id, type, placeholder }) => {
  return (
    <input
      className="input input_wide shadow"
      id={id}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
