import Navbar from "../../components/Navbar";
import "../../style/admin-view/Main.css";

function Main() {

  return (
    <>
      <div className="main-container-main">

        <div className="column-main">
          <div className="navbar-container-mobile">
            <Navbar />
          </div>
          <img src="qr.png" alt="" className="qr" />
          <button className="main-btn"><a href="invitation" className="ref-main">HACER INVITACIÓN</a></button>
          
        </div>
      </div>
    </>
  );
}

export default Main;
