import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.element}>
          <div className={styles.content}>Lorem</div>
        </div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        voluptates modi, dolore nulla quas aliquid ab repellendus voluptatem sit
        sequi a quasi commodi ipsam labore sed rem reiciendis. Qui, quasi.
      </main>
    </div>
  );
}
