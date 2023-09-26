import { useLoaderData } from 'react-router-dom';
// import { TotalDataContext } from '../../components/Carts/Carts';




const Statistics = () => {
    const data = useLoaderData(); 

    const localData = localStorage.getItem('donation-data'); 
    console.log(JSON.parse(localData))

    console.log(data)
    return (
        <div>

        </div>
    
    );
    
};

export default Statistics;