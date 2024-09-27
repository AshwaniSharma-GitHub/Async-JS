document.getElementById('asyncBtn').addEventListener('click', async function() {
    document.getElementById('fetchedData').innerText = "Loading...";
    try {
        let data = await fetchDataWithAsync();
        let postTitles = data.posts.map(post => post.title).join('\n');
        document.getElementById('fetchedData').innerText = "Fetched Data";
        document.getElementById('fetchedData').innerText = postTitles;
    } catch (error) {
        document.getElementById('fetchedData').innerText = error;
    }
});

async function fetchDataWithAsync() {
    try {
        const timeout = new Promise((_, reject) => 
            setTimeout(() => reject('Operation timed out'), 5000)
        );

        const fetchRequest = fetch('https://dummyjson.com/posts')
            .then(response => response.json());

        return await Promise.race([fetchRequest, timeout]);
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}