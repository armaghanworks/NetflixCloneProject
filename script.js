        const movies = [
            { rank: 1, title: "Project Power", image: "https://static1.tribute.ca/poster/660x980/project-power-netflix-146610.jpg", description: "An intense action thriller you can't miss." },
            { rank: 2, title: "Interstellar", image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Interstellar is a visually stunning, mind-bending sci-fi journey that explores love, sacrifice, and the fate of humanity." },
            { rank: 3, title: "The Gray Man", image: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQUD48aTvgnNIK_P_foQiwRKU4IwpUcRPzFCfZewwbyKRhhJH85emu4l8_T62RWAcDhM2xogaJ6wKIguaT15235gkbgpL9rxMIPoZTyIGmi7cOnMsq3lDxHrPxw3OkPDhAemM8MwVev0uQ-vyvYAdEYg-.jpg", description: "A story of hope, struggle, and triumph." },
            { rank: 4, title: "the Batman", image: "https://m.media-amazon.com/images/S/pv-target-images/3de84cca07fc963b66a01a5465c2638066119711e89c707ce952555783dd4b4f.jpg", description: "A captivating journey of courage and resilience." },
            { rank: 5, title: "The Old Guard", image: "https://lh5.googleusercontent.com/proxy/xcAtivY8Ie9W02JRPrIoMDU4HCAA2zt1ULvZjuT_jJiJ3DOFslrIraFkuBfDXxgQqhzUXX7iWkx8YL4Z_cY0YzOJm1g", description: "A historical saga that defines legacy." },
            { rank: 6, title: "Spider-Man: No Way Home", image: "https://resizing.flixster.com/8PNiwC2bpe9OecfYZSOVkvYC5vk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5NGM0Y2Q1LTAyYTItNGFjNC1hNWZhLWMzYjJjOTdjMTFhOS5qcGc=", description: "The multiverse brings surprises!" },
            { rank: 7, title: "6 Underground", image: "https://m.media-amazon.com/images/M/MV5BNTNmZDgzMmMtMzJhMy00NGI3LWI5YTktYjg5MTllZmYyYTMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "A spy action film like no other." },
        ];

        const tvShows = [
            { rank: 1, title: "Stranger Things", image: "https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==", description: "A thrilling adventure of mystery and friendship." },
            { rank: 2, title: "Game Of thrones", image: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/gotposterbig.png", description: "An epic fantasy series filled with magic and danger." },
            { rank: 3, title: "Dark", image: "https://resizing.flixster.com/lpJkDxnEFNQT1OWJjnmYfvpAHJ0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI2NjgyOS53ZWJw", description: "A high-stakes drama about a chemistry teacher turned criminal mastermind." },
            { rank: 4, title: "The Breaking Bad", image: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "A deep dive into the British monarchy." },
            { rank: 5, title: "Money Heist", image: "https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==", description: "A captivating tale of heists and drama." },
            { rank: 6, title: "1899", image: "https://m.media-amazon.com/images/M/MV5BY2UyM2YwZTEtOTk5Zi00ODhkLTg2ZjctMzIxMTViZjFmN2Y4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "A thrilling adventure of mystery and friendship." },
            { rank: 7, title: "Vikings", image: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/vikings_0.png", description: "A thrilling adventure of mystery and friendship." },



        ];

        let currentCategory = "movies"; // Default category is movies
        const trendingCarousel = document.getElementById("trending-carousel");
        const categoryFilter = document.getElementById("category-filter");

        // Function to load cards dynamically based on the category
        function loadCards() {
            const data = currentCategory === "movies" ? movies : tvShows;
            let content = "";
            data.forEach((item) => {
                content += `
          <div class="movie-card">
            <div class="card-inner">
              <div class="card-front">
                <div class="rank-badge">${item.rank}</div>
                <img src="${item.image}" alt="${item.title}">
              </div>
              <div class="card-back">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
              </div>
            </div>
          </div>
        `;
            });
            trendingCarousel.innerHTML = content;
        }

        // Handle category change (Movies or TV Shows)
        categoryFilter.addEventListener("change", (e) => {
            currentCategory = e.target.value;
            loadCards();
        });

        // Event listeners for left and right hover effects (same as before)
        trendingCarousel.addEventListener("mousemove", (e) => {
            const width = trendingCarousel.offsetWidth;
            const mouseX = e.pageX - trendingCarousel.offsetLeft;

            if (mouseX < width / 3) {
                trendingCarousel.style.transform = "translateX(10%)";
            } else if (mouseX > (2 * width) / 3) {
                trendingCarousel.style.transform = "translateX(-10%)";
            } else {
                trendingCarousel.style.transform = "translateX(0)";
            }
        });

        trendingCarousel.addEventListener("mouseleave", () => {
            trendingCarousel.style.transform = "translateX(0)";
        });

        // Initial load
        loadCards();
        document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});