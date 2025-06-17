import { useEffect } from "react"
import { useSelector } from "react-redux"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { LOGO, USER_LOGO } from "../utils/constants"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import {toggleGptState} from "../utils/gptSlice"
function Header() {
    const user = useSelector((store) => store.user);
    const movies = useSelector((store) => store.movies);
    const gptButtonState = useSelector((store) => store.gpt.showGpt)
    console.log(gptButtonState, "mo")
    const dispatch = useDispatch()

    const navigate = useNavigate();
    // we will save UserCredentials to  store from here only not on sign in
    // cause firebase given us the api when the user signed in or signed off;
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //when user sign 
                //dispatch an action to store userDetails             
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate("/browse")

            } else {
                //when user signouty
                dispatch(removeUser())
                navigate("/")
            }
        });

    }, []);

    // will be signing out using firebase apis
    function handleSignOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log(error)
            // An error happened.
        });
    }

    function toggleGptClick(){
        dispatch(toggleGptState())
    }
    return <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src={LOGO}
            alt="logo" />
        {user && <div className="flex py-2">
            <button className="px-2 mx-2 py-2 my-2 bg-purple-800 text-white rounded-lg" onClick={toggleGptClick}>{!gptButtonState ? "GPT Search": "Homepage"}</button>
            <img alt="user-logo" className="w-10 h-10" src={USER_LOGO} />
            <button className="text-white font-bold" onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
}
export default Header