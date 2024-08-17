
const ProductsCard = ({ product }) => {

    const { name, price, date, image, description, category } = product;

    return (
        <div className="product-box h-auto">
            <img className="product-img" src={image}></img>
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">{name}</h3>
                    <p className="capitalize mt-1">{category}</p>
                </div>
                <p className="mt-3">{description}</p>
                <div className="line"></div>
                <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold">${price}</p>
                    <p>Model: {new Date (date).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;