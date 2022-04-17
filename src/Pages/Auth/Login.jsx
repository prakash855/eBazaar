import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout";
import { LinkButton, SubmitButton, TextButton } from "../../Components/Button";
import Input from "../../Components/Input";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  return (
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
      <TextButton redirects={() => navigate("/signup")} text="Create New Account >" />
    </AuthLayout>
  );
};

export {Login};
