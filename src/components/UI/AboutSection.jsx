import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/img02.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "150px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About </h4>
              <h2 className="section__title">Bienvenue</h2>
              <p className="section__description">
              Bienvenue chez notre laboratoire médical 
Nous sommes une équipe de professionnels dévoués et passionnés, spécialisés dans l'analyse médicale de pointe. Notre objectif est de fournir des services de laboratoire de la plus haute qualité, en mettant l'accent sur la précision, la fiabilité et la rapidité des résultats.
Notre laboratoire est équipé des dernières technologies et nous suivons les normes les plus strictes en matière de sécurité et de qualité. Nos techniciens qualifiés et notre personnel médical expérimenté travaillent en étroite collaboration pour garantir des analyses précises et des résultats fiables.
Nous offrons une large gamme de services d'analyse médicale

              </p>


            
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
