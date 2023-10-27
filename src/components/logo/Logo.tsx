"use client";
import Images from "../elements/image";
import Div from "../../components/elements/div";
import "./style.css";

export default function Logo() {
  return (
    <Div className="logo_container">
      <Images
      src="/images/logo/logo.png"
      className="pl-5 pt-5"
      width={70}
      height={70}
      alt="Abluva Logo"
    />
    <Images
      src="/images/logo/abluva_logo.png"
      className="pt-5"
      width={90}
      height={90}
      alt="Abluva Logo"
    />
    </Div>
  );
}
