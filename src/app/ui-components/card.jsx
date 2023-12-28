import React from "react";
import Link from "next/link";
import { FaClock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const Card = () => {
  return (
    <>
      <section
        className="container card border-0 shadow bg-primary"
        style={{ marginTop: "100px" }}
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 mt-3">
            <div className="d-flex">
              <div className="mx-2">
                <FaClock size={50} className="text-light" />
              </div>
              <div className="mx-2">
                <h6 className="fw-bold text-uppercase text-light mt-2">
                  Working Hours
                </h6>
                <p className="fw-bold">24/7</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-3">
            <div className=" d-flex">
              <div className="mx-2">
                <FaPhoneAlt size={50} className="text-light" />
              </div>
              <div className="mx-2">
                <h6 className="fw-bold text-uppercase text-light mt-2">
                  Contact Us
                </h6>
                <p className="fw-bold m-0">+233549485984</p>
                <p className="fw-bold">+233550883738</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
            <div className=" d-flex">
              <div className="mx-2">
                <FaEnvelope size={50} className="text-light" />
              </div>
              <div className="mx-2">
                <h6 className="fw-bold text-uppercase text-light mt-2">
                  Email Us
                </h6>
                <p className="fw-bold m-0">phlogisticsghana@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-3">
            <div className="mx-4">
              <Link
                href="/"
                className="btn btn-outline-light text-light text-uppercase mt-3 mb-3 shadow p-3"
              >
                Get A Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
