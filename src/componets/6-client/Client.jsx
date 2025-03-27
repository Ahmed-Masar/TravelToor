import { useState } from "react";
import "./client.css";
import { ArrowRight, ArrowLeft } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Travel Blogger",
    img: "./assets/client-1.jpg",
    review:
      "This travel platform turned my bucket list dreams into reality! The booking process was seamless, and their team provided excellent guidance on must-visit spots. Every step felt effortless, and I can't wait to plan my next adventure with them. Highly recommended!",
  },
  {
    id: 2,
    name: "Sophia Lee",
    role: "Software Engineer",
    img: "./assets/client-2.jpg",
    review:
      "Traveling with this service was a delight! The flexible booking options gave me the freedom to plan at my own pace, and the detailed itineraries ensured I didn't miss anything important. I felt like they genuinely cared about creating the perfect travel experience for me. Absolutely wonderful!",
  },
  {
    id: 3,
    name: "Michael Roberts",
    role: "Photographer",
    img: "./assets/client-3.jpg",
    review:
      "As a photographer, finding picturesque locations is key, and this platform exceeded my expectations. They not only made booking easy but also helped me discover some incredible hidden gems. Their attention to detail made my journey unforgettable and hassle-free!",
  },
];

const Client = () => {
  const [control, setControl] = useState(1);
  const selectedClient = clients.find((client) => control === client.id);

  return (
    <section className="section__container client__container">
      <img src="./assets/bg.png" alt="bg" />
      <p className="section__subheader">What Our Client Say's?</p>
      <h2 className="section__header">
        Client <span>Testimonials</span>
      </h2>

      <div className="client__card">
        <img src={selectedClient.img} alt="client" />

        <div className="clent__content">
          <h4>{selectedClient.name}</h4>
          <h5>{selectedClient.role}</h5>
          <p>{selectedClient.review}</p>
        </div>
      </div>

      <div className="client__btns">
        <button
          className="btn"
          onClick={() => {
            if (control > 1) {
              setControl(control - 1);
            }
          }}
        >
          <ArrowLeft />
        </button>
        <button
          className="btn"
          onClick={() => {
            if (control < 3) {
              setControl(control + 1);
            }
          }}
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Client;
