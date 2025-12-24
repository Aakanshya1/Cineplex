import React, { useEffect } from 'react'
import home1 from '../assets/images/home1.jpg'
import Button from '../components/Button'
import {Link,useNavigate} from 'react-router-dom'
import {IoMdMail} from 'react-icons/io'
import {IoMdEye,IoMdEyeOff} from 'react-icons/io'
function Login() {
  const [loginInfo, setLoginInfo] = React.useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = React.useState({});
  const [isVisible, setIsVisible] = React.useState(false);
  const navigate = useNavigate();


  const handleChange = (e)=>{
    const {name, value}= e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value
    })
     setErrors({
    ...errors,
    [name]:""
  })
  }
const handlepassword = () => {
  setIsVisible(prev => !prev);
};

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const{email,password}=loginInfo;
       console.log("Login Info:", loginInfo); 
    let newErrors ={};

   if(!email){
    newErrors.email = "Email is required";
   }
    if(!password){
    newErrors.password = "Password is required";
   }
   console.log("API URL:", import.meta.env.VITE_API_URL);

   try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginInfo)
    });

    const result = await response.json();
    console.log("Login response:", result);

    if (!response.ok || !result.success) {
      setErrors({ general: result.message || "Login failed" });
      return;
    }

    const { jwtToken, name, role } = result;

    localStorage.setItem("jwtToken", jwtToken);
    localStorage.setItem("firstName", name);
    localStorage.setItem("role", role);
setTimeout(()=>{
 if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/home");
    }
    },1000)
   

  } catch (error) {
    console.error("Login error:", error);
    setErrors({ general: "Something went wrong" });
  }
};


  return (
    <>
    <section className='relative w-full h-screen'>
            <img src={home1} alt=""  className='w-full h-full absolute'/>
            <div className='absolute inset-0 bg-black/50'></div>

            <div className=' absolute inset-0 text-white  bg-black/70 flex flex-col justify-center md:not-first w-[50%] md:w-[30%] h-fit mx-auto gap-5 p-10  my-auto '>
                <div>
                <span className='relative z-10 text-white text-3xl font-extrabold  '> <span className='text-red-600 '>C</span>INEPLEX</span>

                <p className='text-2xl font-bold'>Login</p>
                </div>

            <form action="" method="post" className='text-left gap-5 flex flex-col' onSubmit={handleLogin}>
              <div className='flex relative'>
                <IoMdMail className="text-grey mt-2 absolute z-10 right-2" />
                <input type="text" 
                className='bg-[#333333] rounded-md p-2 text-xs  w-full' 
                placeholder='login@gmail.com'
                id='email'
                name='email'
                value={loginInfo.email}
                onChange={handleChange}
                />
              </div>
           
           {errors.email &&
           (<p className='text-red-500 text-xs'>{errors.email}</p>)
           }
           <div className='flex relative'>
                <button
                  className="text-grey mt-3 absolute z-10 right-2"
                  type="button"
                 
                  onClick={handlepassword}
                 >
                 {isVisible ? <IoMdEye /> : <IoMdEyeOff />}
                </button>
          <input
          type={isVisible ? "text" : "password"}
          placeholder="password"
          className='bg-[#333333] rounded-md p-2 text-xs  w-full' 
          id="password"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
          />

           </div>
           {errors.password &&
           (<p className='text-red-500 text-xs'>{errors.password}</p>)
           }
           <Button text="Login" isprimary type="submit"/>
            {errors.general && (
    <p className="text-red-400 text-xs text-center">{errors.general}</p>
  )}
            </form>
            <p className='text-xs text-right'>Don't have an account? <Link to="/signup">Signup</Link></p>
            </div>




    </section>
    </>
  )
}

export default Login