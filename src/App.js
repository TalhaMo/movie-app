import React,{useState} from 'react';
import moviesData from './components/MoviesData'
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './components/Search';


function App() {
  const [listMovies, setListMovies]=useState(moviesData)

  const addmovie=(e,newMovie)=>{
    e.preventDefault();
setListMovies([...listMovies,newMovie])
  }
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);
  
  return (
    <div className="App">
      <div className="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
      <h2>Movie App React Hooks</h2>
     <AddMovie addmovie={addmovie}/>
     <Search className="nav-link" setNameSearch={setNameSearch} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch} />
     </div>
     <MovieList listMovies={listMovies} nameSearch={nameSearch} ratingSearch={ratingSearch}/>
    

    </div>
  );
}

export default App;
