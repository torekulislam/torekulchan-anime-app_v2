const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export const fetchAnimeList = async ({ apiUrl, setAnimeLists, setTotalPages, setLoading, retries = 7 }) => {
    let loding = true
    setLoading(true);

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (!data || !data.data) {
            throw new Error("No data found in the response");
        }

        if (data.data.length === 0) {
            throw new Error("No anime found for the given criteria");
        }

        // Update state
        setAnimeLists(data.data);
        setTotalPages(data.pagination?.last_visible_page || 1);
        loding = false
        setLoading(false);  // success -> clear loading here


    } catch (error) {
        console.error("Error in fetchAnimeList:", error.message);

        if (retries > 0 && !loding) {
            await delay(2000);  // wait before retry
            return fetchAnimeList({ apiUrl, setAnimeLists, setTotalPages, setLoading, retries: retries - 1 });
        } else {
            setLoading(false);  // no retries left -> clear loading here
        }
    }
};





export const fatchAnime = async ({ url, setMainData, paths }) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (!data || !data.data) {
            throw new Error("No data found in the response");
        }

        if (Array.isArray(data.data) && data.data.length === 0) {
            throw new Error("No anime found for the given criteria");
        }

        // Update main data
        setMainData(prev => ({
            ...prev,
            [paths]: data.data,
        }));
    } catch (error) {
        console.error(" Error in fetchAnime:", error.message);
    }
};



