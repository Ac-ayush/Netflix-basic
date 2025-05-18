import axios from "axios";
import { useDispatch } from "react-redux";
import { UPCOMING_MOVIES_API_END_POINT, options } from "../Utilities/constants";
import { setUpcomingMovies } from "../Redux/movieSlice";

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();

    try {
        const response = await axios.get(UPCOMING_MOVIES_API_END_POINT, options);
        dispatch(setUpcomingMovies(response.data));
        // console.log("useUpcomingMovies", response);
    } catch (error) {
        console.log(" Erro in useUpcomingMovies", error);
    }
}


export default useUpcomingMovies;