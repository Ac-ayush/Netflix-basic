import axios from "axios";
import { useDispatch } from "react-redux";
import { TOP_RATED_MOVIES_API_END_POINT, options } from "../Utilities/constants";
import { setTopRatedMovies } from "../Redux/movieSlice";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();

    try {
        const response = await axios.get(TOP_RATED_MOVIES_API_END_POINT, options);
        dispatch(setTopRatedMovies(response.data));
        // console.log("useTopRatedMovies", response);
    } catch (error) {
        console.log(" Erro in useTopRatedMovies", error);
    }
}


export default useTopRatedMovies;