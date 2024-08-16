
const ProductsCard = ({ product }) => {

    const {name, price} = product;

    return (
        <div className="product-box">
            <p>{name}</p>
            <p>${price}</p>
        </div>
    );
};

export default ProductsCard;