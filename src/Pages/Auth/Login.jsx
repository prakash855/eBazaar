import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout";
import { LinkButton, SubmitButton, TextButton } from "../../Components/Button";
import Input from "../../Components/Input";
import { useAuth } from "../../StateManagement/Contexts/AuthContext/AuthContext";
import { regex } from "../../Utilities/regex";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(true);
  const { setToken, setUser } = useAuth();

  const testCredentials = {
    email: "prakash@gmail.com",
    password: "pra123",
  };

  const logInHandler = () => {
    if (regex.test(formData.email)) {
      (async () => {
        try {
          const {
            status,
            data: { foundUser, encodedToken },
          } = await axios.post("/api/auth/login", formData);

          status === 200 ? loggedMessage(foundUser) : null;

          localStorage.setItem("token", encodedToken);
          localStorage.getItem("user", foundUser);

          setToken(encodedToken);
          setUser(foundUser);

          if (encodedToken) navigate("/products");
        } catch (error) {
          const {
            data: { errors },
          } = error.response;
          setError(...errors);
        }
      })();
    } else if (!regex.test(formData.email)) setError("Invalid Email");
    else setError("");
  };

  return (
    <AuthLayout text="Login">
      <Input
        onChange={(e) =>
          setFormData((prevState) => ({ ...prevState, email: e.target.value }))
        }
        id="email"
        type="text"
        placeholder="prakash@gmail.com"
        text="Email address:"
        labelFor="email"
        value={formData.email}
      />

      <Input
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            password: e.target.value,
          }))
        }
        id="password"
        type="password"
        placeholder="******"
        text="password:"
        labelFor="password"
        value={formData.password}
      />

      {/* Error on wrong credentials */}
      <div className="small_text error_msg">{error.split(".")[0]}</div>

      <div className="auth_text flex">
        <label>
          <input
            type="checkbox"
            id="remember2"
            name="remember2"
            checked={checked}
            onChange={() => setChecked((checked) => !checked)}
            required
          />
          Remember me
        </label>

        {/* Can login as a Guest */}

        <span>
          <LinkButton
            onClick={(e) => {
              e.preventDefault();
              setFormData(testCredentials);
            }}
            text="Login as a Guest"
          />
        </span>
      </div>

      {checked && (
        <SubmitButton
          onClick={(e) => {
            e.preventDefault();
            logInHandler();
          }}
          text="Login"
        />
      )}

      {!checked && (
        <SubmitButton
          onClick={(e) => {
            setError("Needs to be checked to proceed!");
          }}
          text="Login"
        />
      )}

      <TextButton
        redirects={() => navigate("/signup")}
        text="Create New Account >"
      />
    </AuthLayout>
  );
};

export { Login };
