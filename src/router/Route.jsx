import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home/Home";
import Donation from "../pages/donation/Donation";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/", 
        element: <MainLayOut></MainLayOut>, 
        children: [
            {
                path: "/", 
                element: <Home></Home>
            }, 
            {
                path: "/donation", 
                element: <Donation></Donation>
            }
        ]
    }
])

export default myCreatedRoute;