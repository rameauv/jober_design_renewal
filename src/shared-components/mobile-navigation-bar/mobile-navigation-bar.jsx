import styles from "./mobile-navigation-bar.module.scss";
import {MyButton} from "../my-button/my-button";
import {Button, Tabs} from "antd";
import {useState} from "react";

export function MobileNavigationBar() {
  const items = [
    {label: "구성원", key: "0"},
    {label: "문서함", key: "1"},
    {label: "회사정보관리", key: "2"},
    {label: "설정", key: "3"},
  ];
  const [selectedMenuKey, setSelectedMenuKey] = useState("0");

  function handleSelection(key) {
    setSelectedMenuKey(key);
  }

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
      <div>
        <div className={styles.titleBar}>
          <h2 className={styles.title}>주식회사 자버</h2>
          <div>
            <MyButton/>
          </div>
        </div>
        <div className={styles.navBar}>
          <Tabs className={styles.tabs} activeKey={selectedMenuKey} onChange={key => handleSelection(key)}>
            {items.map(item => (<Tabs.TabPane className={styles.tab} tab={item.label} key={item.key}/>))}
          </Tabs>
        </div>
      </div>
  );
}
