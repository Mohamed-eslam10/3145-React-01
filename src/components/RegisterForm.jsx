import { useState } from "react";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");

  const handleFirstNameChange = function (e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);

    setFirstName(e.target.value);
  };

  return (
    <div className="registration-form">
      <h2>Create an Account</h2>
      <p>Welcome {firstName}</p>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            onChange={handleFirstNameChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
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

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>

        <div>
            { 'Passwords do not Match OR Passwords Match'}
        </div>

        <div className="form-group checkbox-group">
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
        </div>

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
}
