document.getElementById('promiseBtn').addEventListener('click', function() {
    document.getElementById('fetchedData').innerText = "Loading...";
    fetchDataWithPromise()
        .then(data => {
            let postTitles = data.posts.map(post => post.title).join('\n');
            document.getElementById('fetchedData').innerText = postTitles;
        })
        .catch(error => document.getElementById('fetchedData').innerText = error);
});

function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject("Operation timed out");
        }, 5000);

        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                clearTimeout(timeout);
                resolve(data);
            })
            .catch(() => reject("Failed to fetch data"));
    });
}
