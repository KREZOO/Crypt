import { Hero } from '@/components/sections/Hero/Hero';
import { Numbers } from '@/components/sections/Numbers/Numbers';
import { Benefits } from '@/components/sections/Benefits/Benefits';
import { ComfortFeatures } from '@/components/sections/ComfortFeatures/ComfortFeatures';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Numbers />
      <Benefits />
      <ComfortFeatures />
    </main>
  );
}
