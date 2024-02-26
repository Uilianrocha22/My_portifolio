import { useState } from "react";

import styles from "./NavbarIcons.module.scss";

export default function NavbarIcons() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        onClick={() => setActiveNav("#containerNavbar")}
        className={activeNav === "#containerNavbar" ? `${styles.active}` : "#"}
        href="#containerNavbar"
      >
        Home
      </a>
      <a
        href="#aboutcontainer"
        onClick={() => setActiveNav("#aboutcontainer")}
        className={activeNav === "#aboutcontainer" ? `${styles.active}` : ""}
      >
        Sobre
      </a>
      <a
        href="#tecnologiesContainer"
        onClick={() => setActiveNav("#tecnologiesContainer")}
        className={
          activeNav === "#tecnologiesContainer" ? `${styles.active}` : ""
        }
      >
        Tecnologias
      </a>
      <a
        href="#projectsSection"
        onClick={() => setActiveNav("#projectsSection")}
        className={activeNav === "#projectsSection" ? `${styles.active}` : ""}
      >
        Projetos
      </a>
    </nav>
  );
}
