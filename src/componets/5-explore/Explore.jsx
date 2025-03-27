import "./explore.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

const Explore = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  return (
    <section className="section__container explore__container" ref={ref}>
      <div className="explore__image">
        <motion.img
          src="./assets/explore.jpg"
          alt="explore"
          initial={{ opacity: 0, transform: "translateX(50px)" }}
          animate={
            hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
          }
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="explore__content">
        <motion.p
          className="section__subheader"
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={
            hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
          }
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Explore With Us
        </motion.p>

        <motion.h2
          className="section__header"
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={
            hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
          }
          transition={{ duration: 0.5, delay: 1 }}
        >
          Choose Dream Destinations For <span>Explore World</span>
        </motion.h2>

        <motion.p
          className="section__description"
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={
            hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
          }
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          Discover a world of wonders! Select from our curated list of dream
          destinations and start your journey to explore breathtaking
          landscapes, vibrant cultures, and unforgettable experiences.
        </motion.p>

        <div className="explore__btn">
          <motion.button
            className="btn"
            initial={{ opacity: 0, transform: "translateY(30px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 2 }}
          >
            About Us
          </motion.button>
        </div>

        <div className="explore__grid">
          <motion.div
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : undefined}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <h4>14</h4>
            <p>
              Years
              <br />
              Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : undefined}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <h4>67+</h4>
            <p>
              Destinations
              <br />
              Celebrations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : undefined}
            transition={{ duration: 0.5, delay: 3.5 }}
          >
            <h4>320+</h4>
            <p>
              Happy
              <br />
              Customers
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
