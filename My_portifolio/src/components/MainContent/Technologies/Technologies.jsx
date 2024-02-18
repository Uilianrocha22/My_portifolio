import { DiHtml5, DiCss3, DiReact, DiJsBadge, DiSass } from "react-icons/di";
import { FaBootstrap, FaGitAlt } from "react-icons/fa";
import styles from "./Technologies.module.scss";

const Tecnologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "Javascript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "bootstrap", name: "Bootstrap", icon: <FaBootstrap /> },
  { id: "git", name: "Git", icon: <FaGitAlt /> },
];

export default function Technologies() {
  return (
    <section id={styles.technologiesContainer}>
      <h2 id="tecnologiesContainer">Tecnologias</h2>

      <div className={styles.technologiesGrid}>
        {Tecnologies.map((tech) => (
          <div className={styles.technologyCard} id={tech.id} key={tech.id}>
            {tech.icon}
            <div className={styles.technologyInfo}>
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
