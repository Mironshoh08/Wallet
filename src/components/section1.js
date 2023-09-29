/* import logo from "./logo.svg"; */
import "../App.css";
import image1 from "../images/main/Slice-1.svg";
import image2 from "../images/main/Slice-2.svg";
import image3 from "../images/main/Slice-3.svg";
import image4 from "../images/main/Slice-4.svg";
import image5 from "../images/main/Slice-5.svg";
// import Gif from "../images/1000x892.gif";

function Section1() {
  return (
    <div className="Section1">
      <div className="container Section1__container">
        <hr className="Section1__line" />
        <div className="section1__div">
          <img src={image1} loading="lazy" alt="Logos" />
          <img src={image2} loading="lazy" alt="Logos" />
          <img src={image3} loading="lazy" alt="Logos" /> 
          <img src={image4} loading="lazy" alt="Logos" />
          <img src={image5} loading="lazy" alt="Logos" />
        </div>
        <hr className="Section1__line" />
      </div>
    </div>
  );
}

export default Section1;
