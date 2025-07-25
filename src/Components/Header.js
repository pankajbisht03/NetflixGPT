import { useEffect } from "react"
import { useSelector } from "react-redux"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { LOGO, USER_LOGO } from "../utils/constants"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { toggleGptState } from "../utils/gptSlice"
function Header() {
    const user = useSelector((store) => store.user);
    const movies = useSelector((store) => store.movies);
    const gptButtonState = useSelector((store) => store.gpt.showGpt)
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

    function toggleGptClick() {
        dispatch(toggleGptState())
    }

    function handleLogoClick() {
        // navigate("/")
    }
    return <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img onClick={handleLogoClick} className="cursor-pointer w-44 mx-auto md:mx-0" src={LOGO}
            alt="logo" />
        {user && <div className="flex justify-between md:py-2">
            <button className=" px-2 mx-0 md:mx-2 py-2 my-2 bg-purple-800 text-white font-bold rounded-lg" onClick={toggleGptClick}>{!gptButtonState ? "GPT Search" : "Homepage"}</button>
            <img alt="user-logo" className="hidden md:block mx-2 my-2 w-10 h-10" src={USER_LOGO} />
            <button className="px-2 mx-0 md:mx-2 my-2 text-white bg-red-800 font-bold rounded-lg" onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
}
export default Header