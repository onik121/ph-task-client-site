
const ProductsCard = ({ product }) => {

    const {name, price} = product;

    return (
        <div>
            {name}
            {price}
        </div>
    );
};

export default ProductsCard;