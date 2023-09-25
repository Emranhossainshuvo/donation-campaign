import './banner.css'

const Banner = () => {
    return (
        <div className=" banner-img text-center mb-52 mt-36">
             <h2 className="text-5xl font-bold mb-6">I Grow By Helping People In Need</h2> 
             <input className="h-9 ps-3 mt-5" placeholder="search here" type="text" />          
             <button className="p-2 rounded-e-xl hover:bg-red-700 hover:shadow-xl hover:shadow-red-200 hover:text-gray-200 text-white bg-[#ff444a]">Search</button>
        </div>
    );
};

export default Banner;