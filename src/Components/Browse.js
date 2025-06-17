import useFetchNowPlayingMovies from "../customHooks/useFetchMovies"
import {useSelector} from "react-redux"
import Header from "./Header"
import MainMovieContainer from "./MainMovieContainer"
import usePoularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import usePopularShows from "../customHooks/usePopularShow";
import SecondaryMovieContainer from "./SecondaryMovieContainer"
import GptSearchContainer from "./GptSearchContainer"

function Browse() {
    useFetchNowPlayingMovies();
    usePoularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    usePopularShows()
    const nowPlaying  = useSelector((store) => store.movies);
    const showGptButton = useSelector((store) => store.gpt?.showGpt)
    console.log(showGptButton, "nowww")
    
    return (<div>
        <Header />
        {showGptButton ? <GptSearchContainer/> :
        <>
        <MainMovieContainer/>
        <SecondaryMovieContainer/>
        </>
        }
        
        {/* {
            Movies Container
                - Title, Description
            Secondary Container
                - n movies list
                -n movies cards
        } */}
    </div>)
}
export default Browse