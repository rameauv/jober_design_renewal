import React, {useState} from "react";
import {Menu, Table, Input, Card, Layout} from "antd";
import {EMPLOYEE_LIST_MOCK, EMPLOYEE_TABLE_COLUMNS} from "./constants";
import {LeftNavigationBar} from "./shared-components/left-navigation-bar/left-navigation-bar";
import {MyTable} from "./shared-components/table/my-table";
import {MyLayout} from "./shared-components/my-layout/my-layout";
import styles from "./index.module.css"

const Main = () => {
  const [selectedMenuKeys, setSelectedMenuKeys] = useState(["0"]);

  const leftNavBar = (
      // <div style={{height: "100%", position: "absolute"}}>
      <LeftNavigationBar/>
      // </div>
  );

  const getContent = (menuKey) => {
    let content;
    switch (menuKey) {
      case "0":
        content = (
            <Card bordered={false}>
              <div style={{textAlign: "left"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <h2>구성원</h2>
                  <Input.Search style={{width: "200px"}}/>
                </div>
                <MyTable/>
              </div>
            </Card>
        );
        break;
      case "1":
      case "2":
      case "3":
      default:
        content = <div>구현 전입니다</div>;
    }
    return (
        // <div style={{marginLeft: "200px", padding: "20px"}}>{
        content
        // }</div>
    );
  };

  return (
      // <div className={styles.container}>
        <MyLayout
            sideElement={leftNavBar}
            centralElement={getContent(selectedMenuKeys[0])}
        />
      // </div>
  );
};

export default Main;
