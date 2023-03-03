import {Card, Menu} from "antd";
import React, {useState} from "react";

export function LeftNavigationBar() {
  const [selectedMenuKeys, setSelectedMenuKeys] = useState(["0"]);

  return (
      <Menu
          selectedKeys={selectedMenuKeys}
          onSelect={({selectedKeys}) => setSelectedMenuKeys(selectedKeys)}
          mode="inline"
          style={{height: "100%"}}
      >
        <Menu.Item key="0">구성원</Menu.Item>
        <Menu.Item key="1">문서함</Menu.Item>
        <Menu.Item key="2">회사 정보 관리</Menu.Item>
        <Menu.Item key="3">설정</Menu.Item>
      </Menu>
  );
}
