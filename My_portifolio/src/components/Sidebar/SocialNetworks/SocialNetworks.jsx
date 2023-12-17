import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import styles from "./SocialNetworks.module.scss";

const socialNetworks = [
  {
    href: "https://www.linkedin.com/in/uilian-oliveira-rocha-128527253/",
    id: "linkedin1",
    name: "linkedin",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/Uilianrocha22",
    id: "github1",
    name: "github",
    icon: <FaGithub />,
  },
  {
    href: "https://api.whatsapp.com/send?phone=5511983331546&text=Seja%20bem%20vindo!",
    id: "whatsapp1",
    name: "whatsapp",
    icon: <FaWhatsapp />,
  },
];

export default function SocialNetworks() {
  return (
    <section id={styles.socialsNetworks}>
      {socialNetworks.map((network) => (
        <a
          href={network.href}
          target="_blank"
          id={network.id}
          className={styles.socialBtn}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
}
