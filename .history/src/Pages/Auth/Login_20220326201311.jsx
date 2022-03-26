import React from "react";
import { SubmitButton, TextButton } from "../../Components/Button";
import Input from "../../Components/Input";
import "./Auth.css";

const Login = () => {
  return (
    <section className="auth_container flex">
      <div className="auth shadow flex">
        <div className="content_subheading_heading auth_head">Login</div>
        <div>
          <label for="email">
            <b>Email address:</b>
          </label>

          <Input id="email" type="text" placeholder="prakash@gmail.com" />
        </div>

        <div>
          <label for="password">
            <b>password:</b>
          </label>

          <Input id="password" type="password" placeholder="******" />
        </div>

        <div className="auth_text flex">
          <div>
            <input
              type="checkbox"
              id="remember2"
              name="remember2"
              value="unchecked"
            />
            <label for="remember2">
              <b>Remember me</b>
            </label>
          </div>
          <span>
            <button className="btn auth_btn btn_link primary_link">
              Forgot your password?
            </button>
          </span>
        </div>
        <SubmitButton text="Login" />
        <TextButton text="Create New Account >" />
      </div>
    </section>
  );
};

export default Login;
