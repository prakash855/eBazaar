import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <section className="auth_container flex">
      <div className="auth shadow flex">
        <div className="content_subheading_heading auth_head">Login</div>
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
