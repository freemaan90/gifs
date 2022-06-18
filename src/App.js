import React from 'react'
import { Link, Route } from 'wouter'
import ListOfGifs from './components/ListOfGifs'
import GifDetails from './components/GifDetails'
import './App.css'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h2>App</h2>
        <Link to='/gif/panda'>Gif de pandas</Link>
        <Link to='/gif/programming'>Gif de programming</Link>
        <Link to='/gif/argentina'>Gif de argentina</Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
        <Route path="/gif/:keyword/#:id" component={GifDetails} />
      </section>
    </div>
  );
}

export default App;
