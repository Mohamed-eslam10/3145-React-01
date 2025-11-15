import { useState } from "react";
import PasswordValidator from "../components/PasswordValidator";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  console.log("RegisterForm component rendered");

  const register = async () => {
    console.log("register....");

    // Collect form data into JS object
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
      username: username,
      phone: phone,
    };

    // Turn JS Object into JSON String
    const userDataJson = JSON.stringify(userData);

    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: userDataJson,
    });

    console.log('res', res);

    if(res.status === 201) {
      alert('User Registered Successfully')
    } else{
      alert('Plase try again later')
    }
    
    console.log("userData", userData);
    console.log("userDataJson", userDataJson);
    console.log("res", res);
  };

  const ValidateFirstName = () => {
    console.log("ValidateFirstName component rendered");

    const firstNameLen = firstName.length;

    if (firstNameLen === 0)
      return <small className="text-sky-500">Between 3 and 15 letters</small>;
    else if (!/^[A-Z][a-zA-Z -]{2,14}$/.test(firstName))
      return (
        <small className="text-red-500">
          First name should be between 3 and 15 letters
        </small>
      );
    else return <small className="text-green-500">Accepted</small>;
  };

  const ValidateLastName = () => {
    console.log("ValidateLastName component rendered");

    const lastNameLen = lastName.length;

    if (lastNameLen === 0)
      return <small className="text-sky-500">Between 3 and 15 letters</small>;
    else if (!/^[A-Z][a-zA-Z -]{2,14}$/.test(lastName))
      return (
        <small className="text-red-500">
          Last name should be between 3 and 15 letters
        </small>
      );
    else return <small className="text-green-500">Accepted</small>;
  };

  return (
    <div className="registration-form">
      <h2 className="text-center py-3 font-black text-2xl">
        Create an Account
      </h2>
      <p>Welcome {firstName}</p>
      <div className="mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create Your Account
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div className="flex justify-between">
              <ValidateFirstName />
              <small>{firstName.length}/15</small>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="flex justify-between">
              <ValidateLastName />
              <small>{lastName.length}/15</small>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+1 (555) 123-4567"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="flex justify-between">
            {/* <ValidateUsername /> */}
            <small>{firstName.length}/15</small>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>

        <PasswordValidator
          password={password}
          passwordConfirmation={passwordConfirmation}
        />

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-600">
              I agree to the Terms and Conditions
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          onClick={register}
        >
          Create Account
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
