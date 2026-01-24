import Header from "../../components/Header";
import styles from "./styles.module.css";

function IndexLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default IndexLayout;