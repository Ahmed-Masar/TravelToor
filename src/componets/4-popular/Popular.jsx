import "./popular.css";
import Card from "./card/Card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
const Popular = () => {
  return (
    <section className="section__container popular__container">
      <img className="popular__bg" src="./assets/bg.png" alt="bg" />
      <p className="section__subheader">Famous Destinations</p>
      <h2 className="section__header">
        Our Popular <span>Destinations</span>
      </h2>

      {/* start swiper */}
      <Swiper
        slidesPerView={3.3}
        spaceBetween={0}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <Card
            imgSrc={"./assets/popular-1.jpg"}
            rating={"4.0(34) 😊"}
            title={"Lakshadweep"}
            price={"28,000"}
            numberOfDyas={"4"}
            numberOfUser={"15"}
          />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Card
            imgSrc={"./assets/popular-2.jpg"}
            rating={"4.5(55) 😘"}
            title={"Kaziranga"}
            price={"15,000"}
            numberOfDyas={"2"}
            numberOfUser={"10"}
          />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Card
            imgSrc={"./assets/popular-3.jpg"}
            rating={"4.2(45) 😊"}
            title={"Sun Temple"}
            price={"18,000"}
            numberOfDyas={"3"}
            numberOfUser={"20"}
          />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Card
            imgSrc={"./assets/popular-4.jpg"}
            rating={"4.8(25) 😘"}
            title={"Kashmir"}
            price={"30,000"}
            numberOfDyas={"5"}
            numberOfUser={"10"}
          />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Card
            imgSrc={"./assets/popular-5.jpg"}
            rating={"4.0(15) 😊"}
            title={"Kanyakumari"}
            price={"15,000"}
            numberOfDyas={"3"}
            numberOfUser={"20"}
          />
        </SwiperSlide>
      </Swiper>

      {/* ---end swiper---- */}
    </section>
  );
};

export default Popular;
