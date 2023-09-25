import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CartDetails = () => {

    const [detail, setDetail] = useState({});



    const { id } = useParams();
    const idInt = parseInt(id);

    const cardDetail = useLoaderData();

    useEffect(() => {

        const findDetails = cardDetail?.find(specific => specific.id === idInt)
        console.log(findDetails)
        setDetail(findDetails)

    }, [id, cardDetail])


    return (
        <div>
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img className="w-full relative h-[700px]" src={detail.picture} alt="Shoes" /></figure>
                <div className="bg-black h-32  flex relative -mt-32 bg-opacity-50 justify-start">
                    <button className="rounded-lg hover:shadow-xl shadow-gray-400 w-44 h-14 border-none mt-9 ms-9 text-white bg-[#FF444A]">Donate {detail.price}</button>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>        </div>
    );
};

export default CartDetails;