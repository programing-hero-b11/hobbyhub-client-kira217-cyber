import { GoogleAuthProvider } from "firebase/auth";
import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { googleLogin, register, updateUser, user, setUser } = React.useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    setErrorMessage("");

    if (!terms) {
      setErrorMessage("Please accept our Terms and Conditions");
      return;
    }

    const passwordRules = [
      { regex: /(?=.*\d)/, msg: "Password must have at least one digit" },
      { regex: /(?=.*[a-z])/, msg: "Password must have one lowercase letter" },
      { regex: /(?=.*[A-Z])/, msg: "Password must have one uppercase letter" },
      { regex: /.{6,}/, msg: "Password must be at least 6 characters" },
    ];

    for (let rule of passwordRules) {
      if (!rule.regex.test(password)) {
        setErrorMessage(rule.msg);
        return;
      }
    }

    register(email, password)
      .then((result) => {
        updateUser({ displayName: name, photoURL }).then(() => {
          setUser((prevUser) => ({
            ...prevUser,
            displayName: name,
            photoURL,
          }));
          navigate(location.state || "/");
          toast.success("Registered Successfully");
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    googleLogin(provider)
      .then(() => {
        toast.success("Login Successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center mt-12 mb-24">
      <div className="card w-full max-w-sm bg-base-100 text-base-content shadow-2xl">
        <div className="card-body rai">
          <h1 className="text-3xl text-sky-500 text-center font-bold">Register now!</h1>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="label text-xl">Name</label>
              <input
                required
                name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="label text-xl">Photo URL</label>
              <input
                required
                name="photoURL"
                type="text"
                className="input input-bordered w-full"
                placeholder="Photo URL"
              />
            </div>

            <div>
              <label className="label text-xl">Email</label>
              <input
                required
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
              />
            </div>

            <div className="relative">
              <label className="label text-xl">Password</label>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full pr-10"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-sm rai absolute top-9 right-2"
              >
                {showPassword ? <FaEyeSlash className="text-sky-500" /> : <FaEye className="text-sky-500"  />}
              </button>
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <input type="checkbox" name="terms" className="checkbox checkbox-sm" />
              <span className="label-text">Accept Terms and Conditions</span>
            </div>

            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

            <button type="submit" className="btn btn-neutral w-full text-xl mt-4">
              Register
            </button>
          </form>

          <button
            onClick={handleGoogleLogin}
            className="btn w-full mt-4 bg-white text-black border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mr-2"
            >
              <path fill="#fff" d="M0 0h512v512H0z" />
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
              <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
              <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" />
              <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
            </svg>
            Login with Google
          </button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 underline">
               <span className="text-sky-500">Login</span>
            </Link>
          </p>

          <div className="mt-5">
            <Link to="/">
              <button className="btn w-full bg-sky-500 text-white">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
