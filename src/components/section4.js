import "../App.css";
import starts from "../images/main/starts.svg";
import userImage from "../images/main/User-Feedback-Image.svg";
function Section4() {
  return (
    <div className="Section4">
      <div className="container section4__container">
        <div className="section4__div2">
          <p className="section4__text">
            “Wallet is a great product! All of my most important information is
            there - credit cards, transit cards, boarding passes, tickets, and
            more. And I don't need to worry because it's all in one place!
            thanks!”
          </p>
        </div>
        <div className="section4__div">
          <img src={userImage} alt="userImage" />
          <div className="section4__div1">
            <p className="section4__text1">Johnny Owens</p>
            <img src={starts} alt="stars" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
