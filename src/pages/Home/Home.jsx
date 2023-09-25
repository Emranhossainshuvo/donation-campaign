import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Carts from "../../components/Carts/Carts";


const Home = () => {

    const data = useLoaderData(); 
    // console.log(data)
    return (
        <div>
           <Banner></Banner>   
           <Carts data={data}></Carts>      
        </div>
    );
};

export default Home;