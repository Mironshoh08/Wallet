import "../App.css";
import Icon1 from "../images/main/Icon-1.svg";
import Icon2 from "../images/main/Icon-2.svg";
import Icon3 from "../images/main/Icon-3.svg";
function Section3() {
  return (
    <div className="Section3">
      <div className="container">
        <div className="row  section3__row">
          <div className="col-xl-4 col-lg-4 col-sm-6 section3__column">
            <img loading="lazy" src={Icon1} alt="Icons" />
            <p className="section3__tittle">Customizable card</p>
            <p className="section3__text">
              Custom your own card for your exact incomes and expenses needs.
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6 section3__column">
            <img loading="lazy" src={Icon2} alt="Icons" />
            <p className="section3__tittle">No payment fee</p>
            <p className="section3__text">
              Transfer your payment all over the world with no payment fee.
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-12 section3__column">
            <img loading="lazy" src={Icon3} alt="Icons" />
            <p className="section3__tittle">All in one place</p>
            <p className="section3__text">
              The right place to keep your credit and debit cards, boarding
              passes & more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
