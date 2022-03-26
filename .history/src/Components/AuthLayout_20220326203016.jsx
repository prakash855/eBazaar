import React from "react";

const AuthLayout = ({ text, children }) => {
  return (
    <section className="auth_container flex">
      <div className="auth shadow flex">
        <div className="content_subheading_heading auth_head">{text}kwdc</div>
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
