import PropTypes from 'prop-types'

const DonatedItem = ({ donated }) => {
    const { picture, price, title, category } = donated || {};
    console.log(donated);
    return (
        <div>
            <div className="card mt-8 card-side bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <p>{category}</p>
                    <h4 className="card-title">{title}</h4>
                    <p>{price}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">View details </button>
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