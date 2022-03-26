import React from "react";
import Input from "../../Components/Input";
import { SubmitButton, TextButton } from "../../Components/Button";
import AuthLayout from "../../Components/AuthLayout";

const Signup = () => {
  return (
    <AuthLayout>
      <div className="content_subheading_heading auth_head">Signup</div>
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
            <b>I accept all terms & conditions</b>
          </label>
        </div>
      </div>
      <SubmitButton text="Create New Account" />
      <TextButton text="Already have an account >" />
    </AuthLayout>
  );
};

export default Signup;
