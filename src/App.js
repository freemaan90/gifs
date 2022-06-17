import React, {useState} from 'react'
import './App.css';

const GIFS = [
  `https://media3.giphy.com/media/WJjLyXCVvro2I/giphy.gif?cid=ecf05e47bd7c52dac7526223075e6ad61dc867860a792cc2&rid=giphy.gif&ct=g`,
  `https://media1.giphy.com/media/fxfuiruxVLbdb2fiAy/giphy.webp`
]
const diferentGifts = [
  `https://media0.giphy.com/media/vJ6ikzK0kL5h719fXc/giphy.webp`,
  `https://media1.giphy.com/media/IZvPPwILs6ZGFbvLdO/giphy.webp`
]
function App() {

  const [ value, updateValue ] = useState(GIFS)
  return (
    <div className="App">
      <section className="App-content">
        {
          value.map(gif => <img src={gif} alt="gif" />)
        }
        <button onClick={ ()=> updateValue(diferentGifts) }>Cambiar Gifs</button>
      </section>
    </div>
  );
}

export default App;
