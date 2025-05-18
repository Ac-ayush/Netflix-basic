import { useState } from "react";
import axios from "axios";
import { USER_AUTH_API_END_POINT } from "../../Utilities/constants";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading } from "../../Redux/userSlice";
import Header from "../Header/Header";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [isExistingUser, setIsExistingUser] = useState(false); //isExisting : show Login page else Sign up
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state)=> state.app.isLoading);
  
  
  const handleLoginClick = () => {
    setIsExistingUser((prev) => !prev);
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true));   //when we clicking on form submit button
    

    if (isExistingUser) { //login

      try {
        const userData = { email, password };
        const response = await axios.post(
          `${USER_AUTH_API_END_POINT}/login`,
          userData,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (response.data.success) {
          navigate('/browse');
          toast.success(response.data.message);
        }
        dispatch(setUser(response.data.user));
        console.log(" =>Login res: ", response);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(" Error while login :: ", error);
      } finally {
        dispatch(setLoading(false));
      }


    } else {//register

      try {
        const userData = { fullName, email, password };
        const response = await axios.post(
          `${USER_AUTH_API_END_POINT}/register`,
          userData,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (response.data.success) {
          setIsExistingUser(true);  //now get user to login page
          toast.success(response.data.message);
        }
        console.log(" => Signup res: ", response);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(" Error while Sign-up :: ", error);
      } finally {
        dispatch(setLoading(false));
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header/>
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh] bg-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="banner"
        />
      </div>

      <form
        onSubmit={handleLoginFormSubmit}
        className="flex flex-col w-3/12 p-12 my-60 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90 rounded-md"
      >
        <h1 className="text-3xl text-white mb-5 font-bold">
          {isExistingUser ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col">
          {!isExistingUser && (
            <input
              required
              type="text"
              placeholder="Full Name"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}
          <input
            required
            type="email"
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium hover:cursor-pointer"
          >
            {isLoading ? 'loading...' : (isExistingUser ? "Login" : "Sign-up")}
          </button>

          <p className="text-white mt-2">
            {isExistingUser ? "New to Netflix?" : "Already have an account?"}

            <span
              className="text-blue-700 ml-1 hover:cursor-pointer"
              onClick={handleLoginClick}
            >
              {isExistingUser ? "Sign-up" : "Login"}{" "}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
