
import "../css/nav.scss";
import { FiHome, FiBell, FiUser, FiLogOut } from "react-icons/fi";
import ItemNav from "./ItemNav";
import Notification from "./Notification";
import User from "./User";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [item, setItem] = useState("home");

  const changleClik = (e) => {
    setItem(e);
  };

  return (
    <div className="containerNav">
      <div className="contentNav">
        <div className="category">
          <div className="contentCategory">
          <Link to="home">
            <div
              className={`contentIcon ${item === "home" ? "active" : ""}`}
              onClick={() => changleClik("home")}
            >
              <FiHome />
            </div>
          </Link>
            
            {/* <div
              className={`contentIcon ${
                item === "notificacion" ? "active" : ""
              }`}
              onClick={() => changleClik("notificacion")}
            >
              <FiBell />
              <div className="count">2</div>
            </div> */}
            <div
              className={`contentIcon ${item === "user" ? "active" : ""}`}
              onClick={() => changleClik("user")}
            >
              <FiUser />
            </div>
          </div>
{/*           <div className="footerNav">
            <Link to="/bardePedro">
              <div className="contentIcon active ">
                <FiLogOut />
              </div>

            </Link>
              <span>Salir</span>
          </div> */}
        </div>
        <div className="subNav">
          {item === "home" && <ItemNav />}
          {/* {item === "notificacion" && <Notification />} */}
          {item === "user" && <User />}
        </div>
      </div>
    </div>
  );
};

export default Nav;
