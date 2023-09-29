import "../App.css";
function Section6() {
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="row footer__row">
          <div className="col-xl-6 col-lg-6 col-sm-6 footer__div2">
            <div>
              <p className="footer__link">Wallet</p>
            </div>
            <div className="footer__div">
              <a className="footer__link2" href="#!">
                © Wallet 2022
              </a>
              <a className="footer__link2" href="#!">
                Privacy policy
              </a>
              <a className="footer__link2" href="#!">
                Cookies policy
              </a>
              <a className="footer__link2" href="#!">
                Terms of use
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-6">
            <div>
              <p className="footer__text">Updates right to your Inbox</p>
            </div>
            <div className="footer__div1">
              <input
                id="input"
                name="input
                "
                className="footer__input"
                placeholder="Email Address"
                type="email"
              />
              <button className="footer__btn">Send Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
