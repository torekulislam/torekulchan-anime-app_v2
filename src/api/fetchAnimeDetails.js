// src/api/fetchAnimeDetails.js


export const fetchAnimeDetails = async ({ url, setAnimeDetails, setCharacters, id, retries = 7 }) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (!data || !data.data) {
            throw new Error("No data found in the response");
        }

        // Set anime details
        setAnimeDetails(data.data);

        // Fetch characters if ID is provided
        if (id && setCharacters) {
            await fetchCharacters({ id, setCharacters });
        }
    } catch (error) {
        console.error(" Error fetching anime details:", error.message);

        if (retries > 0) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Retry after 1s
            return fetchAnimeDetails({ url, setAnimeDetails, setCharacters, id, retries: retries - 1 });
        }
    }
};




export const fetchCharacters = async ({ id, setCharacters }) => {
    try {
        // Step 1: Get anime-character relationships
        const res = await fetch(
            `https://api.jikan.moe/v4/anime/${id}/characters`
        );
        const data = await res.json();
        const charEdges = data.data.map(char => ({
            id: char.character.mal_id,
            name: char.character.name,
            image: char.character.images.jpg.image_url,
            role: char.role
        }));


        // console.log("Characters fetched successfully:", charEdges);



        setCharacters(charEdges);

    } catch (error) {
        console.error('Error fetching characters:', error);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Retry after 2 seconds
        fetchCharacters(id, setCharacters); // Retry
    }
};


