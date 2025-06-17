import { BACKGROUND_IMAGE } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar"

function GptSearchContainer (){
    return (
        <div>
            <div className="fixed -z-10">
                <img src={BACKGROUND_IMAGE} alt="bg-img"/>

            </div>
            <GptSearchBar/>
            <GptMovieSuggestion/>
            {/* {GPT SEARCHBAR
                GPT MOVIE SUGGESTION
            } */}
        </div>
    )
}

export default GptSearchContainer