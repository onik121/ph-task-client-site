import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsCard from './ProductsCard';
import left from '../assets/left.png';
import right from '../assets/right.png';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sortByDate, setDate] = useState('');

    const fetchProducts = async () => {
        const res = await axios.get(`https://ph-task-server-blond.vercel.app/products`, {
            params: {
                page: currentPage,
                search: searchTerm,
                brand: selectedBrand,
                category: selectedCategory,
                minPrice,
                maxPrice,
                sortBy,
                sortByDate
            },
        });
        setProducts(res.data.products);
        setTotalPages(res.data.totalPages);
    };

    useEffect(() => {
        fetchProducts();
    }, [currentPage, searchTerm, selectedBrand, selectedCategory, minPrice, maxPrice, sortBy, sortByDate]);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        setSearchTerm(search);
        setMinPrice(minPrice);
        setMaxPrice(maxPrice);
        setCurrentPage(1);
    };

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
        setCurrentPage(1);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setCurrentPage(1);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        setCurrentPage(1);
    };


    const handleDate = (event) => {
        setDate(event.target.value);
        setCurrentPage(1);
    }


    return (
        <div className='mt-20 mb-20 max-w-[1550px] mx-auto px-5'>

            <div className='text-center mb-8'>
                <p className='mb-2'>Find the Perfect Car Here</p>
                <h1 className='text-4xl font-medium'>Finding Your Perfect Road Companion</h1>
            </div>

            <form className='flex items-center justify-evenly' onSubmit={handleSearchSubmit}>

                <div>
                    <input type="text" name="search" placeholder="Search Here..." />

                    <input type="number" name="minPrice" placeholder="Min Price" />
                    <input type="number" name="maxPrice" placeholder="Max Price" />

                    <button  type="submit" className="button ml-2">Show Results</button>
                </div>

                <div>
                    <select name="brand" className='example' onChange={handleBrandChange}>
                        <option value="">All Brands</option>
                        <option value="Tesla">Tesla</option>
                        <option value="Audi">Audi</option>
                        <option value="BMW">BMW</option>
                        <option value="Ford">Ford</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Honda">Honda</option>
                        <option value="Porsche">Porsche </option>
                        <option value="Lexus">Lexus</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="Jaguar">Jaguar</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Mazda">Mazda</option>
                        <option value="Kia">Kia</option>
                        <option value="Subaru">Subaru</option>
                        <option value="Jeep">Jeep</option>
                        <option value="Mazda">Mazda</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Lamborghini">Lamborghini</option>
                        <option value="Nissan">Nissan</option>
                    </select>
                    <select name="category" onChange={handleCategoryChange}>
                        <option value="">All Categories</option>
                        <option value="electric">Electric</option>
                        <option value="SUV">SUVs</option>
                        <option value="sedan">Sedan</option>
                        <option value="sports">Sports</option>
                        <option value="hatchback">Hatchback</option>
                        <option value="truck">Truck</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="coupe">Coupe</option>
                    </select>


                    <select name="sortBy" onChange={handleSortChange}>
                        <option value="">All Prices</option>
                        <option value="priceAsc">Price: Low to High</option>
                        <option value="priceDesc">Price: High to Low</option>
                    </select>
                    <button onClick={handleDate} value={'dateDesc'} type="submit" className="button ml-2">Latest Models</button>
                </div>

            </form>

            
            <div className='product-container mt-10'>
                {products.map(product => (
                    <ProductsCard key={product._id} product={product} />
                ))}
            </div>

            
            <div className='flex justify-center items-center pagination mt-10'>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className='mr-5'>
                    <img src={left} alt="Previous" />
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className='ml-5'>
                    <img src={right} alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default Products;
