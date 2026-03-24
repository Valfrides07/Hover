// Rotas de pastas
import { useState } from "react";
import "./App.css";

// rotas

// header fica fora do escopo das rotas para caso nao seja necessario aparacer em outras abas
import Header from "./component/header/index";

// Section superior
import Hero from "./component/main/index";

// footer
// import footer from "./component/footer/index"

// API key
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  // vai servir para armazenar dados de busca do "Jogos" e "setJogos"
  const [jogos, setJogos] = useState([]);

  // function de busca para jogos
  async function buscarJogos(nome) {
    
    try {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${nome}`,
      );

      const dados = await res.json();
      setJogos(dados.results);
    } 
    catch (erro) {
      console.log("Erro na API", erro);
    }
  }

  return (
    <div>
    {/* input de busca */}
      <Header onSearch={buscarJogos} />

      {/* mostra os jogos */}
      <Hero jogos={jogos} />
    </div>
  );
}

export default App;
