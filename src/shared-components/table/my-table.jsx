import React from "react";
import {Table} from "antd";
import styles from "./my-table.module.scss";

export function MyTable({dataSource, columns, isDesktopMode = false}) {
  return (
      <div className={styles.container}>
        <Table
            className={isDesktopMode && 'desktop-mode'}
            dataSource={dataSource}
            columns={columns}
            pagination={false}
        />
      </div>
  );
}
