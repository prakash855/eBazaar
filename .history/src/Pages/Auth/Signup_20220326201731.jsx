import React from "react";
import Input from "../../Components/Input";
import { SubmitButton, TextButton } from "../../Components/Button";

const Signup = () => {
  return (
    <section className="auth_container flex">
      <div className="auth shadow flex">
        <div className="content_subheading_heading auth_head">Signup</div>
        <Input
          id="email"
          type="text"
          placeholder="prakash@gmail.com"
          text="Email address:"
          labelFor="email"
        />

        <div>
          <label for="password">
            <b>password:</b>
          </label>
          <Input id="password" type="password" placeholder="******" text="Email address:"
          labelFor="email" />
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
              <b>I accept all terms & conditions</b>
            </label>
          </div>
        </div>
        <SubmitButton text="Create New Account" />
        <TextButton text="Already have an account >" />
      </div>
    </section>
  );
};

export default Signup;
