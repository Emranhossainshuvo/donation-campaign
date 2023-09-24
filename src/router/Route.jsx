import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home/Home";
import Donation from "../pages/donation/Donation";
import Statistics from "../pages/Statistics/Statistics";


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
            }, 
            {
                path: "/statistics", 
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default myCreatedRoute;