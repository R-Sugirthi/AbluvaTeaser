import TypewriterText from "../typewriter-text/TypewriterText";
import Div from "../../components/elements/div";
import './HomePageText.css';

export default function HomePageText() {
  return (
    <Div className="font1 md:px-20 mt-32 custom-div"> 
      <p className = "content1">Tropo, Strato, Meso, Thermo and Exosphere protect Earth</p>
      <br />
      <Div className="h-32 font-bolder">
        <TypewriterText text="What protects your data ?" delay={200} infinite />
      </Div>
      <br />
      <hr />
      <p className = "content2">Look! A multidimensional, novel research-based, intelligent SecuroSphere is emerging to protect your data, cos <span className="font2 text-3xl"> all your data belongs to you</span><sup className = "text-sm">TM</sup></p>
    </Div>
  );
}
