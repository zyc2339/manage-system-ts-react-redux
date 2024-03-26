import styles from "./comp1.module.scss"
import { Button } from "antd";
import {RetweetOutlined} from "@ant-design/icons"

export default function Comp() {
  return (
    <div className={styles.box}>
      <p>This is temp component</p>
      <Button type="primary">Primary Button</Button>
      <RetweetOutlined style={{ fontSize: "40px" }} />
    </div>
  );
}


