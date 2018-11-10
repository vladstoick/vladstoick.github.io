import * as React from "react";
import { Row } from "../../layout/grid";
import styles from "./style.module.scss";

type WorkEducationHeadlineProps = {
  title: string,
  location: string,
  period: string
};

const WorkTitle = (props: WorkEducationHeadlineProps) => (
  <Row className={styles.headlineRow}>
    <p className={styles.posiition}>
      <span className={styles.positionTitle}>{props.title}</span> at{" "}
      <span>{props.location}</span>
    </p>
    <span className={styles.period}>{props.period}</span>
  </Row>
);

export default WorkTitle;
