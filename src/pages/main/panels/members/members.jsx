import {Button, Input} from "antd";
import {MyTable} from "../../../../shared-components/table/my-table";
import React from "react";
import {Panel} from "../../../../shared-components/panel/panel";
import styles from "./members.module.scss";
import {SearchInput} from "../../../../shared-components/search-input/search-input";
import {EMPLOYEE_LIST_MOCK} from "../../../../constants";

const employeeTableColumns = [
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
    ellipsis: {
      showTitle: false,
    },
    render: (text) => <a>{text}</a>
  },
  {
    title: "부서",
    dataIndex: "departure",
    key: "departure",
    ellipsis: {
      showTitle: false,
    }
  },
  {
    title: "담당업무",
    dataIndex: "job",
    key: "job",
    ellipsis: {
      showTitle: false,
    }
  },
  {
    title: "전화번호",
    dataIndex: "phone",
    key: "phone",
    ellipsis: {
      showTitle: false,
    }
  },
  {
    title: "회사이메일",
    dataIndex: "email",
    key: "email",
    ellipsis: {
      showTitle: false,
    }
  },
  {
    title: "정보 입력 요청",
    dataIndex: "invited",
    key: "invited",
    ellipsis: {
      showTitle: false,
    },
    render: (invited) => (
        invited
            ? <a className={styles.inviteTableCellLink}>정보 입력 요청</a>
            : <span className={styles.invitedTableCell}>입력 완료</span>
    )
  }
];

const mobileColumnKeysSet = new Set(
    [
      "name",
      "departure",
      "phone"
    ]
);

const mobileEmployeeTableColumns = employeeTableColumns.filter(column => mobileColumnKeysSet.has(column.key));

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
          <MyTable
              isDesktopMode={true}
              columns={employeeTableColumns}
              dataSource={EMPLOYEE_LIST_MOCK}
          />
        </Panel>
    );
  }
  return (
      <div className={styles.mobileTableContainer}>
        <MyTable
            isDesktopMode={false}
            columns={mobileEmployeeTableColumns}
            dataSource={EMPLOYEE_LIST_MOCK}
        />
      </div>
  );
}
