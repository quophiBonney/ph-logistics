import React from "react";
import {
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaDotCircle,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import logo from "../assets/ph-logistics-lg-logo.png";
import Image from "next/image";
import "./components.css";
const AppFooter = () => {
  return (
    <div>
      <footer className="container-fluid footer-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mt-5 text-light">
              <Image src={logo} alt="PH Logistics logo" className="img-fluid" />
              <p className="footer-p">
                PH Logistics is a helping all persons to ship from China, Dubai,
                UK, USA and Turkey to all part of Ghana.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mt-5 text-light">
              <h5 className="text-uppercase fw-bold">Services</h5>
              <ul className="m-0 p-0" style={{ listStyle: "none" }}>
                <li className="mb-2">
                  <Link
                    href="/"
                    className="text-light text-decoration-none footer-p"
                  >
                    Sea & Air Freighting
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/"
                    className="text-light text-decoration-none footer-p"
                  >
                    Cargo Handling
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/"
                    className="text-light text-decoration-none footer-p"
                  >
                    Warehousing Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/"
                    className="text-light text-decoration-none footer-p"
                  >
                    Customer Brokage
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mt-5 text-light">
              <h5 className="text-uppercase fw-bold">Contact Us</h5>
              <ul className="m-0 p-0" style={{ listStyle: "none" }}>
                <li className="m-0 text-uppercase footer-p">PH Logistics</li>
                <hr style={{ color: "#fff" }} />
                <li className="footer-p">+233549485984</li>
                <hr style={{ color: "#fff" }} />
                <li className="footer-p">phlogisticsghana@gmail.com</li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mt-5 text-light">
              <h5 className="text-uppercase fw-bold">Follow Us</h5>
              <div className="d-flex justify-content-between">
                <div className="bg-primary w-50 h-50 text-center p-3 card">
                  <Link
                    href="https://www.facebook.com/@ph_logistics_gh"
                    target="_blank"
                    className="text-light"
                  >
                    <FaFacebook size={25} />
                  </Link>
                </div>
                <div className="bg-danger w-50 h-50 text-center p-3 card mx-2">
                  <Link href="#" className="text-light">
                    <FaYoutube size={25} />
                  </Link>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="bg-outline-light w-50 h-50 text-center p-3 card">
                  <Link
                    href="https://www.instagram.com/@ph_logistics_gh"
                    target="_blank"
                    className="text-dark"
                  >
                    <FaInstagram size={25} className="text-danger" />
                  </Link>
                </div>
                <div className="bg-success w-50 h-50 text-center p-3 card mx-2">
                  <Link
                    href="https://wa.me/+233549485984"
                    target="_blank"
                    className="text-light"
                  >
                    <FaWhatsapp size={25} />
                  </Link>
                </div>
              </div>
            </div>
            <hr style={{ color: "#fff" }} className="mt-5" />
            <p className="footer-p text-light text-center mb-5 mt-3">
              Copyright &copy; 2023&nbsp;
              <Link href="/" className="text-decoration-none">
                PH Logistics
              </Link>
              &nbsp;
              <FaDotCircle size={18} className="text-light" />
              &nbsp;
              <Link
                href="https://solomonbonney.vercel.app"
                className="text-decoration-none"
              >
                Powered By Bonney Inc. Ghana
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppFooter;
