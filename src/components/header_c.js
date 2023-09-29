/* import logo from "./logo.svg"; */
import "../App.css";
import "../media/media.css";
import Gif from "../images/1000x892.gif";

function Content() {
  return (
    <div className="Content">
      <div className="container">
        <div className="row Content__row">
          <div className="col-xl-6  col-lg-6 col-md-12     Content__column">
            <p className="Content__text">SaaS Landing Page Template</p>
            <p className="Content__text1">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
            <a className="Content__link" href="#!">
              Get started
            </a>
          </div>
          <div className="col-xl-6  col-lg-6 col-md-12      Content__column2">
            <img
              loading="lazy"
              className="content__gif"
              alt="Gif"
              src={Gif}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
