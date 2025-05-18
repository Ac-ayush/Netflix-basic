import { useSelector } from "react-redux";
import VideoBackround from "./Video/VideoBackground";
import VideoTitle from "./Video/VideoTitle";

const MainVideoContainer = () => {
    //to create main video movie dynamic 
    const nowPlayingMovies = useSelector((state)=>state.movies?.now_playing_movies);

    if(!nowPlayingMovies || !nowPlayingMovies?.results) return null;
    //picking random movie from now playing
    const movie = nowPlayingMovies?.results[0];
    const movieTitle = movie.original_title;
    const movieOverview = movie.overview;
    const movieId = movie.id;

    return (
        <div>
            {/* <h1>MainVideoContainer</h1> */}
            <VideoTitle title={movieTitle} overview={movieOverview}/>
            <VideoBackround movieId={movieId}/>
        </div>
    )
}

export default MainVideoContainer;