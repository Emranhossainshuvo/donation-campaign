import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home/Home";
import Donation from "../pages/donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErroPage/ErrorPage";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/", 
        element: <MainLayOut></MainLayOut>, 
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/", 
                element: <Home></Home>,
                loader: () => fetch('data.json')
            }, 
            {
                path: "/donation", 
                element: <Donation></Donation>
            }, 
            {
                path: "/statistics", 
                element: <Statistics></Statistics>
            }, 
            // {
            //     path: "/carts/:id", 
            //     element: 
            // }
        ]
    }
])

export default myCreatedRoute;