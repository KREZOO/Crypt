import Header from "@/components/layout/Header/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { Numbers } from "@/components/sections/Numbers/Numbers";
import { Benefits } from "@/components/sections/Benefits/Benefits";
import { Footer } from "@/components/layout/Footer/Footer";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Hero />
        <Numbers />
        <Benefits />
        <Footer />
      </main>
    </div>
  );
}
