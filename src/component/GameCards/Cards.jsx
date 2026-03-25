import styles from "./GameCard_CSS.module.css";

// Cards dos jogos na SectionConteudo
function GameCard({ jogo }) {
  return (
    <div className={styles.gameCard}>
      {jogo.background_image && (
        <img
          className={styles.gameImage}
          src={jogo.background_image}
          alt={jogo.name}
        />
      )}

      <div>
        <h3 className={styles.gameTitle}>{jogo.name}</h3>

        {Array.isArray(jogo.platforms) && jogo.platforms.length > 0 && (
          <div className={styles.platforms}>
            {jogo.platforms.map((plat) => (
              <span key={plat.platform.id} className={styles.platformTag}>
                {plat.platform.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GameCard;