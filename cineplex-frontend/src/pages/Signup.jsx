import React from "react";
import Button from "../components/ui/Button";
import home1 from "../assets/images/home1.jpg";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMail, IoMdEye, IoMdEyeOff } from "react-icons/io";

function Signup() {
  const [signupInfo, setSignupInfo] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});
  const [isVisible, setIsVisible] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignupInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const togglePassword = () => {
    setIsVisible((prev) => !prev);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password } = signupInfo;
    let newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signupInfo),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrors({ general: result.message || "Signup failed" });
        return;
      }
      setTimeout(()=>{
 navigate("/login");
      },1000)

     
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({ general: "Something went wrong" });
    }
  };

  return (
    <section className="relative w-full h-screen">
      <img src={home1} alt="" srcSet="" className="absolute w-full h-full" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 mx-auto my-auto flex h-fit w-[50%] flex-col justify-center gap-5 bg-black/70 p-10 text-white md:w-[30%]">
        <div>
          <span className="relative z-10 text-3xl font-extrabold">
            <span className="text-red-600">C</span>INEPLEX
          </span>
          <p className="text-2xl font-bold">Signup</p>
        </div>

        <form
          className="flex flex-col gap-5 text-left"
          onSubmit={handleSignup}
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            value={signupInfo.name}
            onChange={handleChange}
            className="w-full rounded-md bg-[#333333] p-2 text-xs"
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name}</p>
          )}

          {/* Email */}
          <div className="relative flex">
            <IoMdMail className="absolute right-2 mt-2 text-grey" />
            <input
              type="text"
              name="email"
              value={signupInfo.email}
              onChange={handleChange}
              className="w-full rounded-md bg-[#333333] p-2 text-xs"
              placeholder="login@gmail.com"
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}

          {/* Password */}
          <div className="relative flex">
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-2 mt-3 text-grey"
            >
              {isVisible ? <IoMdEye /> : <IoMdEyeOff />}
            </button>

            <input
              type={isVisible ? "text" : "password"}
              name="password"
              value={signupInfo.password}
              onChange={handleChange}
              className="w-full rounded-md bg-[#333333] p-2 text-xs"
              placeholder="password"
            />
          </div>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password}</p>
          )}

          <Button text="Signup" isprimary type="submit" />

          {errors.general && (
            <p className="text-center text-xs text-red-400">
              {errors.general}
            </p>
          )}

          <p className="text-right text-xs">
            Already have an account?{" "}
            <Link to="/login" className="cursor-pointer underline">
              Login
            </Link>
          </p>

          <span className="text-center text-xs">OR</span>

          <span className="rounded-md border p-2 text-center text-xs">
            Signup with Google <FaGoogle className="ml-2 inline" />
          </span>
        </form>
      </div>
    </section>
  );
}

export default Signup;
