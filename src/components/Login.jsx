// rafce -- create a boiler plate code
import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="background"
      />
      <form className="w-3/12 absolute p-12 bg-black">
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button className="p-4 m-4 bg-red-800">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
