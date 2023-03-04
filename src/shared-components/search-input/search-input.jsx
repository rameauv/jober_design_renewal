import {Button, Input} from "antd";
import styles from "./search-input.module.scss";
import {SearchOutlined} from "@ant-design/icons";

export function SearchInput({placeholder = undefined}) {
  return (
      <div>
        <Input.Search
            placeholder={placeholder}
            className={styles.container}
            suffix={(
                <SearchOutlined className={styles.searchIcon}/>
            )}
        />
      </div>
  );
}
