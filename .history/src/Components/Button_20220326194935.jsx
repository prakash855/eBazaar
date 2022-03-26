import React from "react";

const Button = ({ text }) => {
  return (
    <button className="btn auth_btn primary_btn auth_submit">
      <a href="../Login/Login.html">{text}</a>
    </button>
  );
};

export default Button;
