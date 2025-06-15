import {useState} from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
const Body = () => {
    const initialLoginForm = {
        name:"",
        email:"",
        password:""
    }
    const [form, setForm] = useState(initialLoginForm)
    const appRouter = createBrowserRouter([
        {
        path:"/",
        element:<Login form = {form} setForm={setForm}/>
        },
        {
        path:"/browse",
        element:<Browse/>
        }
])
    return <div>
        <RouterProvider router={appRouter}/>
        
    </div>
}
export default Body