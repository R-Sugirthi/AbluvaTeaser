"use client";

export const WINDOW_INNERWIDTH =
  typeof window !== "undefined" ? window.innerWidth : 0;
export const WINDOW_INNERHEIGHT =
  typeof window !== "undefined" ? window.innerHeight : 0;
export const WINDOW_DEVICE_PIXEL_RATIO =
  typeof window !== "undefined" ? window.devicePixelRatio : 0;

export const sphres = [
  {
    anisotropy: 8,
    args: [80, 40, 40],
    opacity: 0.2,
    rotaionX: 0.012,
    rotaionY: 0.012,
    rotaionZ: 0.012,
  },
  {
    anisotropy: 16,
    args: [55, 40, 40],
    opacity: 0.3,
    rotaionX: 0.012,
    rotaionY: 0.015,
    rotaionZ: 0.020,
  },

  // {
  //   anisotropy: null,
  //   args: [100, 40, 40],
  //   opacity: 0.1,
  //   rotaionX: 0.012,
  //   rotaionY: 0.012,
  //   rotaionZ: 0.012,
  // },
];
