import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'



  const notify = () => {
    toast('You are done')
  }



const CartDetails = () => {

    const [detail, setDetail] = useState({});

    const { category, description, picture, price } = detail || {};

    const { id } = useParams();
    const idInt = parseInt(id);

    const cardDetail = useLoaderData();

    useEffect(() => {

        const findDetails = cardDetail?.find(specific => specific.id === idInt)
        console.log(findDetails)
        setDetail(findDetails)

    }, [id, cardDetail])


    return (
        <div className="w-5/6 mt-24 mx-auto">
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img className="w-full cover relative h-[700px]" src={picture} alt="Shoes" /></figure>
                <div className="bg-black h-32  flex relative -mt-32 bg-opacity-50 justify-start">
                    <button onClick={notify} className="rounded-lg hover:shadow-xl shadow-gray-400 w-44 h-14 border-none mt-9 ms-9 text-white bg-[#FF444A]">Donate {price}</button>
                    <ToastContainer />
                </div>
                <div className="card-body">
                    <h2 className="card-title"> {category} </h2>
                    <p>{description}</p>
                </div>
            </div>        </div>
    );
};

export default CartDetails;