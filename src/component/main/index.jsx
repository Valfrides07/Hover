import styles from "./hero.module.css";
import GameCard from "../GameCards/Cards";

function Hero({ jogos, jogosDesconto }) {
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

        {/* Div do campo de busca */}
        <div className={styles.Div_Input}>
          
          <label className={styles.SearchGame} htmlFor="search">
            Faça a sua busca:
          </label>

          <input
            className={styles.inputBuscar}
            type="search"
            placeholder="Buscar jogos..."/>
        </div>
      </section>

      {/* faixa de desccontos */}
      <section className={styles.SectionDescontosdaSemana}>
        <h2 className={styles.h2DescontosdaSemana}>
          Esses são os jogos com{" "}
          <span className={styles.SpanDescontosSemana}>Descontos:</span>
        </h2>

        {/* 3 cards com valores baixos */}
        <div className={styles.ContainerCards}>
          {jogosDesconto && jogosDesconto.length > 0 ? (
            jogosDesconto.map((jogo) => (
              <GameCard key={jogo.id} jogo={jogo} />
            ))
          ) : (
            <p style={{ color: "#fff", gridColumn: "1 / -1", textAlign: "center" }}>
              Carregando promoções...
            </p>
          )}
        </div>
      </section>

      {/* Faixa que mostra alguns games */}
      <section className={styles.SectionConteudo}>
        <h1 className={styles.H1_conteudo}>Mais Populares:</h1>

        <div className={styles.ContainerCards}>
          {jogos && jogos.length > 0 ? (
            jogos.map((jogo) => (
              <GameCard key={jogo.id} jogo={jogo} />
            ))
          ) : (
            <p>Carregando jogos populares...</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Hero;