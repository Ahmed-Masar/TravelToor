import { useState } from "react";
import "./nav.css";
import { AlignRight, X } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">
            Travel<span>Toor</span>
          </a>
        </div>
        <div className="nav__menu__btn">
          {open ? (
            <X
              onClick={() => {
                setOpen(false);
              }}
            />
          ) : (
            <AlignRight
              onClick={() => {
                setOpen(true);
              }}
            />
          )}
        </div>
      </div>

      <ul className={`nav__links  ${open ? "open" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#package">Packages</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="nav__btns">
        <button className="btn">Register</button>
      </div>
    </nav>
  );
};

export default Nav;
