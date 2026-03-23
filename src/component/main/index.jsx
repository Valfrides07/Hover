// landing page
import styles from "./hero.module.css";

function Hero() {
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

          <label className={styles.SearchGame} for="search">
            Faça a sua busca:
          </label>
        
          {/* Buscar */}
          <input
            className={styles.inputBuscar}
            type="search"
            name="search"
            id="search"
            placeholder="Buscar jogos, gêneros ou plataformas..."/>
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
