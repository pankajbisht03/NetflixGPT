import {useState} from "react"
import { BACKGROUND_IMAGE } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar"

function GptSearchContainer (){
    const [loading, setLoading] = useState(false)
    return (
        <>
        <div className="fixed -z-10">
                <img className="h-screen object-cover md:w-screen" src={BACKGROUND_IMAGE} alt="bg-img"/>
            </div>
            
        <div className="">
            <GptSearchBar loading={loading} setLoading={setLoading}/>
            <GptMovieSuggestion loading={loading} setLoading={setLoading}/>
            {/* {GPT SEARCHBAR
                GPT MOVIE SUGGESTION
            } */}
        </div>
        </>

    )
}

export default GptSearchContainer