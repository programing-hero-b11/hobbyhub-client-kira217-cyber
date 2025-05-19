import { GoogleAuthProvider } from "firebase/auth";
import React, { use, useRef, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {

    const { user, logIn,googleLogin } = use(AuthContext);

    const emailRef = useRef();

     const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate();




  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate('/');
        toast.success("Login Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    googleLogin(auth, provider)
      .then((result) => {
        toast.success("Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <h1 className="text-5xl text-center mb-6 mt-8 font-bold">Login Page</h1>
      <div className="flex justify-center mt-24">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label text-xl">Email</label>
              <input
                ref={emailRef}
                required
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <div className="relative">
                <label className="label mb-1 text-xl">Password</label>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute top-10 right-6"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="mt-2">
                <a
                  className="link link-hover text-sm font-bold"
                >
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="btn btn-neutral mt-6 text-xl">
                Login
              </button>
            </form>
            <button
              onClick={handleGoogleLogin}
              className="btn mt-2 bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p>
              You are New User So Please!{" "}
              <span className="text-blue-500 underline">
                <Link to="/register">Register Now</Link>
              </span>
            </p>
            <div className="mt-5">
              <button className="btn">
                <Link to="/">Back to Home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
