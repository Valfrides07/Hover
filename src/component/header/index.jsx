import { useState } from "react";
import styles from "./header.module.css";

function Header({ onSearch }) {
  const [busca, setBusca] = useState("");

  return (
    <header className={styles.header}>
      <img className={styles.Logo} src="/Logo/Logo_Hover.png" alt="Logo" />

      <nav className={styles.Nav_header}>
        <div className={styles.Div_BuscarHeader}>

          <details className={styles.DetailsCategorias}>
            <summary className={styles.CategoriasHeader}>Categorias ▾</summary>

            <ul className={styles.ulCategorias}>
              <li>Plataformas:</li>
              <li><button className={styles.liOpcoes} onClick={() => onSearch("console")}>Consoles</button></li>
              <li><button className={styles.liOpcoes} onClick={() => onSearch("pc")}>PC</button></li>

              <li>Gêneros:</li>
              <li><button className={styles.liOpcoes} onClick={() => onSearch("rpg")}>RPG</button></li>
              <li><button className={styles.liOpcoes} onClick={() => onSearch("casual")}>Casual</button></li>
            </ul>
          </details>

          <input
            className={styles.BuscarHeader}
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar..."
          />

          <button className={styles.BtnBuscar} onClick={() => onSearch(busca)}>
            Buscar
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Header;