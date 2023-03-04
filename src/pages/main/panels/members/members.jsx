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
    render: (text) => <a>{text}</a>
  },
  {
    title: "부서",
    dataIndex: "departure",
    key: "departure"
  },
  {
    title: "담당업무",
    dataIndex: "job",
    key: "job"
  },
  {
    title: "전화번호",
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: "회사이메일",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "정보 입력 요청",
    dataIndex: "invited",
    key: "invited",
    render: (invited) => (
        invited
            ? <a className={styles.inviteTableCellLink}>정보 입력 요청</a>
            : <span className={styles.invitedTableCell}>입력 완료</span>
    )
  }
];

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
            columns={employeeTableColumns}
            dataSource={EMPLOYEE_LIST_MOCK}
        />
      </div>
  );
}
