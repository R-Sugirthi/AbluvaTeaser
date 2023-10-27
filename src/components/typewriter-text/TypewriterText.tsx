import Typewriter from "typewriter-effect";
import "./TypewriterText.css";
const TypewriterText = ({ text, delay, infinite }) => {
  return (
    <span className="md:text-6xl font-bolder text-white text">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(text)
            .pauseFor(delay)
            .deleteAll()
            .typeString(text)
            .start();
        }}
        options={{
          loop: infinite,
        }}
      />
    </span>
  );
};

export default TypewriterText;
