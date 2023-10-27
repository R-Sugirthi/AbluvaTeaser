import { ReactNode } from "react";

export interface ElemntProps {
  children?: ReactNode;
  className?: string;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  fill?: boolean;
  quality?: number;
  objectFit?: string;
  style?: any;
}
