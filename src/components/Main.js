import Movie from "./Movie";

function Main() {

    const moviesArr = [
        {
            id: 1,
            title: 'The Godfather',
            year: 1972,
            genres: ['Crime', 'Drama'],
            imgURL:
                'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg',
            rating: null
        },
        {
            id: 2,
            title: 'Forrest Gump',
            year: 1994,
            genres: ['Drama', 'Romance'],
            imgURL:
                'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg',
            rating: null
        },
        {
            id: 3,
            title: 'Gladiator',
            year: 2000,
            genres: ['Action', 'Adventure', 'Drama'],
            imgURL:
                'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
            rating: null
        },
        {
            id: 4,
            title: 'Amélie',
            year: 2001,
            genres: ['Comedy', 'Romance'],
            imgURL:
                'https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
            rating: null
        },
        {
            id: 5,
            title: 'The Matrix',
            year: 1999,
            genres: ['Action', 'Sci-Fi'],
            imgURL:
                'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
            rating: null
        },
        {
            id: 6,
            title: 'Up',
            year: 2009,
            genres: ['Animation', 'Adventure', 'Comedy', 'Family'],
            imgURL:
                'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
            rating: null
        },
        {
            id: 7,
            title: 'Life Is Beautiful',
            year: 1997,
            genres: ['Comedy', 'Drama', 'Romance', 'War'],
            imgURL:
                'https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
            rating: null
        },
        {
            id: 8,
            title: 'Star Wars: Episode V - The Empire Strikes Back',
            year: 1980,
            genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
            imgURL:
                'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
            rating: null
        }
    ];


    return (
        <main>
            { moviesArr.map( movie => {
                return <Movie key={movie.id} title={movie.title} year={movie.year} />
            })}
        </main>
    )
}

export default Main;