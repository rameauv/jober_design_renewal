import styles from './my-layout.module.css';
import {MobileNavigationBar} from "../mobile-navigation-bar/mobile-navigation-bar";
import {MyTable} from "../table/my-table";

export function MyLayout({sideElement, mobileHeader, mobileContent, desktopContent}) {
  return (
      <>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.sideContainer}>
              {sideElement}
            </div>
            <div className={styles.centralContainer}>
              {desktopContent}
            </div>
          </div>
        </div>
        <div className={styles.mobileContainer}>
          {mobileHeader}
          {mobileContent}
        </div>
      </>
  );
}
