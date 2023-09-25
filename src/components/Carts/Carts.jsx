import PropTypes from 'prop-types';
import Cart from "./Cart";

const Carts = ({data}) => {
    // console.log(data);
    return (
        <div>
            <div className="grid grid-cols-1 mb-16 md:grid-cols-2 lg:grid-cols-4">
                {
                    data?.map(cart =><Cart key={cart.id} data={cart}></Cart>)
                }
            </div>
        </div>
    );
};

Carts.propTypes = {
    data: PropTypes.object
}

export default Carts;