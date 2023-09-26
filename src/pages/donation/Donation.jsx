import { useEffect, useState } from "react";
import CartDetails from "../CartDetails/CartDetails";
import DonatedItem from "./DonatedItem";

const Donation = () => {

    const [donation, setDonation] = useState([])

    const [noFound, setNoFound] = useState("")

    useEffect(()=> {
        const donationItems = JSON.parse(localStorage.getItem('donation-data'))
        if(donationItems){
            setDonation(donationItems)
        }else{
            setNoFound("No data found")
        }
    }, [])

    console.log(donation)

    return (
        <div>
            {noFound ? <p className="flex justify-center items-center text-4xl font-bold h-[70vh]"> {noFound} </p> : 
            // donated cards here
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {
                        donation?.map(item =><DonatedItem key={item.id} donated={item}>

                        </DonatedItem>)
                    }
                </div>
            </div> }
        </div>
    );
};

export default Donation;