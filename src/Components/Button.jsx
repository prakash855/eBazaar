import React from "react";

const SubmitButton = ({ text }) => (
  <button className="btn auth_btn primary_btn auth_submit">
    <a href="../Login/Login.html">{text}</a>
  </button>
);

const TextButton = ({ text }) => (
  <button className="btn auth_btn btn_link dark_link">
    <a href="../Login/Login.html">{text}</a>
  </button>
);

const LinkButton = ({ text }) => (
  <button className="btn auth_btn btn_link primary_link">{text}</button>
);

export { SubmitButton, TextButton, LinkButton };
