import styles from './my-layout.module.css';

export function MyLayout({sideElement, centralElement}) {
  return (
      <div className={styles.container}>
        <div className={styles.sideContainer}>
          {sideElement}
        </div>
        <div className={styles.centralContainer}>
          {centralElement}
        </div>
      </div>
  );
}
