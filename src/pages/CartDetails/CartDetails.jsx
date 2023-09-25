import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CartDetails = () => {

    const [detail, setDetail] = useState({});



    const { id } = useParams();
    const idInt = parseInt(id);
    // console.log(+id)

    const cardDetail = useLoaderData();
    console.log(cardDetail);

    useEffect(() => {

        const findDetails = cardDetail?.find(specific => specific.id === idInt)
        console.log(findDetails)
        setDetail(findDetails)

    }, [id, cardDetail])


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={detail.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>        </div>
    );
};

export default CartDetails;