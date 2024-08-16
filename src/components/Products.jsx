import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsCard from './ProductsCard';

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
                sortBy
            }
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
        const brand = form.brand.value;
        const category = form.category.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        const sortBy = form.sortBy.value;

        // Update the state variables
        setSearchTerm(search);
        setSelectedBrand(brand);
        setSelectedCategory(category);
        setMinPrice(minPrice);
        setMaxPrice(maxPrice);
        setSortBy(sortBy);

        setCurrentPage(1); // Reset to the first page
    };

    return (
        <div className='mt-20 mb-20 max-w-[1550px] mx-auto px-5'>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" name="search" placeholder="Search Here..." />

                {/* Brand Selector */}
                <select name="brand">
                    <option value="">All Brands</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                </select>

                {/* Category Selector */}
                <select name="category">
                    <option value="">All Categories</option>
                    <option value="electric">Electric</option>
                    
                </select>

                {/* Price Range */}
                <input type="number" name="minPrice" placeholder="Min Price" />
                <input type="number" name="maxPrice" placeholder="Max Price" />

                {/* Sort By */}
                <select name="sortBy">
                    <option value="">Sort By</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="dateAsc">Date: Oldest First</option>
                    <option value="dateDesc">Date: Newest First</option>
                </select>

                {/* Apply Filters Button */}
                <button type="submit" className="button">Show Results</button>
            </form>

            {/* Products List */}
            <div className='product-container'>
                {products.map(product => (
                    // <div key={product._id}>{product.name}</div>
                    <ProductsCard product={product}></ProductsCard>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className='mt-5 bg-red-50 text-center'>
                <button 
                    onClick={() => setCurrentPage(currentPage - 1)} 
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button 
                    onClick={() => setCurrentPage(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Products;
