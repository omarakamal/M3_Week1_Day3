import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Footer from './components/Footer';
import { useState } from 'react';
import StudentList from './components/StudentList';
import ProjectList from './components/ProjectList';
import MovieList from './components/MovieList';
import Spinner from './components/Spinner';

function App() {

  const [isLoading,setIsLoading]=useState(false)

  if(isLoading){
    return <Spinner></Spinner>
  }
  else{
    return(
      <div className='App'>
        <MovieList></MovieList>
      </div>
    )
  }
  // return (
  //   <div className='App'>
  //    {/* <StudentList></StudentList>
  //    <ProjectList></ProjectList> */}
  //    <MovieList></MovieList>
  //   </div>
  // );
}

export default App;
