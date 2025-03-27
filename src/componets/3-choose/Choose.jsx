import "./choose.css";
import { BadgeCheck, Calendar, Map } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

const Choose = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  return (
    <section
      className="section__container choose__container"
      id="about"
      ref={ref}
    >
      <div className="choose__image">
        <motion.img
          src="./assets/choose.jpg"
          alt="choose"
          initial={{ opacity: 0, transform: "translateX(-30px)" }}
          animate={
            hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
          }
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="choose__content">
        <motion.p
          className="section__subheader"
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={
            hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
          }
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Why Choose Us?
        </motion.p>
        <motion.h2
          className="section__header"
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={
            hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
          }
          transition={{ duration: 0.5, delay: 1 }}
        >
          Plan Your Trip <span>With Us</span>
        </motion.h2>

        <ul className="choose__list">
          <motion.li
            initial={{ opacity: 0, transform: "translateY(30px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <span>
              <BadgeCheck />
            </span>
            <div>
              <h4>Best Price Gurantee</h4>
              <p>
                We ensure you get the most competitive rates for your travel
                plans, making your dream destinations affordable.
              </p>
            </div>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, transform: "translateY(30px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 2 }}
          >
            <span>
              <Calendar />
            </span>
            <div>
              <h4>Booking Options</h4>
              <p>
                Experience the ease of flexible booking options tailored to suit
                your schedule and preferences.
              </p>
            </div>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, transform: "translateY(30px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <span>
              <Map />
            </span>
            <div>
              <h4>Revising Track Map</h4>
              <p>
                Navigate your adventure with our personalized track maps
                designed for seamless and enjoyable travel experiences.
              </p>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default Choose;
