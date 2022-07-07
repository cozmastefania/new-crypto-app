import React, { useState, useCallback } from "react";
import Input from "./Input";

const inputField = ({ label, type, value, onChange }) => (
  <label>
    {label}
    <Input type={type} value={value} onChange={onChange} />
  </label>
);

const AuthPage = ({ onSubmit }) => {
  const [logIn, setLogIn] = useState({ email: "test@test.com", password: "test" });

  const { email, password } = logIn;
  const inputChangeHandler = useCallback((key, value) => {
    setLogIn({ ...logIn, [key]: value });
  }, []);
  const onSubmitHandler = useCallback(
    (event) => {
      event.preventDefault();
      onSubmit(logIn);
    },
    [logIn, onSubmit]
  );

  return (
    <div>
    <form style={{ display: "grid" }} onSubmit={onSubmitHandler}>
      <inputField
        type="email"
        label="Enter your email"
        value={email}
        onChange={inputChangeHandler("email")}
      />
      <inputField
        type="password"
        label="Enter your password"
        value={password}
        onChange={inputChangeHandler("password")}
      />
      </form>
      <button className="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none">
        Submit
      </button>
      </div>
  );
};

export default AuthPage;
