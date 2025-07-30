import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { BACKGROUND_IMAGE } from "../utils/constants"
import { checkValidations } from "../utils/formValidation"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../utils/firebase"
import Header from "./Header";
import { addUser } from "../utils/userSlice";

const Login = ({ form, setForm }) => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    function toggleSignInForm() {
        setIsSignInForm(prev => !prev)
    }

    function handleForm(e) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    function handeSubmit(e) {
        e.preventDefault()
        const validations = checkValidations(form.email, form.password);
        setErrorMsg(validations);
        // if error messages were peresent than return null
        if (validations) return
        if (!isSignInForm) {
            //create new user
            createUserWithEmailAndPassword(auth, form.email, form.password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // UPDATING A USER
                    updateProfile(user, {
                        displayName: form.name
                    }).then(() => {
                        //extracting these details from auth.currrentUser
                        const { uid, displayName, email } = auth.currentUser
                        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
                        navigate("/browse")
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    })

                    // ...
                })
                .catch((error) => {
                    setErrorMsg(error.message);
                });
        } else {
            //validate new user
            signInWithEmailAndPassword(auth, form.email, form.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate("/browse")
                    
                })
                .catch((error) => {
                    setErrorMsg(error.message);
                });
        }
    }


    return (
        <div>
            <Header />
            <div className="absolute">
                <img 
                    className="h-screen object-cover md:h-auto md:object-none"
                    src={BACKGROUND_IMAGE}
                    alt="background" />
            </div>
            <form className="w-full md:w-3/12 absolute bg-black text-white p-8 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg">

                <h1 className="p-4 font-bold text-3xl text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input className="p-3 my-4 w-full bg-gray-700 rounded-lg text-black" type="text" name="name" placeholder="Name" value={form.name} onChange={(e) => handleForm(e)} />}
                <input className="p-3 my-4 w-full bg-gray-700 rounded-lg text-black" type="email" name="email" placeholder="Email Address" value={form.email} onChange={(e) => handleForm(e)} />
                <input className="p-3 my-4 w-full rounded-lg bg-gray-700 text-black" type="password" name="password" placeholder="Password" value={form.password} onChange={(e) => handleForm(e)}></input>
                <p className="p-2 text-red-500 font-bold">{errorMsg}</p>
                <button className="p-3 my-6 w-full bg-red-700 rounded-lg" onClick={handeSubmit}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="p-4 cursor-pointer " onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already registered? Sign In Now."}</p>
            </form>
        </div>
    )
}
export default Login