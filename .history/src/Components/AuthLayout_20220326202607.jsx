import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <section className="auth_container flex">
      <div className="auth shadow flex">{children}</div>
    </section>
  );
};

export default AuthLayout;
