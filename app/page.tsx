import { Hero } from '@/components/hero/Hero';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <header
        style={{ height: '60px', width: '100%', backgroundColor: '#fff' }}
      ></header>
      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  );
}
