// @flow strict
import * as React from "react";
import type { WorkExperienceItemType } from "../../../pages/work";
import { Row } from "../../layout/grid";
import styles from "./style.module.scss";
import WorkExperience from "../work_experience";

const WorkExperienceList = (props: {
  workExperience: Array<WorkExperienceItemType>
}) => (
  <div>
    <h2>💼 Work Experience</h2>
    <div className={styles.list}>
      {props.workExperience.map(we => (
        <WorkExperience {...we} key={we.id} />
      ))}
    </div>
  </div>
);

export default WorkExperienceList;
