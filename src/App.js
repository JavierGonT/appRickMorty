import imagenRickMorty from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

/**La interrogación de la funhción de abajo es por si la variable está rellena o
 * es true, que es lo mismo. En caso contrario se usan los : si está vacío o es false
 * ocurre lo que hay entre paréntesis
 */

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>

        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imagenRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
        )}

      </header>
    </div>
  );
}

export default App;
