import {Button, Card, Menu} from "antd";
import React, {useState} from "react";
import {Panel} from "../panel/panel";
import styles from "./left-navigation-bar.module.css"
import {UserOutlined} from "@ant-design/icons";
import {MyButton} from "../my-button/my-button";

export function LeftNavigationBar() {
  const [selectedMenuKeys, setSelectedMenuKeys] = useState(["0"]);

  return (
      <div className={styles.container}>
        <Panel className={styles.panel}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>주식회사 자버</h2>
          </div>
          <Menu
              className={styles.menu}
              selectedKeys={selectedMenuKeys}
              onSelect={({selectedKeys}) => setSelectedMenuKeys(selectedKeys)}
              mode="inline"
          >
            <Menu.Item className={styles.menuItem} key="0"><span
                className="app-font-p2 app-font-bold">구성원</span></Menu.Item>
            <Menu.Item className={styles.menuItem} key="1"><span
                className="app-font-p2 app-font-bold">문서함</span></Menu.Item>
            <Menu.Item className={styles.menuItem} key="2"><span
                className="app-font-p2 app-font-bold">회사 정보 관리</span></Menu.Item>
            <Menu.Item className={styles.menuItem} key="3"><span
                className="app-font-p2 app-font-bold">설정</span></Menu.Item>
          </Menu>
          <div className={styles.AdministratorModeButtonContainer}>
            <MyButton/>
          </div>
        </Panel>
      </div>
  );
}
