import "./subscribe.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

const Subscribe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="section__container subscribe__container" ref={ref}>
      <motion.h2
        className="section__header"
        initial={{ opacity: 0, transform: "translateY(35px)" }}
        animate={
          hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
        }
        transition={{ duration: 0.5 }}
      >
        Subscribe To Get The Latest News <span>About Us</span>
      </motion.h2>
      <motion.p
        className="section__description"
        initial={{ opacity: 0, transform: "translateY(35px)" }}
        animate={
          hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
        }
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Stay updated with the latest travel deals, destination highlights, and
        exclusive offers. Subscribe now and never miss out on exciting news and
        updates about our services!
      </motion.p>

      <motion.form
        action="/"
        initial={{ opacity: 0, transform: "translateY(35px)" }}
        animate={
          hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
        }
        transition={{ duration: 0.5, delay: 1 }}
      >
        <input type="text" placeholder="Your Email" />
        <button className="btn">Subscribe</button>
      </motion.form>
    </section>
  );
};

export default Subscribe;
