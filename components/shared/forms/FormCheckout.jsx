import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import ModuleCheckoutSummary from "~/components/shared/forms/modules/ModuleCheckoutSummary";
const FormCheckout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [note, setNote] = useState("");

  const location = useLocation();
  const price = location.price;
  console.log(price);
  return (
    <form className="ps-form--checkout" action="index.html" method="get">
      <div className="row">
        <div className="col-md-6">
          <div className="ps-form__billings">
            <h4 className="ps-form__heading">Billings</h4>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    First Name <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Last Name <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                www
                <div className="form-group">
                  <label>Company Name (optional)</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    onChange={(event) => setCompany(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    Country <sup>*</sup>
                  </label>
                  <select
                    className="ps-select form-control"
                    onChange={(event) => setCountry(event.target.value)}
                  >
                    <option value="Democratic Republic of the Congo">
                      Select your country
                    </option>
                    <option value="Democratic Republic of the Congo">
                      Democratic Republic of the Congo
                    </option>
                    <option value="South Africa">South Africa</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    Street address <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="House number and street name"
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>Postcode / ZIP (optional)</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Apartment, suite, unit etc. (optional)"
                    onChange={(event) => setZip(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    Town / City <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    onChange={(event) => setCity(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Email <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Phone <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    onChange={(event) => setTelephone(event.target.value)}
                  />
                </div>
              </div>
              {/* <div className="col-sm-12"></div> */}
              {/* <div className="col-sm-12">
                <div className="form-group shipping">
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="shipping"
                      name="shipping"
                    />
                    <label htmlFor="shipping">
                      <strong>Shipping to different Address</strong>
                    </label>
                  </div>
                </div>
              </div> */}
              <div className="col-sm-12">
                <div className="form-group">
                  <label>Order notes (optional)</label>
                  <textarea
                    className="form-control"
                    rows="6"
                    onChange={(event) => setNote(event.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ps-form__orders">
            <h3>Your order</h3>
            <ModuleCheckoutSummary
              firstName={firstName}
              lastName={lastName}
              company={company}
              country={country}
              address={address}
              zip={zip}
              city={city}
              email={email}
              telephone={telephone}
              note={note}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormCheckout;
