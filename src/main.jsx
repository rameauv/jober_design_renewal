import React, { useState } from "react";
import { Menu, Table, Input } from "antd";
import { EMPLOYEE_LIST_MOCK, EMPLOYEE_TABLE_COLUMNS } from "./constants";

const Main = () => {
  const [selectedMenuKeys, setSelectedMenuKeys] = useState(["0"]);

  const leftNavBar = (
    <div style={{ height: "100%", position: "absolute" }}>
      <Menu
        className="left-navigation-bar"
        selectedKeys={selectedMenuKeys}
        onSelect={({ selectedKeys }) => setSelectedMenuKeys(selectedKeys)}
        mode="inline"
        style={{ width: 200, height: "100%" }}
      >
        <Menu.Item key="0">구성원</Menu.Item>
        <Menu.Item key="1">문서함</Menu.Item>
        <Menu.Item key="2">회사 정보 관리</Menu.Item>
        <Menu.Item key="3">설정</Menu.Item>
      </Menu>
    </div>
  );

  const getContent = (menuKey) => {
    let content;
    switch (menuKey) {
      case "0":
        content = (
          <div style={{ textAlign: "left" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>구성원</h2>
              <Input.Search style={{ width: "200px" }} />
            </div>
            <Table
              dataSource={EMPLOYEE_LIST_MOCK}
              columns={EMPLOYEE_TABLE_COLUMNS}
            />
          </div>
        );
        break;
      case "1":
      case "2":
      case "3":
      default:
        content = <div>구현 전입니다</div>;
    }
    return (
      <div style={{ marginLeft: "200px", padding: "20px" }}>{content}</div>
    );
  };

  return (
    <div>
      {leftNavBar}
      {getContent(selectedMenuKeys[0])}
    </div>
  );
};

export default Main;
