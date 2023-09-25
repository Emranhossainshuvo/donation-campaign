import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home/Home";
import Donation from "../pages/donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErroPage/ErrorPage";
import CartDetails from "../pages/CartDetails/CartDetails";


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
            {
                path: "/carts/:id", 
                element: <CartDetails></CartDetails>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default myCreatedRoute;