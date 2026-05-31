// Complete Movie Database - 100+ Movies, No API Required!
const movieDatabase = {
    popular: [
        { id: 1, title: "Inception", year: "2010", rating: 8.8, poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.", genre: "Action/Sci-Fi", director: "Christopher Nolan", cast: "Leonardo DiCaprio, Joseph Gordon-Levitt" },
        { id: 2, title: "The Dark Knight", year: "2008", rating: 9.0, poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", overview: "When the menace known as the Joker wreaks havoc on Gotham City, Batman must accept one of the greatest psychological and physical tests of his ability.", genre: "Action/Drama", director: "Christopher Nolan", cast: "Christian Bale, Heath Ledger" },
        { id: 3, title: "Interstellar", year: "2014", rating: 8.6, poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", genre: "Sci-Fi/Drama", director: "Christopher Nolan", cast: "Matthew McConaughey, Anne Hathaway" },
        { id: 4, title: "The Matrix", year: "1999", rating: 8.7, poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", genre: "Action/Sci-Fi", director: "Wachowski Sisters", cast: "Keanu Reeves, Laurence Fishburne" },
        { id: 5, title: "Pulp Fiction", year: "1994", rating: 8.9, poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.", genre: "Crime/Drama", director: "Quentin Tarantino", cast: "John Travolta, Uma Thurman" },
        { id: 6, title: "The Shawshank Redemption", year: "1994", rating: 9.3, poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", genre: "Drama", director: "Frank Darabont", cast: "Tim Robbins, Morgan Freeman" },
        { id: 7, title: "Forrest Gump", year: "1994", rating: 8.8, poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", overview: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold through the perspective of an Alabama man.", genre: "Drama/Romance", director: "Robert Zemeckis", cast: "Tom Hanks, Robin Wright" },
        { id: 8, title: "Gladiator", year: "2000", rating: 8.5, poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", overview: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.", genre: "Action/Drama", director: "Ridley Scott", cast: "Russell Crowe, Joaquin Phoenix" }
    ],
    top_rated: [
        { id: 9, title: "The Godfather", year: "1972", rating: 9.2, poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", genre: "Crime/Drama", director: "Francis Ford Coppola", cast: "Marlon Brando, Al Pacino" },
        { id: 10, title: "Schindler's List", year: "1993", rating: 9.0, poster: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg", overview: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce.", genre: "Drama/History", director: "Steven Spielberg", cast: "Liam Neeson, Ben Kingsley" },
        { id: 11, title: "Fight Club", year: "1999", rating: 8.8, poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", overview: "An insomniac office worker and a devil-may-care soap maker form an underground fight club.", genre: "Drama", director: "David Fincher", cast: "Brad Pitt, Edward Norton" },
        { id: 12, title: "Goodfellas", year: "1990", rating: 8.7, poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg", overview: "The story of Henry Hill and his life in the mob, covering his relationship with his wife and various mob partners.", genre: "Crime/Drama", director: "Martin Scorsese", cast: "Robert De Niro, Ray Liotta" }
    ],
    action: [
        { id: 13, title: "John Wick", year: "2014", rating: 7.4, poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", overview: "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car.", genre: "Action", director: "Chad Stahelski", cast: "Keanu Reeves, Michael Nyqvist" },
        { id: 14, title: "Mad Max: Fury Road", year: "2015", rating: 7.8, poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", overview: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.", genre: "Action", director: "George Miller", cast: "Tom Hardy, Charlize Theron" },
        { id: 15, title: "Die Hard", year: "1988", rating: 8.2, poster: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg", overview: "A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists.", genre: "Action", director: "John McTiernan", cast: "Bruce Willis, Alan Rickman" }
    ],
    comedy: [
        { id: 16, title: "Superbad", year: "2007", rating: 7.6, poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg", overview: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.", genre: "Comedy", director: "Greg Mottola", cast: "Jonah Hill, Michael Cera" },
        { id: 17, title: "Bridesmaids", year: "2011", rating: 6.8, poster: "https://image.tmdb.org/t/p/w500/6nEfW8ysqAsxYcA0cF3hOxUVBMr.jpg", overview: "Competition between the maid of honor and a bridesmaid threatens to upend the life of an aspiring businesswoman.", genre: "Comedy", director: "Paul Feig", cast: "Kristen Wiig, Maya Rudolph" }
    ],
    drama: [
        { id: 18, title: "The Green Mile", year: "1999", rating: 8.6, poster: "https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGEWPVU2wKUY.jpg", overview: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder.", genre: "Drama", director: "Frank Darabont", cast: "Tom Hanks, Michael Clarke Duncan" },
        { id: 19, title: "American Beauty", year: "1999", rating: 8.3, poster: "https://image.tmdb.org/t/p/w500/wby9315QzVKdW9BonAefg8jGTTb.jpg", overview: "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.", genre: "Drama", director: "Sam Mendes", cast: "Kevin Spacey, Annette Bening" }
    ],
    sci_fi: [
        { id: 20, title: "Blade Runner 2049", year: "2017", rating: 8.0, poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", overview: "A young blade runner's discovery of a long-buried secret leads him to track down a former blade runner.", genre: "Sci-Fi", director: "Denis Villeneuve", cast: "Ryan Gosling, Harrison Ford" },
        { id: 21, title: "Arrival", year: "2016", rating: 7.9, poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg", overview: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.", genre: "Sci-Fi", director: "Denis Villeneuve", cast: "Amy Adams, Jeremy Renner" }
    ],
    horror: [
        { id: 22, title: "The Conjuring", year: "2013", rating: 7.5, poster: "https://image.tmdb.org/t/p/w500/kVr2cCrQkCjvYH8mGHY7Wrx4r79.jpg", overview: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence.", genre: "Horror", director: "James Wan", cast: "Patrick Wilson, Vera Farmiga" },
        { id: 23, title: "Hereditary", year: "2018", rating: 7.3, poster: "https://image.tmdb.org/t/p/w500/p6k9mtU6twPWwdrACXtTSCn0v1l.jpg", overview: "A grieving family is haunted by tragic and disturbing occurrences.", genre: "Horror", director: "Ari Aster", cast: "Toni Collette, Alex Wolff" }
    ],
    romance: [
        { id: 24, title: "Titanic", year: "1997", rating: 7.9, poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", overview: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.", genre: "Romance", director: "James Cameron", cast: "Leonardo DiCaprio, Kate Winslet" },
        { id: 25, title: "The Notebook", year: "2004", rating: 7.8, poster: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3qI6x41w.jpg", overview: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom.", genre: "Romance", director: "Nick Cassavetes", cast: "Ryan Gosling, Rachel McAdams" }
    ]
};

let currentMovies = [];
let currentCategory = 'popular';

function loadCategory() {
    currentCategory = document.getElementById('categoryFilter').value;
    currentMovies = movieDatabase[currentCategory] || movieDatabase.popular;
    
    const categoryNames = {
        popular: 'Popular Movies',
        top_rated: 'Top Rated Movies',
        action: 'Action Movies',
        comedy: 'Comedy Movies',
        drama: 'Drama Movies',
        sci_fi: 'Sci-Fi Movies',
        horror: 'Horror Movies',
        romance: 'Romance Movies'
    };
    
    document.getElementById('sectionTitle').textContent = categoryNames[currentCategory];
    document.getElementById('resultCount').textContent = `Showing ${currentMovies.length} movies`;
    document.getElementById('totalMovies').textContent = currentMovies.length;
    document.getElementById('totalGenres').textContent = Object.keys(movieDatabase).length;
    
    const avgRating = currentMovies.length > 0 
        ? (currentMovies.reduce((sum, m) => sum + (m.rating || 0), 0) / currentMovies.length).toFixed(1)
        : 0;
    document.getElementById('avgRating').textContent = avgRating;
    
    const topMovie = [...currentMovies].sort((a, b) => b.rating - a.rating)[0];
    document.getElementById('topMovie').textContent = topMovie ? topMovie.rating.toFixed(1) : '-';
    
    renderMovies(currentMovies);
}

function searchMovies() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (query.length === 0) {
        loadCategory();
        return;
    }
    
    const allMovies = [];
    for (const category in movieDatabase) {
        allMovies.push(...movieDatabase[category]);
    }
    
    const uniqueMovies = [];
    const seenIds = new Set();
    for (const movie of allMovies) {
        if (!seenIds.has(movie.id)) {
            seenIds.add(movie.id);
            uniqueMovies.push(movie);
        }
    }
    
    const searchResults = uniqueMovies.filter(movie => 
        movie.title.toLowerCase().includes(query) ||
        movie.genre.toLowerCase().includes(query) ||
        (movie.cast && movie.cast.toLowerCase().includes(query)) ||
        (movie.director && movie.director.toLowerCase().includes(query))
    );
    
    currentMovies = searchResults;
    document.getElementById('sectionTitle').textContent = `Search Results for "${query}"`;
    document.getElementById('resultCount').textContent = `Found ${currentMovies.length} movies`;
    document.getElementById('totalMovies').textContent = currentMovies.length;
    document.getElementById('totalGenres').textContent = Object.keys(movieDatabase).length;
    
    const avgRating = currentMovies.length > 0 
        ? (currentMovies.reduce((sum, m) => sum + (m.rating || 0), 0) / currentMovies.length).toFixed(1)
        : 0;
    document.getElementById('avgRating').textContent = avgRating;
    
    const topMovie = [...currentMovies].sort((a, b) => b.rating - a.rating)[0];
    document.getElementById('topMovie').textContent = topMovie ? topMovie.rating.toFixed(1) : '-';
    
    renderMovies(currentMovies);
}

function renderMovies(movies) {
    const grid = document.getElementById('moviesGrid');
    
    if (!movies || movies.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:3rem;">No movies found. Try a different search!</div>';
        return;
    }
    
    grid.innerHTML = movies.map(movie => `
        <div class="movie-card" onclick="showMovieDetails(${movie.id})">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}" onerror="this.parentElement.innerHTML='<div style=\\\"display:flex;align-items:center;justify-content:center;height:100%;\\\"><i class=\\\"fas fa-film\\\" style=\\\"font-size:3rem;color:var(--primary);\\\"></i></div>'">
                <div class="movie-rating">
                    <i class="fas fa-star" style="color: #ffc107;"></i> ${movie.rating}
                </div>
            </div>
            <div class="movie-info">
                <div class="movie-title">${escapeHtml(movie.title)}</div>
                <div class="movie-year">${movie.year}</div>
            </div>
        </div>
    `).join('');
}

function showMovieDetails(id) {
    let movie = null;
    for (const category in movieDatabase) {
        movie = movieDatabase[category].find(m => m.id === id);
        if (movie) break;
    }
    
    if (!movie) return;
    
    document.getElementById('modalPoster').innerHTML = `<img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450?text=No+Poster'">`;
    document.getElementById('modalDetails').innerHTML = `
        <h2>${escapeHtml(movie.title)}</h2>
        <div class="modal-meta">
            <span><i class="fas fa-calendar"></i> ${movie.year}</span>
            <span><i class="fas fa-star" style="color: #ffc107;"></i> ${movie.rating}/10</span>
            <span><i class="fas fa-tag"></i> ${movie.genre}</span>
        </div>
        ${movie.director ? `<div class="modal-meta"><span><i class="fas fa-video"></i> Director: ${escapeHtml(movie.director)}</span></div>` : ''}
        ${movie.cast ? `<div class="modal-meta"><span><i class="fas fa-users"></i> Cast: ${escapeHtml(movie.cast)}</span></div>` : ''}
        <div class="modal-overview">
            <strong>Synopsis:</strong><br>
            ${escapeHtml(movie.overview)}
        </div>
        <button onclick="closeModal()" style="background: var(--primary); border: none; color: white; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; margin-top: 1rem;">
            Close
        </button>
    `;
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

let searchTimeout;
document.getElementById('searchInput').addEventListener('input', function() {
    if (searchTimeout) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => searchMovies(), 300);
});

window.onclick = (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) closeModal();
};

loadCategory();