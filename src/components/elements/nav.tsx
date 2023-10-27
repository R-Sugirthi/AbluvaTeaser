import React from "react";
import { ElemntProps } from "../elements/common";

export default function Nav({ className, children, ...props }: ElemntProps) {
  return <nav className={className ? className : ""}>{children}</nav>;
}
