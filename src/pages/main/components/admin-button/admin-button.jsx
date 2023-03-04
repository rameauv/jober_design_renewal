import styles from './admin-button.module.scss';
import {Button} from "antd";
import {UserOutlined} from "@ant-design/icons";

export function AdminButton() {
  return (
      <Button
          className={`app-button ${styles.container}`}
          type="primary"
      >
        <UserOutlined className={styles.icon}/>
        <span className={`${styles.text}`}>관리자 모드</span>
      </Button>
  );
}
