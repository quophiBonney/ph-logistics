import React from "react";
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
  return (
    <div className="container mb-5" style={{ marginTop: "100px" }}>
      <div className="row">
        <div
          className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-4 flex-fill"
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
              <form>
                <div className="d-flex justify-content-between">
                  <div className="form-group mt-4 w-100">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control p-3"
                    />
                  </div>
                  <div className="form-group mt-4 w-100 mx-4">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control p-3"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="form-group mt-4 w-100">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="form-control p-3"
                    />
                  </div>
                  <div className="form-group mt-4 w-100 mx-4">
                    <input
                      type="text"
                      placeholder="Phone No:"
                      className="form-control p-3"
                    />
                  </div>
                </div>
                <div className="form-group mt-4 w-100">
                  <textarea
                    rows={8}
                    type="text"
                    placeholder="Email address"
                    className="form-control"
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
          className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-4 flex-fill"
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
              className="p-2 px-5 btn btn-outline-light w-50 fw-bold text-uppercase"
            >
              Talk To Us
            </Link>
          </div>
          <div className="card px-5 mt-3 mb-5 h-50">
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
