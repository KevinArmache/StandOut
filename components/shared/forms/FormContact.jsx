import React from "react";
import { useState } from "react";

const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
  };
  return (
    <form className="ps-form--contact" action="contact-us.html" method="get">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
          <div className="form-group">
            <label>
              Name <sup>*</sup>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
          <div className="form-group">
            <label>
              Email<sup>*</sup>
            </label>
            <input
              className="form-control"
              type="email"
              placeholder=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>
          Your Message<sup>*</sup>
        </label>
        <textarea
          className="form-control"
          rows="6"
          placeholder=""
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <div className="form-group submit">
        <input
          type="submit"
          className="ps-btn ps-btn--black send"
          value="Send message"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </div>
    </form>
  );
};

export default FormContact;
