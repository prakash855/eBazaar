import React from "react";
import AuthLayout from "../../Components/AuthLayout";
import { LinkButton, SubmitButton, TextButton } from "../../Components/Button";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input";
import "./Auth.css";

const Login = () => {
  return (
    <>
      <Header />
      <AuthLayout text="Login">
        <Input
          id="email"
          type="text"
          placeholder="prakash@gmail.com"
          text="Email address:"
          labelFor="email"
        />
        <Input
          id="password"
          type="password"
          placeholder="******"
          text="password:"
          labelFor="password"
        />

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
            <LinkButton text="Forgot your password?" />
          </span>
        </div>
        <SubmitButton text="Login" />
        <TextButton text="Create New Account >" />
      </AuthLayout>
    </>
  );
};

export default Login;
