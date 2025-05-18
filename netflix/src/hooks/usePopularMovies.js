import axios from "axios";
import { useDispatch } from "react-redux";
import { POPULAR_MOVIES_API_END_POINT, options } from "../Utilities/constants";
import { setPopularMovies } from "../Redux/movieSlice";

const usePopularMovies = async () => {
    const dispatch = useDispatch();

    try {
        const response = await axios.get(POPULAR_MOVIES_API_END_POINT, options);
        dispatch(setPopularMovies(response.data));
        // console.log("usePopularMovies", response);
    } catch (error) {
        console.log(" Erro in usePopularMovies", error);
    }
}


export default usePopularMovies;