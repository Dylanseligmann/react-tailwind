import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';


export default function Products() {

    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    

    //Show Last Search Results

    useEffect(() => {
        
        const savedSearchResults = localStorage.getItem('searchResults');

        if (savedSearchResults) {
            setSearchResults(JSON.parse(savedSearchResults));
        }

    }, []);

    const handleSearch = (query) => {
        
        //Spinner Starts
        setLoading(true);

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            .then((res) => res.json())
            .then((data) => {
                setSearchResults(data.results);
                // Save search results to localStorage
                localStorage.setItem('searchResults', JSON.stringify(data.results));
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    };

    return (
        <div className="bg-gray-800 min-h-[88vh]">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-gray-800 justify-center">

                <SearchBar onSearch={handleSearch} />

                {loading && (
                    <div className="flex justify-center">
                        <img src={logo} className="App-logo mt-3" width='50px' height='50px' alt="Loading" />
                    </div>
                )}

                <h2 className="text-2xl font-bold tracking-tight text-white"></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                    {searchResults.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col justify-center items-center"
                        >
                            <NavLink to={`/ProductDetail/${product.id}`}>
                                <img
                                    className="rounded-t-lg object-cover h-48 w-full"
                                    src={product.thumbnail}
                                    alt=""
                                />
                            </NavLink>
                            <div className="p-5">
                                <NavLink to={`/ProductDetail/${product.id}`}>
                                    <h5
                                        key={index}
                                        className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white"
                                    >
                                        {product.title}
                                    </h5>
                                </NavLink>
                                <p className="font-normal text-gray-700 mb-3 text-white">
                                    $ {product.price}
                                </p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}