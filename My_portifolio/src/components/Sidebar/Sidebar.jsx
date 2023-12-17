import SocialNetworks from "./SocialNetworks/SocialNetworks";
import InformationContainer from "./InformationContainer/InformationContainer";
import Avatar from "../../img/foto-m.png";
import pdf from "../../pdf/CurriculoUilianOliveiraRocha.pdf";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <aside id={styles.sidebar}>
      <img src={Avatar} alt="Uilian Oliveira" />

      <h1>Desenvolvedor Front-end</h1>
      <SocialNetworks />
      <InformationContainer />
      <a href={pdf} target="_blank" className={styles.btnSidebar} download>
        Download Cv
      </a>
    </aside>
  );
}
