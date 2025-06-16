import useFetchNowPlayingMovies from "../customHooks/useFetchMovies"
import {useSelector} from "react-redux"
import Header from "./Header"
import MainMovieContainer from "./MainMovieContainer"

function Browse() {
    useFetchNowPlayingMovies();
    const nowPlaying  = useSelector((store) => store.movies);
    console.log(nowPlaying, "nowww")
    
    return (<div>
        <Header />
        <MainMovieContainer/>
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