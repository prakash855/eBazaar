import React from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Signup = () => {
  return (
    <section className="auth_container flex">
      <div className="auth shadow flex">
        <div className="content_subheading_heading auth_head">Signup</div>
        <div>
          <label for="email">
            <b>Email address:</b>
          </label>
          <div className="nav_input auth_input">
            <Input id="email" type="text" placeholder="prakash@gmail.com" />
          </div>
        </div>

        <div>
          <label for="password">
            <b>password:</b>
          </label>
          <div className="nav_input auth_input">
            <Input id="password" type="password" placeholder="******" />
          </div>
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
        <button className="btn auth_btn primary_btn auth_submit">
          <a href="../Login/Login.html">Create New Account</a>
        </button>
        <Button text="Create New Account" />
        <button className="btn auth_btn btn_link dark_link">
          <a href="../Login/Login.html">Already have an account ></a>
        </button>
      </div>
    </section>
  );
};

export default Signup;
