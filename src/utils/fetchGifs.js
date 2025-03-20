const API_KEY = "JdPC8UW2jQ5R8xGQcR1XfHSQGchmxJTl"; // Replace with your actual API key
const BASE_URL = "https://api.giphy.com/v1/gifs/search";

/**
 * Fetch GIFs from Giphy API based on a search term
 * @param {string} query - The search term for GIFs
 * @param {number} limit - Number of GIFs to fetch (default 10)
 * @returns {Promise<Array>} - Returns an array of GIF objects
 */
export const fetchGifs = async (query, limit = 10) => {
    try {
        const response = await fetch(
            `${BASE_URL}?api_key=${API_KEY}&q=${query}&limit=${limit}`
        );
        const data = await response.json();

        // Check if API response is valid
        if (data?.data) {
            return data.data; // Return the array of GIFs
        } else {
            throw new Error("No GIFs found");
        }
    } catch (error) {
        console.error("Error fetching GIFs:", error);
        return []; // Return an empty array on error
    }
};
