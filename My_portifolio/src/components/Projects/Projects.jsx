import imgCardapioOnline from "../../img/copiacardapioonline.png";
import imgBarber from "../../img/imgBarbercopia2.png";
import imgSnapclima from "../../img/imgSnapclima.png";

import styles from "./Projects.module.scss";

const projects = [
  {
    title: "Cardápio online",
    image: ` ${imgCardapioOnline}`,
    description:
      "Aplicação de cardápio online projeto possui 4 páginas, incluindo um carrinho de compras e a finalização do pedido por WhatsApp.  ",
    skills: ["Html", "Css", "Bootstrap", "Javascript"],
    demo: "https://uilianrocha22.github.io/Cardapio-Online/",
    source: "https://github.com/Uilianrocha22/Cardapio-Online",
  },
  {
    title: "Barber ",
    image: ` ${imgBarber}`,
    description:
      "Um site para barbearia, designer moderno e intuitivo que possui diversas animações, integrado com WhatsApp e Google maps.",
    skills: ["Html", "Sass"],
    demo: "https://uilianrocha22.github.io/barber/",
    source: "https://github.com/Uilianrocha22/barber",
  },
  {
    title: "Snapclima",
    image: ` ${imgSnapclima}`,
    description:
      "Um site dinâmico integrado com Api OpenWeatherMap que consulta e exibe tempo e temperaturas de cidades.",
    skills: ["Html", "Css", "Javascript"],
    demo: "https://uilianrocha22.github.io/Snapclima/",
    source: "https://github.com/Uilianrocha22/Snapclima",
  },
  //--------------------------------------------------------
  {
    title: "Cardápio online",
    image: ` ${imgCardapioOnline}`,
    description:
      "Aplicação de cardápio online projeto possui 4 páginas, incluindo um carrinho de compras e a finalização do pedido por WhatsApp.  ",
    skills: ["Html", "Css", "Bootstrap", "Javascript"],
    demo: "https://uilianrocha22.github.io/Cardapio-Online/",
    source: "https://github.com/Uilianrocha22/Cardapio-Online",
  },
  {
    title: "Barber ",
    image: ` ${imgBarber}`,
    description:
      "Um site para barbearia, designer moderno e intuitivo que possui diversas animações, integrado com WhatsApp e Google maps.",
    skills: ["Html", "Sass"],
    demo: "https://uilianrocha22.github.io/barber/",
    source: "https://github.com/Uilianrocha22/barber",
  },
  {
    title: "Snapclima",
    image: ` ${imgSnapclima}`,
    description:
      "Um site dinâmico integrado com Api OpenWeatherMap que consulta e exibe tempo e temperaturas de cidades.",
    skills: ["Html", "Css", "Javascript"],
    demo: "https://uilianrocha22.github.io/Snapclima/",
    source: "https://github.com/Uilianrocha22/Snapclima",
  },
];

export default function Projects() {
  return (
    <section id={styles.projectsSection}>
      <h2 className={styles.title} id="projectsSection">
        Projetos
      </h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div className={styles.projectCard} key={id}>
              <img src={project.image} alt={project.title} />
              <h3 className={styles.titleCard}>{project.title}</h3>
              <p>{project.description}</p>

              <div>
                <a
                  href={project.demo}
                  target="_blank"
                  className={styles.btnLink}
                >
                  Deploy
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  className={styles.btnLink}
                >
                  Github
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
