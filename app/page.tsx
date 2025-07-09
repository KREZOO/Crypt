import { Hero } from '@/components/hero/Hero';
import { Numbers } from '@/components/numbers/Numbers';
import { Benefits } from '@/components/benefits/Benefits';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Numbers />
        <Benefits />
      </main>
    </div>
  );
}
