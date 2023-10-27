import React from "react";
import Image from "next/image";

import { ElemntProps } from "../elements/common";
export default function Images({
  src,
  className,
  width,
  height,
  alt,
  ...props
}: ElemntProps) {
  return (
    <Image
      priority
      src={src}
      className={className}
      width={width}
      height={height}
      alt={alt}
    />
  );
}
