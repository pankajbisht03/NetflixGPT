import { useSelector } from "react-redux";
import MovieTitle from "./MovieTitle";
import MovieBackGround from "./MovieBackGround"

function MainMovieContainer () {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return
    const oneMovie = movies[0]
    const {original_title, overview, id} = oneMovie
    console.log(oneMovie, "oneMovie")
    return (
        <div>
            <MovieTitle title = {original_title} overview={overview}/>
            <MovieBackGround movieId = {id}/>
            {/* {
                MovieTitle Component
                MovieBackGround Component
            } */}
        </div>
    )
}
export default MainMovieContainer