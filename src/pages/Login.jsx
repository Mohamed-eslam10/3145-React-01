import { useState } from "react";

export default function Login() {
  const [errors, setErrors] = useState([]);

  return (
    <div className="registration-form">
      <h2 className="text-center py-3 font-black text-2xl">
        Login to Your Account
      </h2>
      <p>Welcome, Please Login</p>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Your Username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
          />
        </div>

        <div>{errors}</div>

        <div className="form-group checkbox-group">
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">Remember Me</label>
        </div>

        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}
