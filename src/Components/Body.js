import {useEffect, useState} from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {onAuthStateChanged} from "firebase/auth"
import {useDispatch} from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import {auth} from "../utils/firebase"
import Browse from "./Browse"
import Login from "./Login"


const Body = () => {
    const dispatch = useDispatch()
    const initialLoginForm = {
        name:"",
        email:"",
        password:""
    }
    const [form, setForm] = useState(initialLoginForm);
    // we will save UserCredentials to  store from here only not on sign in
    // cause firebase given us the api when the user signed in or signed off;
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //when user sign 
                //dispatch an action to store userDetails             
              const {uid, email, displayName} = user.uid;
              dispatch(addUser({uid: uid, email:email, displayName:displayName}))
              
            } else {
                //when user signouty
                dispatch(removeUser())        
            }
          });

    }, [])

    const appRouter = createBrowserRouter([
        {
        path:"/",
        element:<Login form = {form} setForm={setForm}/>
        },
        {
        path:"/browse",
        element:<Browse/>
        }
]);
    return <div>
        <RouterProvider router={appRouter}/>
        
    </div>
}
export default Body