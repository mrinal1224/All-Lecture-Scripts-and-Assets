```jsx
function WatchList() {
    const genreIds = {
        28: "Action",
        12: "Adventure"
        // some data here 
    };

    const [favourites, setFavourites] = useState([]);
    const [genres, setGenres] = useState([]);
    // state for filtering genres
    const [currGenre, setCurrGenre] = useState('All Genres');
    // state for sorting by rating 
    const [rating, setRating] = useState(0);

    useEffect(() => {
        (function () {
            let moviesFromLS = localStorage.getItem('imdb');
            moviesFromLS = JSON.parse(moviesFromLS) || [];
            setFavourites(moviesFromLS);

            axios
                .get(
                    // URL here
                )
                .then((res) => {
                    setMovies(res.data.results);
                });
        })();
    }, [pageNum]);

    // useEffect for genre
    useEffect(() => {
        let temp = movies.map((movie) => genreIds[movie.genre_ids[0]]);
        setGenres(["All genres", ...temp]);
    });

    // creating filter func acc to genre
    let filteredArray = [];

    // genre filter 
    filteredArray = currGenre === 'All Genres' ? favourites : favourites.filter((movie) => genreIds[movie.genre_ids[0]]);

    // condition for sorting movies according to rating
    if (rating === -1) {
        filteredArray = filteredArray.sort(function (objA, objB) {
            return objB.vote_average - objA.vote_average;
        });
    }

    if (rating === 1) {
        filteredArray = filteredArray.sort(function (objA, objB) {
            return objA.vote_average - objB.vote_average;
        });
    }

    // delete functionality
    const del = (movie) => {
        let newArray = favourites.filter((m) => m.id !== movie.id);
        setFavourites([...newArray]);
        localStorage.setItem('imdb', JSON.stringify(newArray));
    };

    // last class code 
    return (
        <>
            <div className="mt-6 flex space-x-2 justify-center">
                {genres.map((genre) => (
                    <button className={currGenre === genre ? 'm-2 text-lg px-2 bg-blue-400 text-white rounded-xl font-bold' : 'm-2 text-lg px-2 bg-gray-400 text-white rounded-xl font-bold'}
                        onClick={() => {
                            setCurrGenre(genre);
                        }}>
                        {genre}
                    </button>
                ))}
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
                            <th>
                                <div className="flex">
                                    {/* image showing arrow for up rating */}
                                    <img
                                        src=""
                                        onClick={() => {
                                            setRating(1);
                                        }}
                                    />
                                    <div>Ratings</div>
                                    {/* image showing arrow for down rating */}
                                    <img
                                        src=""
                                        onClick={() => {
                                            setRating(-1);
                                        }}
                                    />
                                </div>
                            </th>
                            <th>
                                <div className="flex">
                                    <div>Popularity</div>
                                </div>
                            </th>
                            <th>
                                <div className="flex">
                                    <div>Genre</div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {/* updated this to filteredArray as we are making changes in this array */}
                        {filteredArray.map((movie) => (
                            <tr className="hover:bg-gray-50" key={movie.id}>
                                <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                                    <img className="h-[6rem] w-[10rem] object-fit" src="" alt="" />
                                    <div className="font-medium text-gray-700 text-sm">{movie.title}</div>
                                </td>
                                <td className="pl-6 py-4">{movie.vote_average}</td>
                                <td className="pl-6 py-4">{movie.popularity}</td>
                                <td className="pl-2 py-4">{genreIds[movie.genre_ids[0]]}</td>
                                {/* adding delete button */}
                                <td className="pl-2 py-4">
                                    <button className="text-red-600" onClick={() => del(movie)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default WatchList;


```