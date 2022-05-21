import React, { useState } from "react";
import Input from "../../Components/Input";
import { SubmitButton, TextButton } from "../../Components/Button";
import AuthLayout from "../../Components/AuthLayout";
import { useNavigate } from "react-router-dom";
import { regex } from "../../Utilities/regex";
import axios from "axios";
import { SIGNUP_API } from "../../Constants";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";

const Signup = () => {
  useDocumentTitle("Signup")
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const submitHandler = () => {
    const user = formData;
    if (regex.test(formData.email)) {
      try {
        (async () => {
          const {
            data: { encodedToken },
          } = await axios.post(SIGNUP_API, user);
          localStorage.setItem("signedUp_token", encodedToken);
          console.log(encodedToken);

          if (encodedToken) navigate("/login");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          });
        })();
      } catch (error) {
        console.log(error);
        const {
          data: { errors },
        } = error.message;
        setError(...errors);
      }
    } else if (!regex.test(formData.email)) {
      setError("Email is not valid");
    } else {
      setError("");
    }
  };

  return (
    <AuthLayout text="Signup">
      <Input
        onChange={(e) => {
          setFormData((prevState) => ({
            ...prevState,
            firstName: e.target.value,
          }));
        }}
        value={formData.firstName}
        type="text"
        placeholder="Enter First Name"
        text="First Name"
      />

      <Input
        onChange={(e) => {
          setFormData((prevState) => ({
            ...prevState,
            lastName: e.target.value,
          }));
        }}
        value={formData.lastName}
        type="text"
        placeholder="Last Name"
        text="Last Name"
      />

      <Input
        onChange={(e) => {
          setFormData((prevState) => ({
            ...prevState,
            email: e.target.value,
          }));
        }}
        value={formData.email}
        type="email"
        placeholder="prakash@gmail.com"
        text="Email address:"
      />

      <Input
        onChange={(e) => {
          setFormData((prevState) => ({
            ...prevState,
            password: e.target.value,
          }));
        }}
        value={formData.password}
        type="password"
        placeholder="******"
        text="password:"
      />

      <div className="auth_text flex">
        <div>
          <input
            checked
            onChange={() => setChecked((checked) => !checked)}
            type="checkbox"
            name="remember2"
          />{" "}
          &nbsp;
          <p>{error}</p>
          <label>
            <b>I accept all terms & conditions</b>
          </label>
        </div>
      </div>
      <SubmitButton
        onClick={(e) => {
          e.preventDefault();
          submitHandler();
        }}
        text="Create New Account"
      />
      <TextButton
        redirects={() => navigate("/login")}
        text="Already have an account >"
      />
    </AuthLayout>
  );
};

export { Signup };
