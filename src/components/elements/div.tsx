import React, { ReactNode } from "react";

import { ElemntProps } from "../elements/common";
export default function Div({
  className,
  children,
  style,
  ...props
}: ElemntProps) {
  return (
    <div style={style} className={className ? className : ""}>
      {children}
    </div>
  );
}
