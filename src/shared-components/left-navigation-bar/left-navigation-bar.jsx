import {Button, Card, Menu} from "antd";
import React, {useState} from "react";
import {Panel} from "../panel/panel";
import styles from "./left-navigation-bar.module.css"
import {UserOutlined} from "@ant-design/icons";
import {MyButton} from "../my-button/my-button";

export function LeftNavigationBar({items = [], onSelected, selection}) {
  function handleSelection(key) {
    if (!onSelected) {
      return;
    }
    onSelected(key);
  }

  return (
      <div className={styles.container}>
        <Panel className={styles.panel}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>주식회사 자버</h2>
          </div>
          <Menu
              className={styles.menu}
              selectedKeys={selection}
              onSelect={({selectedKeys}) => handleSelection(selectedKeys)}
              mode="inline"
          >
            {
              items.map(item => (
                  <Menu.Item
                      className={styles.menuItem}
                      key={item.key}
                  >
                    <span className="app-font-p2 app-font-bold">{item.label}</span>
                  </Menu.Item>
              ))
            }
          </Menu>
          <div className={styles.AdministratorModeButtonContainer}>
            <MyButton/>
          </div>
        </Panel>
      </div>
  );
}
