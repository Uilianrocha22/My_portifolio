import imgCardapioOnline from "../../img/copiacardapioonline.png";
import imgBarber from "../../img/imgBarbercopia2.png";
import imgSnapclima from "../../img/imgSnapclima.png";
import imgCalculadora from "../../img/img-calculadora.png";
import imgTodoList from "../../img/imgTodoList.png";

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
    title: "Calculadora-JS",
    image: ` ${imgCalculadora}`,
    description:
      "Calculadora desenvolvida com Javascript puro, possui diversas funcionabilidades como troca de tema, erro em valores inválidos etc.  ",
    skills: ["Html", "Css", "Javascript"],
    demo: "https://uilianrocha22.github.io/Calculadora_js/",
    source: "https://github.com/Uilianrocha22/Calculadora_js",
  },
  {
    title: "To-Do-List",
    image: ` ${imgTodoList}`,
    description:
      "Projeto apresenta varias funcionabilidades úteis, como criação de tarefas, remoção, alteração, filtro e ordenação.",
    skills: ["Html", "Sass"],
    demo: "https://to-do-list-uilian.vercel.app/",
    source: "https://github.com/Uilianrocha22/To-Do-List",
  },
];

export default function Projects() {
  return (
    <section id={styles.projectsSection}>
      <h2 className={styles.title} id="projectsSection">
        Projetos
      </h2>
      <div
        className={`${
          styles.projects
        } ${"animate__animated animate__fadeInUp animate__delay-1s"}`}
      >
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
