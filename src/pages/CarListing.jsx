import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Form, FormGroup } from "reactstrap";
const CarListing = () => {
  
      const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Helmet title="demande bilan">
      <CommonSection title="Demander Bilan" />
      <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block ms-4 mb-4">
        <label> Code Client ou Code Fiscal medecin :</label>
        <input type="number" placeholder="code" />
      </FormGroup>
      
      <div className="payment mt-3 d-flex align-items-center justify-content-between" >
        <button type="submit">consulter</button>
        <button type="reset">reset</button>
      </div><br />
    </Form>
    </Helmet>
  );
};

export default CarListing;
