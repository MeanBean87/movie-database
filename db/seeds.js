const seedMovies = async (pool) => {
    const movies = [
        { movie_name: "E.T." },
        { movie_name: "The Goonies" },
        { movie_name: "Back to the Future" },
        { movie_name: "The Breakfast Club" },
        { movie_name: "Ferris Bueller's Day Off" },
        { movie_name: "Top Gun" },
        { movie_name: "The Princess Bride" },
        { movie_name: "Dirty Dancing" },
        { movie_name: "The Karate Kid" },
        { movie_name: "Ghostbusters" }
    ];
  
    await pool.query(`INSERT INTO movies (movie_name) VALUES ?`, [
      movies.map((movie) => [movie.movie_name]),
    ]);
};

const seedReviews = async (pool) => {
    const reviews = [
        {
            movie_id: 10,
            review: "This movie is great!"
        },
        {
            movie_id: 9,
            review: "This movie is terrible!"
        },
        {
            movie_id: 8,
            review: "This movie is awesome!"
        },
        {
            movie_id: 7,
            review: "This movie is awful!"
        },
        {
            movie_id: 6,
            review: "This movie is amazing!"
        },
        {
            movie_id: 5,
            review: "This movie is horrible!"
        },
        {
            movie_id: 4,
            review: "This movie is fantastic!"
        },
        {
            movie_id: 3,
            review: "This movie is terrible!"
        },
        {
            movie_id: 2,
            review: "This movie is great!"
        },
        {
            movie_id: 1,
            review: "This movie is awful!"
        }
    ];

    await pool.query(`INSERT INTO reviews (movie_id, review) VALUES ?`, [
        reviews.map((review) => [review.movie_id, review.review]),
      ]);
}

module.exports = {seedMovies, seedReviews};