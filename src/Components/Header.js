import {LOGO} from "../utils/constants"
function Header (){
    return <div className="absolute w-44 px-8 py-2 bg-gradient-to-b from-black z-10">
        <img src={LOGO}
        alt="logo"/>
    </div>
}
export default Header