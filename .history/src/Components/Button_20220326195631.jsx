import React from "react";

const SubmitButton = ({ text }) => {
  return (
    <button className="btn auth_btn primary_btn auth_submit">
      <a href="../Login/Login.html">{text}</a>
    </button>
  );
};

const TextButton = ({ text }) => (
  <button className="btn auth_btn btn_link dark_link">
    <a href="../Login/Login.html">Already have an account ></a>
  </button>
);

export { SubmitButton, TextButton };
