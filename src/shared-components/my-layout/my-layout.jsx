import styles from './my-layout.module.css';
import {MobileNavigationBar} from "../mobile-navigation-bar/mobile-navigation-bar";
import {MyTable} from "../table/my-table";

export function MyLayout({sideElement, centralElement}) {
  return (
      <>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.sideContainer}>
              {sideElement}
            </div>
            <div className={styles.centralContainer}>
              {centralElement}
            </div>
          </div>
        </div>
        <div className={styles.mobileContainer}>
          <MobileNavigationBar/>
          {/*<MyTable/>*/}
        </div>
      </>
  );
}
