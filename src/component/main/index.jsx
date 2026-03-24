// landing page
import styles from "./hero.module.css";
import { useState } from "react";

function Hero({ onSearch }) {
  const [busca, setBusca] = useState("")
  return (
    <main>
      <section className={styles.Section_Topo}>
      
        <div className={styles.BoasVindas}>

          <h1 className={styles.H1_Topo}>
            Busque a sua próxima aventura <br />
            com preço justo e qualidade.
          </h1>

          <p className={styles.P1_Topo}>
            Encontre as melhores lojas, notas da crítica e os próximos lançamentos
            em um só lugar.
          </p>
        </div>

        {/* Div do campo de  busca da home  */}
        <div className={styles.Div_Input}>

          <label className={styles.SearchGame} id="search" htmlFor="search">
            Faça a sua busca:
          </label>
        
          {/* Buscar */}
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          onKeyDown={(e) => {
            // para ser buscado ao clicar em Enter enão pérmite chamar a API caso o input esteja vazio
            if (e.key === "Enter" && busca.trim() !== "") {
              onSearch(busca.trim())
            }
          }}
          className={styles.inputBuscar}
          type="search"
          placeholder="Buscar jogos..."
        />
        </div>
        
      </section>

      {/* Section aonde esta a divisa */}

      <section className={styles.SectionDescontosdaSemana}>

        <h2 className={styles.h2DescontosdaSemana}>Esses são os jogos com 
        <span className={styles.SpanDescontosSemana}> Descontos:</span> </h2>
      
      </section>

      {/* section de conteudo */}
      <section className={styles.SectionConteudo}>
        <h1 className={styles.H1_conteudo}>Mais Populares:</h1>
      </section>
    </main>
  );
}

export default Hero;
