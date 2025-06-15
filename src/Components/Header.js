import {LOGO, USER_LOGO} from "../utils/constants"
function Header (){
    // will be signing out user firebase apis
    function handleSignOut(){

    }
    return <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src={LOGO}
        alt="logo"/>
        <div className="flex py-2">
            <img alt="user-logo" className="w-10 h-10" src={USER_LOGO}/>
            <button className="text-white font-bold" onClick={handleSignOut}>Sign Out</button>
        </div>
    </div>
}
export default Header