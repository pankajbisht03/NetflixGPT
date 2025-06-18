import useFetchNowPlayingMovies from "../customHooks/useFetchMovies"
import {useSelector} from "react-redux"
import Header from "./Header"
import MainMovieContainer from "./MainMovieContainer"
import usePoularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import usePopularShows from "../customHooks/usePopularShow";
import SecondaryMovieContainer from "./SecondaryMovieContainer"
import {lazy} from "react";
const OnDemandGptComponent = lazy (() => import("./GptSearchContainer"))

function Browse() {
    useFetchNowPlayingMovies();
    usePoularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    usePopularShows()
    const showGptButton = useSelector((store) => store.gpt?.showGpt)
    
    return (<div>
        <Header />
        {showGptButton ? <OnDemandGptComponent/> :
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