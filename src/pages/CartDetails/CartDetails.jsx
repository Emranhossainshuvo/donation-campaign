import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CartDetails = () => {

    const [detail , setDetail] = useState(null);

    
    
    const {id} = useParams();
    const idInt = parseInt(id);
    // console.log(+id)
    
    const cardDetail = useLoaderData();
    console.log(cardDetail);

    useEffect(() => {

        const findDetails = cardDetail?.find(specific => specific.id === idInt)

        console.log(findDetails)

    }, [id, cardDetail])


    return (
        <div>
                details here
        </div>
    );
};

export default CartDetails;