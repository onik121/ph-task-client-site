
const ProductsCard = ({ product }) => {

    const { name, price, date, image } = product;

    return (
        <div className="product-box">
            <img className="max-h-[240px] w-full h-full" src={image}></img>
            <div className="p-5">
                <p>{name}</p>
                <p>${price}</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default ProductsCard;