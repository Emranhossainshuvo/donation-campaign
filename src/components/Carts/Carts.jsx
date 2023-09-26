import PropTypes from 'prop-types';
import Cart from "./Cart";
import { createContext, useState } from 'react';
import Statistics from '../../pages/Statistics/Statistics';




const Carts = ({data}) => {
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