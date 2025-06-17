import { useSelector } from "react-redux"
import MoviesList from "./MoviesList";

function SecondaryMovieContainer() {
    const movies = useSelector(store => store.movies);
    if (!movies) return
    console.log(movies, "popo")
    return (
        movies.nowPlayingMovies && (<div className="bg-black">
            <div className="-mt-52 relative z-20 pl-6">
                <MoviesList title="Now Playing" movies={movies.nowPlayingMovies} />
                <MoviesList title="Top Rated" movies={movies.topRatedMovies} />
                <MoviesList title="Up Coming" movies={movies.upComingMovies} />
                <MoviesList title="Popular Shows" movies={movies.popularShows} />
                <MoviesList title="Most Popular" movies={movies.popularMovies} />
            </div>

        </div>)
    )
}
export default SecondaryMovieContainer