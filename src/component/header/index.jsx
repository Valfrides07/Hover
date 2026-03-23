import styles from "./header.module.css";

function header() {
  return (
    <header className={styles.header}>
        <img className={styles.Logo} src="/Logo/Logo_Hover.png" alt="Logo" />

      {/* redireciona para paginas */}
      <nav className={styles.Nav_header}>
        
        <div className={styles.Div_BuscarHeader}>

            {/* Adicionar aba para: Jogos ou Categorias */}
            <details className={styles.DetailsCategorias}>
              <summary className={styles.CategoriasHeader}>Categorias ▾</summary>
              <ul className={styles.ulCategorias}>

                <a className={styles.liOpcoes} href="https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Digital-825GB-Turismo/dp/B0FPGF9J2J/ref=asc_df_B0FPGF9J2J?mcid=e35e8387e5003a2a8fc3dd1971899a52&tag=googleshopp00-20&linkCode=df0&hvadid=709884703642&hvpos=&hvnetw=g&hvrand=8705934885956139560&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9219265&hvtargid=pla-2638339372472&psc=1&hvocijid=8705934885956139560-B0FPGF9J2J-&hvexpln=0&language=pt_BR">Consoles</a>
              
                <a className={styles.liOpcoes} href="https://www.kabum.com.br/computadores/pc/pc-gamer">PC</a>
              
                <a className={styles.liOpcoes} href="https://store.steampowered.com/?l=portuguese&%3Bsnr=1_4_4__125">Jogos</a>
              </ul>

            </details>
            
            {/* Input de buscar */}
            <input className={styles.BuscarHeader} 
            type="search" name="buscar" id="buscar" placeholder="Buscar..."/>
            
        </div>

      </nav>
    </header>
  );
}

export default header;
