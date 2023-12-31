import { useState } from 'react';
import './banner.css'

const Banner = () => {

    const [inputValue, setInputValue] = useState(null)

    const inputHandle = () => {
        const inputDataElement = document.getElementById('search-input')
        const inputData = inputDataElement.value
        setInputValue(inputData)
        inputDataElement.value = ''
    }
    console.log(inputValue)

    return (
        <div className="banner-img flex flex-col justify-center text-center h-[50vh] mb-20">
            <h2 className="text-5xl font-bold mb-6 text-rose-600">I Grow By Helping People In Need</h2>
            <div>
                <input id='search-input' className="h-10  ps-3 mt-5" placeholder="search here" type="text" />
                <button onClick={inputHandle} className="p-2 rounded-e-xl hover:bg-red-700 hover:shadow-xl hover:shadow-red-200 hover:text-gray-200 text-white bg-[#ff444a]">Search</button>
            </div>
        </div>
    );
};

export default Banner;