"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaClock,
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutubeSquare,
} from "react-icons/fa";
const Intouch = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = () => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log(await response.json());
  };

  return (
    <div className="container mb-5" style={{ marginTop: "100px" }}>
      <div className="row">
        <div
          className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 flex-fill"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className="flex-fill h-100">
            <h3 className="text-uppercase text-primary">Get In Touch</h3>
            <p>
              Do you want to check the status of your shipment? or have any
              questions about our services?Send us a message or contact any of
              the numbers below. We respond to all queries and comments within
              24 business hours
            </p>
            <div className="mt-4 mb-4">
              <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between">
                  <div className="form-group mt-4 w-100">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control p-3"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mt-4 w-100 mx-2">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control p-3"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="form-group mt-4 w-100">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="form-control p-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-4 w-100 mx-2">
                    <input
                      type="text"
                      placeholder="Phone No:"
                      className="form-control p-3"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mt-4 w-100">
                  <textarea
                    rows={10}
                    cols={6}
                    type="text"
                    placeholder="How may we help you?"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4 w-100">
                  <input
                    type="submit"
                    className="btn btn-primary text-uppercase p-2 w-100 fw-bold"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 flex-fill"
          data-aos="flip-left"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <div className="flex-fill h-50 intouch-bg text-light">
            <h3 className="text-uppercase mb-3">
              We are committed to maximizing productivity & efficiency
            </h3>
            <Link
              href="tel:+233549485984"
              className="p-2 px-3 btn btn-outline-light w-50 fw-bold text-uppercase"
            >
              Talk To Us
            </Link>
          </div>
          <div className="card px-3 mt-3 mb-5">
            <ul style={{ listStyle: "none" }} className="mt-3">
              <li>
                <div className="d-flex">
                  <div className="text-primary mt-2">
                    <FaPhoneAlt size={30} />
                  </div>
                  <div className="mx-4">
                    <h4 className="fw-bold text-uppercase text-primary p-0 m-0">
                      Call Us
                    </h4>
                    <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                      <li>+233549485984</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <ul style={{ listStyle: "none" }} className="mt-3">
              <li>
                <div className="d-flex">
                  <div className="text-primary mt-2">
                    <FaEnvelope size={30} />
                  </div>
                  <div className="mx-4">
                    <h4 className="fw-bold text-uppercase text-primary p-0 m-0">
                      Email Us
                    </h4>
                    <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                      <li>phlogisticsghana@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <ul style={{ listStyle: "none" }} className="mt-3">
              <li>
                <div className="d-flex">
                  <div className="text-primary mt-2">
                    <FaClock size={30} />
                  </div>
                  <div className="mx-4">
                    <h4 className="fw-bold text-uppercase text-primary p-0 m-0">
                      Working Hours
                    </h4>
                    <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                      <li className="fw-bold">24/7</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <ul style={{ listStyle: "none" }} className="mt-3">
              <li>
                <div className="mx-4">
                  <Link href="www.facebook.com" className="mx-2">
                    <FaFacebookSquare size={30} className="text-primary" />
                  </Link>
                  <Link href="www.instagram.com" className="mx-2">
                    <FaInstagramSquare size={30} className="text-danger" />
                  </Link>
                  <Link href="www.linkedin.com" className="mx-2">
                    <FaLinkedinIn size={30} className="text-primary" />
                  </Link>
                  <Link href="www.youtube.com" className="mx-2">
                    <FaYoutubeSquare size={30} className="text-danger" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intouch;
