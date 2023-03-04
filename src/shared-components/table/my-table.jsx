import {EMPLOYEE_LIST_MOCK, EMPLOYEE_TABLE_COLUMNS} from "../../constants";
import React from "react";
import {Table} from "antd";
import styles from "./my-table.module.scss";

export function MyTable() {
  return (
      <Table
          className={styles.table}
          dataSource={EMPLOYEE_LIST_MOCK}
          columns={EMPLOYEE_TABLE_COLUMNS}
          pagination={false}
      />
  );
}
