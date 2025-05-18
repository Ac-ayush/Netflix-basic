import axios from "axios";
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { USER_AUTH_API_END_POINT } from "../../Utilities/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../Redux/userSlice";
import { setSearchMovieToggle } from "../../Redux/movieSlice";

const Header = () => {
  const userData = useSelector((state)=>state.app.user);
  const isSearchBoxToggle = useSelector((state)=>state.movies.isSearchMovieToggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onLogoutHandler = async () => {
    try {
      
      const response = await axios.get(`${USER_AUTH_API_END_POINT}/logout`);
      if(response.data.success){
        toast.success(response.data.message);
      }
      
      dispatch(setUser(null));
      navigate('/');
    } catch (error) {
      console.log(" => Logout error: ", error);
    }
  };

  const onSearchClickHandler = () => {
    dispatch(setSearchMovieToggle());
  };

  console.log(" ==> user login ", userData);
  return (
    <div className="absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black">
      <img
        className="w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="netflix-logo"
      />
      {userData && (
        <div className="flex items-center">
          <IoIosArrowDropdown size={25} color="white" />
          <h1 className="text-lg font-medium text-white">{userData.fullName}</h1>

          <div className="flex ml-4">
            <button className="bg-red-800 text-white px-4 py-2 cursor-pointer hover:opacity-80" onClick={onLogoutHandler}>Logout</button>
            <button className="bg-red-800 text-white px-4 py-2 ml-2 cursor-pointer hover:opacity-80" onClick={onSearchClickHandler}>
              {isSearchBoxToggle ? "Home" : "Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
