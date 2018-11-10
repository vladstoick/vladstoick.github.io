// @flow strict
import style from "./style.module.scss";
import React from "react";
import type { Node } from "react";
import classnames from "classnames";

type Props = {
  children?: Node,
  className?: string
};

export const Container = (props: Props) => {
  return (
    <div className={classnames(style.container, props.className)}>
      {props.children}
    </div>
  );
};

export const Row = (props: Props) => {
  return (
    <div className={classnames(style.row, props.className)}>
      {props.children}
    </div>
  );
};

export const CentredRow = (props: Props) => (
  <div className={classnames(style.centeredRow, props.className)}>
    {props.children}
  </div>
);

export const Column = (props: Props) => (
  <div className={classnames(style.column, props.className)}>
    {props.children}
  </div>
);
