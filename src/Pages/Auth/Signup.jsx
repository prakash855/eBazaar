import React from "react";
import Input from "../../Components/Input";
import { SubmitButton, TextButton } from "../../Components/Button";
import AuthLayout from "../../Components/AuthLayout";

const Signup = () => {
  return (
    <AuthLayout text="Signup">
      <Input
        id="firstName"
        type="text"
        placeholder="Enter First Name"
        text="First Name"
      />
      <Input
        id="lastName"
        type="lastName"
        placeholder="Last Name"
        text="Last Name"
      />
      <Input
        id="email"
        type="text"
        placeholder="prakash@gmail.com"
        text="Email address:"
      />
      <Input
        id="password"
        type="password"
        placeholder="******"
        text="password:"
      />

      <div className="auth_text flex">
        <div>
          <input
            type="checkbox"
            id="remember2"
            name="remember2"
            value="unchecked"
          />
          <label>
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
