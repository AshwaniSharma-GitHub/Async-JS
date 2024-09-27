document.getElementById('callbackBtn').addEventListener('click', function() {
    displayMessageAfterDelay("Callback executed after 5 seconds", 5000, function(message) {
        document.getElementById('fetchedData').innerText = message;
    });
});

function displayMessageAfterDelay(message, delay, callback) {
    document.getElementById('fetchedData').innerText = "Please wait...";
    setTimeout(function() {
        callback(message);
    }, delay);
}

document.getElementById('callbackBtn').addEventListener('click', function() {
    displayMessageAfterDelay("Fetching data...", 5000, fetchPosts);
});

function fetchPosts() {
    fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            let postTitles = data.posts.map(post => post.title).join('\n');
            document.getElementById('fetchedData').innerText = postTitles;
        });
}