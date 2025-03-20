import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchGifs } from "../redux/gifsSlice";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            dispatch(searchGifs(query));
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search GIFs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
