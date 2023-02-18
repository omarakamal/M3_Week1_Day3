// import { useState } from "react"
// import movieData from '../movies-data.json'


// function MovieList(){
//    const [movies,setMovies] = useState(movieData)
//     function deleteMovie(movieId){
//        const filteredMovies = movies.filter((movie)=>{
//             return movie._id !== movieId
//         })
//         setMovies(filteredMovies)
//     }
//     function movieSort(){
//         const myMovie = [...movies]
//         myMovie.sort((a,b)=>{
//             if(a.title<b.title){
//                 return -1
//             }
//             else if(a.title>b.title){
//                 return 1
//             }
//         })
//         console.log(myMovie)
//         console.log(myMovie)

//         setMovies(myMovie)
//     }
//     return(
//         <div>
//             <h1>Movie list</h1>
//             <button onClick={movieSort}>Sort</button>
//             {movies.map((oneMovie)=>{
//                 return(
//                 <div key={oneMovie._id} className="MovieCard">
//                     <h3>{oneMovie.title}</h3>
//                     <p>Director: {oneMovie.director}</p>
//                     <p>Rating: {oneMovie.IMDBRating}</p>
//                     <button onClick={()=>deleteMovie(oneMovie._id)} className="btn-delete">Delete</button>
//                 </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default MovieList



// extracted MovieCard
import { useState } from 'react';
import moviesData from '../movies-data.json';
import MovieCard from './MovieCard';

function MovieList() {
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };
  function sortMovies(){
    const sortedArray = [...movies]
    sortedArray.sort((a,b)=>{
        if(a.title<b.title){
            return -1
        }
        else if(b.title<a.title){
            return 1
        }
        return 0
    })
    setMovies(sortedArray)
  }
  function sortMoviesRatings(){
    const sortedArray = [...movies]
    sortedArray.sort((a,b)=>{
        if(a.IMDBRating<b.IMDBRating){
            return 1
        }
        else if(b.IMDBRating<a.IMDBRating){
            return -1
        }
        return 0
    })
    setMovies(sortedArray)
  }


  return (
    <div>
      <h2>Movie List</h2>
      <button onClick={sortMoviesRatings}>sort movies by Rating</button>
      <button onClick={sortMovies}>Sort Movies</button>
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie}/>
      })}
    </div>
  )
}


export default MovieList;

