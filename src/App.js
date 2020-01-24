import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

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
            <li key={item.id}>
              <article>
                <img src={item.image_url} ></img>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </article>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
