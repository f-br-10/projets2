import React from "react";
import { Form, FormGroup } from "reactstrap";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/about.css";

const client = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Helmet title="client">
      <CommonSection title="nouveau client" />
      <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="id" placeholder="id" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Nom" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Prenom" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="homme">homme</option>
          <option value="femme">femme</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="telephone" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Adresse" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="homme">homme</option>
          <option value="femme">femme</option>
        </select>
      </FormGroup>
      <div className="payment mt-3 d-flex align-items-center justify-content-between" >
        <button type="submit">enregistrer</button>
        <button type="reset">reset</button>
      </div><br />
    </Form>
    </Helmet>
  );
};

export default client;
