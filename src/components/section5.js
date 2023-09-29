import "../App.css";
import Image from "../images/main/Image2.png";
function Section5() {
  return (
    <div className="Section5">
      <div className="container">
        <div className="row Section5__row">
          <div className="col-xl-6  section5__column1">
            <p className="section5__text">Questions? Let’s talk </p>
            <p className="section5__text1">
              Contact us through our 24/7 live chat. We’re always happy to help!
            </p>
            <a className="section5__link" href="#!">
              Get started
            </a>
          </div>
          <div className="col-xl-6  section5__column">
            <img className="section5__image" src={Image} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
