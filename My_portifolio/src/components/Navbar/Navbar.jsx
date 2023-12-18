import "animate.css";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div id="containerNavbar">
      <h1
        className={`${styles.Title} ${"animate__animated animate__fadeInDown"}`}
      >
        Uilian Oiveira Rocha
      </h1>
    </div>
  );
}
