import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsCard from './ProductsCard';
import left from '../assets/left.png';
import right from '../assets/right.png';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // States for filtering and sorting
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortBy, setSortBy] = useState('');

    const fetchProducts = async () => {
        const res = await axios.get(`http://localhost:5000/products`, {
            params: {
                page: currentPage,
                search: searchTerm,
                brand: selectedBrand,
                category: selectedCategory,
                minPrice,
                maxPrice,
                sortBy,
            },
        });
        setProducts(res.data.products);
        setTotalPages(res.data.totalPages);
    };

    useEffect(() => {
        fetchProducts();
    }, [currentPage, searchTerm, selectedBrand, selectedCategory, minPrice, maxPrice, sortBy]);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        // Get values from the form inputs
        const search = form.search.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;

        // Update the state variables
        setSearchTerm(search);
        setMinPrice(minPrice);
        setMaxPrice(maxPrice);

        setCurrentPage(1); // Reset to the first page
    };

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
        setCurrentPage(1); // Reset to the first page
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setCurrentPage(1); // Reset to the first page
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        setCurrentPage(1); // Reset to the first page
    };

    return (
        <div className='mt-20 mb-20 max-w-[1550px] mx-auto px-5'>

            <div className='text-center mb-8'>
                <p>Find the Perfect Car Here</p>
                <h1 className='text-4xl font-medium'>Finding Your Perfect Road Companion</h1>
            </div>

            <form className='text-center' onSubmit={handleSearchSubmit}>

                <input type="text" name="search" placeholder="Search Here..." />
                
                <input type="number" name="minPrice" placeholder="Min Price" />
                <input type="number" name="maxPrice" placeholder="Max Price" />

                <button type="submit" className="button">Show Results</button>

                <select name="brand" onChange={handleBrandChange}>
                    <option value="">All Brands</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                </select>
                
                <select name="category" onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    <option value="electric">Electric</option>
                </select>

                
                <select name="sortBy" onChange={handleSortChange}>
                    <option value="">All Prices</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="dateDesc">Date: Newest First</option>
                </select>

            </form>

            {/* Products List */}
            <div className='product-container mt-10'>
                {products.map(product => (
                    <ProductsCard key={product._id} product={product} />
                ))}
            </div>

            {/* Pagination Controls */}
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
