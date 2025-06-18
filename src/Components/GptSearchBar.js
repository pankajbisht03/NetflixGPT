import { useRef } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";
import openAi from "../utils/openai";

function GptSearchBar() {
    const dispatch = useDispatch()
    const searchText = useRef(null);
    //search movie in TMDB 
    const searchMovieTmdb = async(movieName) => {
        const movie  = await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json  = await movie.json();
        return json?.results

    }
    async function handleAdvanceSearch(e) {       
        e.preventDefault();
        const gptQuery = "Act as a movie recommendation system and suggest some results for the query:"
        + searchText.current?.value +
        "Only give name of 5 movies, comma separated like the example result given ahead. Example Result: Don, Golmaal, Phir Hera Pheri, Dhol, Andaz Apna Apna"

        // openai chat apis give results as a promise and have to make my function async
        const gptResults = await openAi.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'user', content: gptQuery },
            ],
        });
        const gptMovieResults = gptResults?.choices[0]?.message?.content.split(",");
        //map will not wait for results its executes all the code and provides us promise
       const promiseArray =  gptMovieResults.map((movie) => searchMovieTmdb(movie));
       const tmdbResults = await Promise.all(promiseArray)
       dispatch(addGptMovies({movieNames:gptMovieResults, tmdbResults:tmdbResults}))
    }
    
    return (
        <div className="pt-[45%] md:pt-[10%] flex justify-center">
            <form className="w-full md:w-1/2 bg-black grid grid-cols-12  rounded-lg">
                <input type="text" ref={searchText} className="p-4 m-4 col-span-9 rounded-lg" ></input>
                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white font-bold rounded-lg" onClick={handleAdvanceSearch}>Search</button>
            </form>

        </div>
    )
}

export default GptSearchBar
