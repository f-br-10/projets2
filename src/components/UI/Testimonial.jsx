import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import image1 from "../../assets/all-images/1.jpg";
import image2 from "../../assets/all-images/2.png";
import image3 from "../../assets/all-images/3.jpg";
import image4 from "../../assets/all-images/4.png";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        J'ai été extrêmement satisfait des services du laboratoire médical. Les résultats de mes analyses ont été fournis de manière rapide et précise. Le personnel était amical, compétent et a répondu à toutes mes questions avec patience. Je recommande vivement ce laboratoire pour leur professionnalisme et leur qualité de service exceptionnelle." - Sophie L
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={image1} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">houssem</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        J'ai eu une expérience formidable avec ce laboratoire médical. Les techniciens étaient très attentifs et ont pris le temps de m'expliquer chaque étape de mes analyses. Les résultats étaient complets et faciles à comprendre. Je me sens en confiance avec les services fournis par ce laboratoire et je continuerai à utiliser leurs services à l'avenir." - Marc D
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={image2} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">amine</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Le laboratoire médical a dépassé toutes mes attentes. Non seulement ils ont fourni des résultats précis et rapides, mais l'équipe a également été très attentionnée et compréhensive. Ils ont su répondre à mes inquiétudes et m'ont apporté un soutien supplémentaire. Je suis reconnaissant d'avoir choisi ce laboratoire pour mes analyses médicales et je les recommande vivement
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={image3} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">sonia</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        J'ai été impressionné par le professionnalisme et la courtoisie du personnel du laboratoire médical. Ils ont pris le temps de m'écouter et de répondre à toutes mes questions. Les résultats des analyses étaient détaillés et ont été livrés dans les délais promis. Je me sens en confiance en utilisant les services de ce laboratoire et je les recommande sans hésitation
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={image4} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">sonia</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
