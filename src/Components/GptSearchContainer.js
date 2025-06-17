import { BACKGROUND_IMAGE } from "../utils/constants";

const { default: GptSearchBar } = require("./GptSearchBar");

function GptSearchContainer (){
    return (
        <div>
            <div className="absolute -z-10">
                <img src={BACKGROUND_IMAGE} alt="bg-img"/>

            </div>
            <GptSearchBar/>
            {/* {GPT SEARCHBAR
                GPT MOVIE SUGGESTION
            } */}
        </div>
    )
}

export default GptSearchContainer