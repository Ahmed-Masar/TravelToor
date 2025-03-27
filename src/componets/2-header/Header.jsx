import "./header.css";
import { Scale, Search } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const Header = () => {
  return (
    <header className="section__container header__container  " id="home">
      <div className="header__content">
        <motion.h1
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <span>Let's</span> Create Memorable Journey
        </motion.h1>
        <motion.p
          className="section__description"
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          Embark on an unforgettable adventure with us! Discover breathtaking
          destinations, create lasting memories, and make every journey
          remarkable.
        </motion.p>

        <motion.form
          action="/"
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="input__group">
            <label htmlFor="loaction">Loaction</label>
            <input type="text" name="loaction" placeholder="Baghdad" />
          </div>

          <div className="input__group">
            <label htmlFor="date">Date</label>
            <input type="text" name="date" placeholder="26 Mar Fri" />
          </div>

          <div className="input__group">
            <label htmlFor="price">Price</label>
            <input type="text" name="price" placeholder="Rs. 42.000" />
          </div>

          <button className="btn">
            <Search />
          </button>
        </motion.form>
      </div>

      <div className="header__image">
        <motion.img
          src="./assets/header-1.jpg"
          alt="header"
          initial={{ opacity: 0, transform: "translateX(40px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src="./assets/header-2.jpg"
          alt="header"
          initial={{ opacity: 0, transform: "translateX(40px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.img
          src="./assets/header-3.jpg"
          alt="header"
          initial={{ opacity: 0, transform: "translateX(40px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.img
          src="./assets/bg.png"
          alt="header"
          initial={{ opacity: 0, transform: "translateX(40px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
      </div>
    </header>
  );
};

export default Header;
