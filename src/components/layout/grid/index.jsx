import style from "./style.module.scss";
import React from "react";
import classnames from "classnames";

export const Container = props => {
  return (
    <div className={classnames(style.container, props.className)}>
      {props.children}
    </div>
  );
};

export const Row = props => {
  return (
    <div className={classnames(style.row, props.className)}>
      {props.children}
    </div>
  );
};

export const CentredRow = props => (
  <div className={classnames(style.centeredRow, props.className)}>
    {props.children}
  </div>
);

export const Column = props => (
  <div className={classnames(style.column, props.className)}>
    {props.children}
  </div>
);
