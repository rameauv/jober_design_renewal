import styles from './my-layout.module.css';
import {MobileNavigationBar} from "../mobile-navigation-bar/mobile-navigation-bar";
import {MyTable} from "../table/my-table";
import {Grid} from 'antd';

const {useBreakpoint} = Grid;

export function MyLayout({sideElement, mobileHeader, mobileContent, desktopContent}) {
  const screens = useBreakpoint();

  if (screens.lg) {
    return (
        <div className={styles.desktopContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.sideContainer}>
              {sideElement}
            </div>
            <div className={styles.centralContainer}>
              {desktopContent}
            </div>
          </div>
        </div>
    );
  }
  return (
      <>
        <div className={styles.mobileContainer}>
          {mobileHeader}
          {mobileContent}
        </div>
      </>
  );
}
