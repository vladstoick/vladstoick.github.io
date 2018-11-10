// @flow strict
import React from "react";
import styles from "./style.module.scss";
import WorkTitle from "../work_title";
import type { WorkExperienceItemType } from "../../../pages/work";

const WorkExperience = (props: WorkExperienceItemType) => (
  <div key={props.id}>
    <WorkTitle
      title={props.title}
      location={props.companyName}
      period={props.time}
    />
    <div className={styles.blurb}>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </div>
    <div className={styles.tagList}>
      {props.tags.map(tag => (
        <span key={tag} className={styles.workExperienceTag}>
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default WorkExperience;
