import axios from "axios";
import { useDispatch } from "react-redux";
import { NOW_PLAYING_MOVIES_API_END_POINT, options } from "../Utilities/constants";
import { setNowPlayingMovies } from "../Redux/movieSlice";

const useGetNowPLayingMovies = async () => {
    const dispatch = useDispatch();

    try {
        const response = await axios.get(NOW_PLAYING_MOVIES_API_END_POINT, options);
        dispatch(setNowPlayingMovies(response.data));
        // console.log("getNowPLayingMovies", response);
    } catch (error) {
        console.log(" Erro in getNowPLayingMovies", error);
    }
}


export default useGetNowPLayingMovies;