import "./footer.css";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="footer__logo">
            <a href="#">TravelToor</a>
          </div>
          <p>
            Explore the world with us! Connect through our social media
            channels, find quick links to essential resources, and access 24/7
            support to make your travel planning effortless.
          </p>

          <ul className="footer__scoails">
            <li>
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="#">
                <Twitter />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Services</h4>

          <ul className="footer__links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Instagram</h4>

          <div className="footer__col__flex">
            <img src="./assets/instagram-1.jpg" alt="Instagram" />
            <img src="./assets/instagram-2.jpg" alt="Instagram" />
            <img src="./assets/instagram-3.jpg" alt="Instagram" />
            <img src="./assets/instagram-4.jpg" alt="Instagram" />
            <img src="./assets/instagram-5.jpg" alt="Instagram" />
            <img src="./assets/instagram-6.jpg" alt="Instagram" />
          </div>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>

          <ul className="footer__links">
            <li>
              <a href="#">
                <span>
                  <Phone />
                </span>
                +9647738095353
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <MapPin />
                </span>
                Baghdad, Iraq
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">Copyright © 2025 Ahmed Masar.</div>
    </footer>
  );
};

export default Footer;
