import {useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    function toggleSignInForm(){
        setIsSignInForm(prev => !prev)
    }

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"
                alt="background"/>
            </div>
            <form className="w-3/12 absolute bg-black text-white p-10 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg">
              
    <h1 className="p-4 font-bold text-3xl text-white">{isSignInForm ? "Sign In": "Sign Up"}</h1>
               {isSignInForm && <input className="p-3 my-4 w-full bg-grey-500 rounded-lg" type="text" placeholder="Name"/> }
                <input className="p-3 my-4 w-full bg-grey-500 rounded-lg" type="email" placeholder="Email Address"/>
                <input className="p-3 my-4 w-full rounded-lg" type="password " placeholder="Password"></input>
                 <button className="p-3 my-6 w-full bg-red-700 rounded-lg">{isSignInForm ? "Sign In":"Sign Up"}</button>
                <p className="p-4 cursor-pointer " onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already registered? Sign In Now."}</p>
            </form>        
        </div>
    )
}
export default Login