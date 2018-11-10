//@flow strict
import React from "react";
import styles from "./style.module.scss";

type IAvatarProps = {
  imageUrl: string,
  name: string
};

const Avatar = (props: IAvatarProps) => (
  <div className={styles.avatarContainer}>
    <img src={props.imageUrl} />
    <h1>{props.name}</h1>
  </div>
);

export default Avatar;
