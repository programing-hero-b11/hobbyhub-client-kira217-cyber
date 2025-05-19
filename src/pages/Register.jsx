import { GoogleAuthProvider } from "firebase/auth";
import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";


const Register = () => {
    const userData = use(AuthContext)
    const {googleLogin,register,updateUser,user,setUser} = userData;
    const location = useLocation();
    const navigate = useNavigate();


    const [showPassword, setShowPassword] = useState(false);
    const [errorMassage, setErrorMassage] = useState(" ");
  

 

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;

    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    // Reset korta hobe noila out put a message dekhabe

    setErrorMassage(" ");

    if (!terms) {
      setErrorMassage("Please Accept Our Terms and Condition");
      return;
    }

    // Password Validate korar jonno kisu terms

    const passwordRegExp = /(?=.*\d)/;

    const passwordRegExp2 = /(?=.*[a-z])/;

    const passwordRegExp3 = /(?=.*[A-Z])/;

    const passwordRegExp4 = /.{6,}/;

    if (passwordRegExp.test(password) === false) {
      setErrorMassage("Password Must Have One Digit Number");
      return;
    } else if (passwordRegExp2.test(password) === false) {
      setErrorMassage("Password Must Have One Lowercase Letter");
      return;
    } else if (passwordRegExp3.test(password) === false) {
      setErrorMassage("Password Must Have One Uppercase Letter");
      return;
    } else if (passwordRegExp4.test(password) === false) {
      setErrorMassage("Password Must Have 6 Character");
      return;
    }

    register(email, password)
      .then((result) => {
        console.log(result);
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser((prevUser) => {
              return { ...prevUser, displayName: name, photoURL: photoURL };
            });
            navigate(`${location.state ? location.state : "/"}`);
            toast.success("Register Successfully")  
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        setErrorMassage(error.message);
      });
  };


   const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    googleLogin(provider)
      .then((result) => {
        toast.success("Login Successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  return (
    <>
      <h1 className="text-5xl text-center mb-6 mt-10 font-bold">
        Register Page
      </h1>
      <div className="flex justify-center mt-24">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Register now!</h1>
            <form onSubmit={handleRegister}  className="fieldset">
              {/* Name */}
              <label className="label text-xl">Name</label>
              <input
                required
                name="name"
                type="text"
                className="input"
                placeholder="Your Name"
              />
              {/* photoURL */}
              <label className="label text-xl">Photo URL</label>
              <input
                required
                name="photoURL"
                type="text"
                className="input"
                placeholder="Photo URL"
              />
              {/* email */}
              <label className="label text-xl">Email</label>
              <input
                required
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* password */}
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
              <label className="label mt-2">
                <input type="checkbox" name="terms" className="checkbox" />
                Accept Terms and Condition
              </label>
              <button type="submit" className="btn btn-neutral mt-6 text-xl">
                Register
              </button>
            </form>
            <button onClick={handleGoogleLogin} className="btn mt-2 bg-white text-black border-[#e5e5e5]">
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
              Already Have an Account{" "}
              <span className="text-blue-500 underline">
                <Link to="/login">Login</Link>
              </span>
            </p>
            {errorMassage && <p className="text-red-500">{errorMassage}</p>}

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

export default Register;