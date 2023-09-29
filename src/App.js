/* import logo from "./logo.svg"; */
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-dark  "
        aria-label="Offcanvas navbar large"
      >
        <div className="container">
          <a className="navbar-brand navbar__link" href="#!">
            Wallet
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                Wallet
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <form
                name="form"
                id="form"
                className="column-gap-5 align-items-center justify-content-end flex-grow-1 pe-3 d-flex mt-3 mt-lg-0"
                role="search"
              >
                <a href="#!" className="Sign__up">
                  Sign up
                </a>
                <a href="#!" className="Log__in">
                  Log in
                </a>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
