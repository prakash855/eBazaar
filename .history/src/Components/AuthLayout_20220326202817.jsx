import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <section className="auth_container flex">
      <div className="content_subheading_heading auth_head">Login</div>
      <div className="auth shadow flex">{children}</div>
    </section>
  );
};

export default AuthLayout;
