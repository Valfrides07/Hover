// Rotas de pastas

import "./App.css";
// rotas

// header fica fora do escopo das rotas para caso nao seja necessario aparacer em outras abas
import Header from "./component/header/index"

// Section superior
import Hero from "./component/main/index";

// footer 
// import footer from "./component/footer/index"



function App() {
  return (
    <>
      <Header/>
    
      <Hero />
    
    </>
  );
}

export default App;
