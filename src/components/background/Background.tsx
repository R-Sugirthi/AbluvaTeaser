import { useState, useEffect } from "react";
import "./style.css";
import Div from "../elements/div";
import { ElemntProps } from "../elements/common";
import Images from "../elements/image";

export default function Background({
  className,
  children,
  ...props
}: ElemntProps) {
  const images = [
    "/images/background/sky3.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let sliderInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  return (
    <Div className="overflow-hidden w-screen h-screen relative">
      {images.map((img, index) => (
        <img
          src={img}
          key={img}
          className={`absolute top-0 left-0 h-full w-full object-cover ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-10"
          } transition-opacity duration-1000 ease-in-out`}
        />
      ))}
      <Div className="z-20 relative">{children}</Div>
    </Div>
  );
}
