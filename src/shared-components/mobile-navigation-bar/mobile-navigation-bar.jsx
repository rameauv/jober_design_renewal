import styles from "./mobile-navigation-bar.module.scss";
import {MyButton} from "../my-button/my-button";
import {Button, Tabs} from "antd";
import {useState} from "react";

export function MobileNavigationBar({items = [], onSelected, selection = []}) {
  function handleSelection(key) {
    if (!onSelected) {
      return;
    }
    onSelected([key]);
  }

  const massagedSelection = selection[0];

  return (
      <div>
        <div className={styles.titleBar}>
          <h2 className={styles.title}>주식회사 자버</h2>
          <div>
            <MyButton/>
          </div>
        </div>
        <div className={styles.navBar}>
          <Tabs className={styles.tabs} activeKey={massagedSelection} onChange={key => handleSelection(key)}>
            {items.map(item => (<Tabs.TabPane className={styles.tab} tab={item.label} key={item.key}/>))}
          </Tabs>
        </div>
      </div>
  );
}
