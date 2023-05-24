import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import AboutSection from "../components/UI/AboutSection";
import Testimonial from "../components/UI/Testimonial";
const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h2 className="section__title">Avis des client</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
