// Rotas de pastas
import { useState, useEffect } from "react";
import "./App.css";
// rotas

// header fica fora do escopo das rotas para caso nao seja necessario aparacer em outras abas
import Header from "./component/header/index"

// Section superior
import Hero from "./component/main/index";

// footer 
// import footer from "./component/footer/index"

function App() {

  // function de busca para jogos
  const [Jogos, setJogos ] = useState([])

  async function buscarJogos(nome) {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${nome}`
    )
    const data = await res.json()
    setJogos(data.results)
    
  }

  return (
    <div>
      <Header onSearch={buscarJogos}/>
    
      <Hero onSearch={buscarJogos}/>
    
    </div>
  );
}

export default App;
