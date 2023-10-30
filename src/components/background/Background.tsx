import "./style.css";
import Div from "../elements/div";
import { ElemntProps } from "../elements/common";

export default function Background({
  className,
  children,
  ...props
}: ElemntProps) {
  const backgroundImage = "/images/background/sky3.jpg";

  return (
    <Div className="overflow-hidden w-screen h-screen relative">
      <img
        src={backgroundImage}
        className="absolute top-0 left-0 h-full w-full object-cover opacity-100 z-0 transition-opacity duration-1000 ease-in-out"
      />
      <Div className="z-20 relative">{children}</Div>
    </Div>
  );
}
