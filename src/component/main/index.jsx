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

        <div className={styles.Div_Input}>

          <label className={styles.SearchGame} for="search">
            Faça a sua busca:
          </label>
        
          <input
            className={styles.inputBuscar}
            type="search"
            name="search"
            id="search"
            placeholder="Buscar jogos, gêneros ou plataformas..."/>
        </div>
      </section>

      {/* Section aonde esta a divisa */}

      <section className={styles.SectionFaixa}>
        <h1>Veja as noticias mais relevantes do mundo</h1>
      </section>

      {/* section de conteudo */}

      <section className={styles.SectionConteudo}>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta aspernatur maxime qui similique debitis aut adipisci rerum explicabo ullam recusandae. Distinctio, laboriosam dolorem est inventore recusandae dignissimos maiores quae fugit perspiciatis exercitationem dolores sit, rerum expedita iure commodi vero delectus! Porro enim animi dolore placeat pariatur quis mollitia cupiditate eaque nesciunt cum, rerum optio accusantium, laboriosam modi rem incidunt tempora! Quasi culpa dolorem veritatis hic molestiae sed repellendus est nostrum cum a aperiam nulla voluptatem, aspernatur provident adipisci dolor quos! Non dignissimos repellendus esse quisquam repudiandae rem voluptatem, dolorum alias ea in, sequi quasi autem earum accusantium soluta, neque reiciendis ducimus iusto nostrum quaerat numquam doloribus. Dolor ea dolorum quisquam accusantium, exercitationem amet odio sit deleniti eveniet porro tempora quasi adipisci nisi ducimus magni nam corrupti aperiam animi distinctio. Deserunt sequi accusantium deleniti architecto sapiente incidunt, doloremque esse magni aut suscipit velit dolore amet, voluptates neque explicabo, ab ipsa odit atque voluptatem tempora veniam aliquam illum saepe. Aut vitae placeat nisi praesentium consequuntur alias harum expedita! Facere corporis optio autem provident cum consequatur, nihil aspernatur quas ipsum molestiae at quibusdam et veritatis nam! Suscipit eos rerum veritatis a voluptates blanditiis esse voluptatem, omnis doloribus deleniti debitis dicta veniam possimus expedita. Voluptate dolore impedit eius velit? Aut facere quaerat harum natus, error asperiores, cum veniam, debitis quasi eum sunt repudiandae? Perferendis sequi dignissimos possimus reprehenderit. Beatae eius pariatur officiis assumenda est hic. Itaque quisquam mollitia pariatur illum! Culpa fuga, nulla dolorem explicabo ipsam veniam quis iusto velit aut rem molestiae provident!</h1>
      </section>
    </main>
  );
}

export default Hero;
