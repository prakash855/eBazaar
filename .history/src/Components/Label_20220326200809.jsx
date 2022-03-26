import React from "react";

const Label = ({ text }) => {
  return (
    <div>
      <label for="email">
        <b>{text}</b>
      </label>
    </div>
  );
};

export default Label;
