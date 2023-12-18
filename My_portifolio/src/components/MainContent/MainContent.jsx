import About from "./About/About";
import Technologies from "./Technologies/Technologies";
import styles from "./MainContent.module.scss";

export default function MainContent() {
  return (
    <main
      className="animate__animated  animate__fadeInRight  animate__delay-1s"
      id={styles.mainContent}
    >
      <About />
      <Technologies />
    </main>
  );
}
