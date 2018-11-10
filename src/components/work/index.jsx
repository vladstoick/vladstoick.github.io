import * as React from "react";
import { IWorkExperienceItemType } from "../../pages/work";
import * as colours from "../../utils/colours";
import { Row } from "../layout/grid";
import styles from "./style.module.scss";
import WorkTitle from "./work_title";

const WorkExperienceItem = (props: IWorkExperienceItemType) => (
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

interface IWorkExperienceProps {
  workExperience: IWorkExperienceItemType[];
}

const WorkExperienceList = (props: IWorkExperienceProps) => (
  <div>
    <h2>💼 Work Experience</h2>
    <div className={styles.list}>
      {props.workExperience.map(we => (
        <WorkExperienceItem {...we} key={we.id} />
      ))}
    </div>
  </div>
);

export default WorkExperienceList;
