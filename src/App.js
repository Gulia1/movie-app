import React ,{useState, useEffect} from "react";
import Navbar from './components/Layouts/Navbar';


import SearchMovie from "./components/movies/SearchMovie";
import Movies from "./components/movies/Movies";
import MovieDetails from "./components/movies/MovieDetails";



function App() {
  const [movies,setMovies] = useState([]);
  const [md,setMd] = useState(12);
  const [opened,setOpened] = useState({});
  const [searchString,setSearchString] = useState("");

  const fetchmovies = async () => {
    await fetch("https://api.themoviedb.org/3/movie/popular?api_key=7fc1adc111ef975d0d4c91d6f9ec26db&language=en-US&page=1")
      .then(data => data.json())
      .then(result => result.results)
      .then(listMovies => setMovies(listMovies));
  }

  const fetchSearchedMovie = async (query) => {
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7fc1adc111ef975d0d4c91d6f9ec26db&query=${query}`)
      .then(data => data.json())
      .then(result => result.results)
      .then(listMovies => setMovies(listMovies));
  }

  useEffect(() => {
    fetchmovies();
  }, [])




  return (
    <React.Fragment>
       < Navbar />
        <div className="container">
          <div className="row">
            <div className={"col-md-" + md}>
             <SearchMovie 
              fetchSearchedMovie={fetchSearchedMovie} 
              fetchmovies={fetchmovies}
              searchString={searchString}
              setSearchString={setSearchString}
              /> 
            <Movies 
              movies={movies} 
              setMd={setMd}
              setOpened={setOpened}
              />
            </div>

            {
              (Object.keys(opened).length > 0)
              ? (
                <MovieDetails
                  setOpened={setOpened}
                  setMd={setMd}
                  opened={opened}
                />
              )
              : null
            }
            
          </div>
        </div>
    </React.Fragment>
   
  );
}

export default App;
