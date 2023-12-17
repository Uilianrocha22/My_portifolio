import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import { GoProjectRoadmap } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";

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
        <AiOutlineHome />
      </a>
      <a
        href="#aboutcontainer"
        onClick={() => setActiveNav("#aboutcontainer")}
        className={activeNav === "#aboutcontainer" ? `${styles.active}` : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#tecnologiesContainer"
        onClick={() => setActiveNav("#tecnologiesContainer")}
        className={
          activeNav === "#tecnologiesContainer" ? `${styles.active}` : ""
        }
      >
        <GrTechnology />
      </a>
      <a
        href="#projectsSection"
        onClick={() => setActiveNav("#projectsSection")}
        className={activeNav === "#projectsSection" ? `${styles.active}` : ""}
      >
        <GoProjectRoadmap />
      </a>
      <a href="#">
        <GrCertificate />
      </a>
    </nav>
  );
}
