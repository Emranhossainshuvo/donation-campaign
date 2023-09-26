import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'




const CartDetails = () => {




    const [detail, setDetail] = useState({});

    const { category, description, picture, price, text_color } = detail || {};

    const handleAddToDonation = () => {
        // console.log(detail)

        const addedDonation = [];

        const donation = JSON.parse(localStorage.getItem('donation-data'));

        if (!donation) {
            addedDonation.push(detail)
            localStorage.setItem('donation-data', JSON.stringify(addedDonation))
        } else {

            const isExist = donation?.find(item => item.id == id)
            if (!isExist) {
                addedDonation.push(...donation, detail)
                localStorage.setItem('donation-data', JSON.stringify(addedDonation))
            }

        }


        // console.log(donation)

        toast('You are done')

    }

    const { id } = useParams();
    const idInt = parseInt(id);

    const cardDetail = useLoaderData();

    useEffect(() => {

        const findDetails = cardDetail?.find(specific => specific.id === idInt)
        // console.log(findDetails)
        setDetail(findDetails)

    }, [id, cardDetail])


    return (
        <div className="w-5/6 mt-24 mx-auto">
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img className="w-full cover relative h-[700px]" src={picture} alt="Shoes" /></figure>
                <div className="bg-black h-32  flex relative -mt-32 bg-opacity-50 justify-start">
                    <button style={{ backgroundColor: text_color }} onClick={handleAddToDonation} className="rounded-lg hover:shadow-xl shadow-gray-400 w-44 h-14 border-none mt-9 ms-9 text-white">Donate {price}</button>
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