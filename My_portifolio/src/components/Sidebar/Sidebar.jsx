import SocialNetworks from "./SocialNetworks/SocialNetworks";
import InformationContainer from "./InformationContainer/InformationContainer";
import Avatar from "../../img/foto-m.png";
import pdf from "../../pdf/curriculoUilian.pdf";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <aside
      className="animate__animated animate__fadeInLeft animate__delay-1s"
      id={styles.sidebar}
    >
      <img src={Avatar} alt="Uilian Oliveira" />

      <h1>Desenvolvedor Front-end</h1>
      <SocialNetworks />
      <InformationContainer />
      <a href={pdf} target="_blank" className={styles.btnSidebar}>
        Download Cv
      </a>
    </aside>
  );
}
