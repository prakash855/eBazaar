import React from "react";

const SubmitButton = ({ text, onClick }) => (
  <button onClick={onClick} className="btn auth_btn primary_btn auth_submit">
    {text}
  </button>
);

const TextButton = ({ text, redirects }) => (
  <button onClick={redirects} className="btn auth_btn btn_link dark_link">
    {text}
  </button>
);

const LinkButton = ({ text, onClick }) => (
  <button onClick={onClick} className="btn auth_btn btn_link primary_link">
    {text}
  </button>
);

export { SubmitButton, TextButton, LinkButton };
