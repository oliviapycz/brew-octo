import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import { Beer } from './Beer.js'

function App() {
  const [beerList, setBeerList] = useState([])
  
  useEffect(() => {
    axios.get("https://api.punkapi.com/v2/beers")
    .then(response => {
      setBeerList(response.data)
    })
  }, [])

  return (
    <div className="App">
      <div>
        <ul>
          {beerList.map(item => (
            <Beer item={item}></Beer>
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
