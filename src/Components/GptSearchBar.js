import { useRef } from "react";
import openAi from "../utils/openai";

function GptSearchBar() {
    const searchText = useRef(null);

    const gptQuery = "Act as a movie recommendation system and suggest some rsults for the query:"
        + searchText.current?.value +
        "Only give name of 5 movies, comma separated like the example result given ahead. Example Result: Don, Golmaal, Phir Hera Pheri, Dhol, Andaz Apna Apna"

    async function handleAdvanceSearch(e) {
        e.preventDefault();
        // openai chat apis give results as a promise and have to make my function async
        const gptResults = await openAi.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'user', content: gptQuery },
            ],
        });
        console.log(gptResults.choices, "funny retro");
    }
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12  rounded-lg">
                <input type="text" ref={searchText} className="p-4 m-4 col-span-9 rounded-lg" ></input>
                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleAdvanceSearch}>Search</button>
            </form>

        </div>
    )
}

export default GptSearchBar
