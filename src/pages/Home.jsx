import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingGifs } from "../redux/gifsSlice";
import { fetchGifs } from "../utils/fetchGifs"; // 
import GifCard from "../components/GifCard";
import SearchBar from "../components/Searchbar";

const Home = () => {
    const dispatch = useDispatch();
    const { gifs, status } = useSelector((state) => state.gifs);
    
    // Local state for search results
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // Fetch trending GIFs on page load
    useEffect(() => {
        dispatch(fetchTrendingGifs());
    }, [dispatch]);

    // Handle search and fetch GIFs from API
    const handleSearch = async (query) => {
        setSearchTerm(query);
        if (query.trim() !== "") {
            const results = await fetchGifs(query, 12);
            setSearchResults(results);
        } else {
            setSearchResults([]); // Reset when search is cleared
        }
    };

    return (
        <div>
            <h1>Trending GIFs</h1>
            <SearchBar onSearch={handleSearch} /> {/* Pass search handler */}

            <div className="gif-list">
                {status === "loading" && <p>Loading...</p>}
                {searchTerm
                    ? searchResults.map((gif) => <GifCard key={gif.id} gif={gif} />)
                    : gifs.map((gif) => <GifCard key={gif.id} gif={gif} />)}
            </div>
        </div>
    );
};

export default Home;
