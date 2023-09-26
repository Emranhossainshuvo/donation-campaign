import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Cart = ({ data }) => {

    const { card_bg_color, category, category_bg_color, id, picture, text_color, title } = data || {};
    // console.log(data)
    return (

        <div style={{ backgroundColor: card_bg_color }} className="flex flex-col mb-6 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="mx-4 -mt-6 h-56 overflow-hidden rounded-t-lg bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <Link to={`/carts/${id}`}>
                    <img className="w-11/12"
                        src={picture}
                    />
                </Link>
            </div>
            <div className="p-6">
                <h4 style={{ backgroundColor: category_bg_color, color: text_color }} className="mb-2 inline p-1 rounded-sm text-xl font-semibold">
                    {category}
                </h4>
                <h3 style={{ color: text_color }} className="text-2xl font-medium">
                    {title}
                </h3>
            </div>
        </div>

    );
};

Cart.propTypes = {
    data: PropTypes.object
}

export default Cart;