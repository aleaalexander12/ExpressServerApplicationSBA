import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "your_giphy_api_key_here"; // Replace with your actual API key
const BASE_URL = "https://api.giphy.com/v1/gifs";

// Async function to fetch trending GIFs
export const fetchTrendingGifs = createAsyncThunk("gifs/fetchTrending", async () => {
    const response = await axios.get(`${BASE_URL}/trending`, {
        params: { api_key: API_KEY, limit: 10, rating: "g" },
    });
    return response.data.data;
});

// Async function to search GIFs
export const searchGifs = createAsyncThunk("gifs/search", async (query) => {
    const response = await axios.get(`${BASE_URL}/search`, {
        params: { api_key: API_KEY, q: query, limit: 10, rating: "g" },
    });
    return response.data.data;
});

const gifsSlice = createSlice({
    name: "gifs",
    initialState: { gifs: [], status: "idle" },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrendingGifs.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTrendingGifs.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.gifs = action.payload;
            })
            .addCase(fetchTrendingGifs.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(searchGifs.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.gifs = action.payload;
            });
    },
});

export default gifsSlice.reducer;
