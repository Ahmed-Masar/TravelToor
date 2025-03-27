import "./card.css";
import { Star, Clock, Users, MapPin } from "lucide-react";

const Card = ({ imgSrc, rating, title, price, numberOfDyas, numberOfUser }) => {
  return (
    <div className="popular__card">
      <img src={imgSrc} alt="popular" />
      <div className="popular__content">
        <div className="popular__rating">
          <span>
            <Star />
          </span>
          {rating}
        </div>
        <h4>{title}</h4>
        <p>
          <span>Rs. {price}/-</span> Per Person
        </p>
        <div className="popular__card__footer">
          <div>
            <span>
              <Clock />
            </span>
            {numberOfDyas} Days's
          </div>
          <div>
            <span>
              <Users />
            </span>{" "}
            {numberOfUser}+
          </div>
          <div>
            <span>
              <MapPin />
            </span>{" "}
            India
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
