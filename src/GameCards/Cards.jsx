function GameCard({ jogo }) {
  return (
    <div>
      <img src={jogo.background_image} alt={jogo.name} width="200" />
      <h3>{jogo.name}</h3>
    </div>
  );
}

export default GameCard;