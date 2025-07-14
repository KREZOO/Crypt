import styles from "./page.module.scss";
import Header from "@/components/layout/Header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.main}></main>
    </div>
  );
}
