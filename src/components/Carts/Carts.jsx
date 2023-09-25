import Cart from "./Cart";

const Carts = ({data}) => {
    // console.log(data);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    data?.map(cart =><Cart key={cart.id} data={cart}></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;