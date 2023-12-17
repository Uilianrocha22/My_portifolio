import { AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import styles from "./InformationContainer.module.scss";

const socialInformation = [
  {
    id: "Email1",
    name: "E-mail",
    text: "uilianoliveira126@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    id: "pinIcon1",
    name: "Localização",
    text: "Guarulhos / SP",
    icon: <AiFillEnvironment />,
  },
];

export default function InformationContainer() {
  return (
    <section id={styles.information}>
      {socialInformation.map((info) => (
        <div className={styles.infoCard} key={info.name}>
          <a id={info.id} className={styles.socialInfo}>
            {info.icon}
          </a>
          <div>
            <h3>{info.name}</h3>
            <p>{info.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
