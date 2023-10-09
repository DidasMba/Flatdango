document.addEventListener("DOMContentLoaded", () => {
    // Fetch movie data from the local server (replace the URL with your JSON DB server's URL)
    fetch("http://localhost:3000/films")
        .then((response) => response.json())
        .then((data) => {
            // Display movie data dynamically
            const movie = data[0]; // Assuming you want to display the first movie
            document.getElementById("movie-title").textContent = `Movie Title: ${movie.title}`;
            document.getElementById("movie-runtime").textContent = `movie-runtime: ${movie.runtime}`;
            document.getElementById("movie-capacity").textContent = `Capacity: ${movie.capacity}`;
            document.getElementById("movie-description").textContent = `Description: ${movie.description}`;
            document.getElementById("movie-poster").src = movie.poster;
        })
        .catch((error) => {
            console.error("Error fetching movie data:", error);
        });

    // Handle form submission (you can add your booking logic here)
    const bookingForm = document.querySelector("form");
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get form input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const tickets = document.getElementById("tickets").value;

        // You can now use this data to implement your booking logic and send it to the server
        // For example, you can make a POST request to the server to complete the booking process
        // Make sure to handle the response accordingly
    });
});

    