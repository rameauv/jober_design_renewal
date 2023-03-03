import {EMPLOYEE_LIST_MOCK, EMPLOYEE_TABLE_COLUMNS} from "../../constants";
import React from "react";
import {Table} from "antd";

export function MyTable() {
  return (
      <>
        <Table
            dataSource={EMPLOYEE_LIST_MOCK}
            columns={EMPLOYEE_TABLE_COLUMNS}
            pagination={false}
        />
      </>
  );
}
