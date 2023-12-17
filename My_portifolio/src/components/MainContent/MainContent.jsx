import About from "./About/About";
import Technologies from "./Technologies/Technologies";
import styles from "./MainContent.module.scss";

export default function MainContent() {
  return (
    <main id={styles.mainContent}>
      <About />
      <Technologies />
    </main>
  );
}
