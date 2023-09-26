import { useEffect, useState } from "react";
import CartDetails from "../CartDetails/CartDetails";
import DonatedItem from "./DonatedItem";

const Donation = () => {

    const [donation, setDonation] = useState([])

    const [noFound, setNoFound] = useState("")

    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation-data'))
        if (donationItems) {
            setDonation(donationItems)
        } else {
            setNoFound("No data found")
        }
    }, [])

    console.log(isShow);
    console.log(donation)

    return (
        <div>
            {noFound ? <p className="flex justify-center items-center text-4xl font-bold h-[70vh]"> {noFound} </p> :
                // donated cards here
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {
                            isShow
                                ?
                                donation?.map(item => <DonatedItem key={item.id} donated={item}>

                                </DonatedItem>)
                                :
                                donation?.slice(0, 4).map(item => <DonatedItem key={item.id} donated={item}>

                                </DonatedItem>)
                        }
                    </div>
                    {
                        donation.length > 4 && <button onClick={() => setIsShow(!isShow)} className="bg-green-700 block mx-auto px-5 mt-6 hover:bg-green-800 hover:shadow-green-950 hover:shadow-sm text-white p-2 rounded-md">{isShow ? "Show less" : "See more"}</button>
                    }
                </div>}
        </div>
    );
};

export default Donation;