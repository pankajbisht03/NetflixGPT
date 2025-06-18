import { BACKGROUND_IMAGE } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar"

function GptSearchContainer (){
    return (
        <>
        <div className="fixed -z-10">
                <img className="h-screen object-cover md:w-screen" src={BACKGROUND_IMAGE} alt="bg-img"/>
            </div>
            
        <div className="">
            <GptSearchBar/>
            <GptMovieSuggestion/>
            {/* {GPT SEARCHBAR
                GPT MOVIE SUGGESTION
            } */}
        </div>
        </>

    )
}

export default GptSearchContainer