import React, {useState} from "react";
import {Menu, Table, Input, Card, Layout, Tabs} from "antd";
import {EMPLOYEE_LIST_MOCK, EMPLOYEE_TABLE_COLUMNS} from "../../constants";
import {LeftNavigationBar} from "../../shared-components/left-navigation-bar/left-navigation-bar";
import {MyTable} from "../../shared-components/table/my-table";
import {MyLayout} from "../../shared-components/my-layout/my-layout";
import {Panel} from "../../shared-components/panel/panel";
import {AndroidOutlined, AppleOutlined} from '@ant-design/icons';
import {Members} from "./panels/members/members";
import {MobileNavigationBar} from "../../shared-components/mobile-navigation-bar/mobile-navigation-bar";

const Main = () => {
  const [selectedMenuKeys, setSelectedMenuKeys] = useState(["0"]);

  const getContent = (isDesktopContent, menuKey) => {
    let content;
    switch (menuKey) {
      case "0":
        content = (<Members isDesktopMode={isDesktopContent}/>);
        break;
      case "1":
      case "2":
      case "3":
      default:
        content = <div>구현 전입니다</div>;
    }
    return (content);
  };

  function handleMenuSelction(keys) {
    setSelectedMenuKeys(keys);
  }

  const menuItems = [
    {label: "구성원", key: "0"},
    {label: "문서함", key: "1"},
    {label: "회사정보관리", key: "2"},
    {label: "설정", key: "3"},
  ];
  const leftNavBar = (
      <LeftNavigationBar items={menuItems} selection={selectedMenuKeys} onSelected={keys => handleMenuSelction(keys)}/>);
  const mobileHeader = (
      <MobileNavigationBar items={menuItems} selection={selectedMenuKeys} onSelected={keys => handleMenuSelction(keys)}/>);

  return (
      <MyLayout
          sideElement={leftNavBar}
          mobileHeader={mobileHeader}
          mobileContent={getContent(false, selectedMenuKeys[0])}
          desktopContent={getContent(true, selectedMenuKeys[0])}
      >
      </MyLayout>
  );
};

export default Main;
