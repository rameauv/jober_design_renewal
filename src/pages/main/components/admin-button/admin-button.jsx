import styles from './admin-button.module.css';
import {Button} from "antd";
import {UserOutlined} from "@ant-design/icons";

export function AdminButton() {
  return (
      <>
        <Button
            className={styles.container}
            type="primary"
        >
          <UserOutlined className={styles.icon}/>
          <span className={`app-font-p2 ${styles.text}`}>관리자 모드</span>
        </Button>
      </>
  );
}
