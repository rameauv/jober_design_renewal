import {Button, Input} from "antd";
import {MyTable} from "../../../../shared-components/table/my-table";
import React from "react";
import {Panel} from "../../../../shared-components/panel/panel";
import styles from "./members.module.scss";
import {SearchInput} from "../../../../shared-components/search-input/search-input";

export function Members({isDesktopMode}) {
  if (isDesktopMode) {
    return (
        <Panel>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>구성원</h2>
            <div className={styles.searchInputContainer}>
              <SearchInput placeholder="이름"/>
            </div>
          </div>
          <MyTable/>
        </Panel>
    );
  }
  return (
      <div className={styles.mobileTableContainer}>
        <MyTable/>
      </div>
  );
}
