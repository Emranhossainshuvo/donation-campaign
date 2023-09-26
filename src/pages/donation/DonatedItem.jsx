import PropTypes from 'prop-types'

const DonatedItem = ({ donated }) => {
    const { picture, price, title, category, card_bg_color, text_color, category_bg_color } = donated || {};
    console.log(donated);
    return (
        <div>
            <div style={{ backgroundColor: card_bg_color }} className="card ms-6 p-4 mt-8 card-side bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <p className='w-1/4 rounded-md p-1' style={{ color: text_color, backgroundColor: category_bg_color }} >{category}</p>
                    <h4 className="card-title">{title}</h4>
                    <p>{price}</p>
                    <div className="card-actions justify-start">
                        <button style={{ backgroundColor: text_color }} className="btn text-white">View details </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

DonatedItem.propTypes = {
    donated: PropTypes.object
}

export default DonatedItem;