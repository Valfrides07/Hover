import { useState, useEffect } from "react";
import "./App.css";

import Header from "./component/header/index";
import Hero from "./component/main/index";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  // Mais Populares
  const [jogos, setJogos] = useState([]);
             
  // Jogos com desconto
  const [jogosDesconto, setJogosDesconto] = useState([]); 

  // Carrega os 9 jogos mais populares
  async function carregarPopulares() {
    try {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating&page_size=9`
      );
      const dados = await res.json();
      setJogos(dados.results || []);
    } catch (erro) {
      console.error("Erro ao carregar populares:", erro);
    }
  }

  // Carrega 3 jogos com "valores baixos" usamndo os melhores avaliados
  async function carregarDescontos() {
    try {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating&page_size=3`
      );
      const dados = await res.json();
      setJogosDesconto(dados.results || []);
    } catch (erro) {
      console.error("Erro ao carregar descontos:", erro);
    }
  }

  // Busca do usuário (atualiza apenas a seção de populares)
  async function buscarJogos(nome) {
    if (!nome?.trim()) {
      carregarPopulares();
      return;
    }
    try {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURIComponent(nome.trim())}&ordering=-rating&page_size=9`
      );
      const dados = await res.json();
      setJogos(dados.results || []);
    } catch (erro) {
      console.error("Erro na busca:", erro);
    }
  }

  // Carrega tudo ao abrir a página
  useEffect(() => {
    carregarPopulares();
    carregarDescontos();
  }, []);

  return (
    <div>
      <Header onSearch={buscarJogos} />
      <Hero jogos={jogos} jogosDesconto={jogosDesconto} />
    </div>
  );
}

export default App;