import React from "react";
import Image from "next/image";
import airfreight from "../assets/air-freight1.jpg";
import seafreight from "../assets/sea-freight.jpg";
import haulage from "../assets/haulage.jpg";
import delivery from "../assets/delivery.jpg";
import customclear from "../assets/custom-clearance.jpg";
import tracking from "../assets/tracking.png";
import procurement from "../assets/procurement.jpg";
import importexport from "../assets/importexport.jpg";
import Link from "next/link";
import { FaPhoneSquareAlt } from "react-icons/fa";
const Freight = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 mt-4">
          <div>
            <h3 className="text-primary text-uppercase">
              Sea & Air Freighting
            </h3>
            <p>
              Unleash the power of both worlds with PH Logistics seamless Sea &
              Air Freight solutions. Whether you need the speed of air or the
              cost-efficiency of sea, we expertly navigate every route, ensuring
              your cargo arrives on time and on budget.
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <Image
                  src={airfreight}
                  alt="air freight"
                  className="img-fluid"
                />
              </div>
              <div className="mx-2">
                <Image
                  src={seafreight}
                  alt="sea freight"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-primary text-uppercase">
              Haulage & Tracking Of Goods
            </h3>
            <p>
              From bustling city streets to remote corners of the globe, PH
              Logistic ensures your precious cargo navigates every mile with
              precision and peace of mind. Our comprehensive haulage and
              tracking solutions put you in control, every step of the journey.
            </p>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <Image
                  src={haulage}
                  alt="logistics haulage"
                  className="img-fluid"
                />
              </div>
              <div className="mx-2">
                <Image
                  src={tracking}
                  alt="logistics tracking system"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-primary text-uppercase">
              Door To Door Delivery & Customs Clearance
            </h3>
            <p>
              Let PH Logistics take the hassle out of logistics! We handle
              everything from pick-up at your door to delivery at your
              recipient&#39;s, including expert customs clearance, leaving you
              free to focus on what matters most
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <Image
                  src={delivery}
                  alt="door to door delivery"
                  className="img-fluid"
                />
              </div>
              <div className="mx-2">
                <Image
                  src={customclear}
                  alt="custom clearance"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 mb-5">
            <h3 className="text-primary text-uppercase">
              Import/Export & Procurement
            </h3>
            <p>
              Bridge the Gap: Seamless Import/Export & Procurement Solutions for
              Global Success Expanding your reach beyond borders? PH Logistics
              empowers you to navigate the world of import, export, and
              procurement with confidence. We bridge the gap between your needs
              and your global success, seamlessly connecting you to the
              resources and markets you desire.
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <Image
                  src={importexport}
                  alt="import & export services and logistics"
                  className="img-fluid"
                />
              </div>
              <div className="mx-2">
                <Image
                  src={procurement}
                  alt="procurement logistics in Ghana"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-4">
          <div className="px-4">
            <div className="bg-primary px-5 p-3 mb-3">
              <Link
                href="/services"
                className="text-light text-decoration-none text-uppercase"
              >
                Get Free Quote
              </Link>
            </div>
            <div className="bg-primary text-uppercase px-3 p-3 mb-5">
              <div className="d-flex text-light">
                <div className="p-0 m-0">
                  <FaPhoneSquareAlt size={30} />
                </div>
                <div className="p-0 m-0">
                  <p className="fs-4 mx-3">24/7 Support</p>
                  <p className="text-dark fs-4">Call Us Anytime</p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="text-primary text-uppercase">Key Services</h4>
              <ul className="m-0 p-0" style={{ listStyle: "none" }}>
                <li>Warehousing Services</li>
                <li>Project Cargo</li>
                <li>Cargo Handling</li>
                <li>Chartered Flights</li>
                <li>Movable</li>
                <li>Haulage</li>
                <li>Customs Brokage</li>
                <li>Sea & Air Freight</li>
              </ul>
            </div>
          </div>
          <div className="px-4 mt-5">
            <div className="bg-primary px-5 p-3 mb-3">
              <Link
                href="/services"
                className="text-light text-decoration-none text-uppercase"
              >
                Get Free Quote
              </Link>
            </div>
            <div className="bg-primary text-uppercase px-3 p-3 mb-5">
              <div className="d-flex text-light">
                <div className="p-0 m-0">
                  <FaPhoneSquareAlt size={30} />
                </div>
                <div className="p-0 m-0">
                  <p className="fs-4 mx-3">24/7 Support</p>
                  <p className="text-dark fs-4">Call Us Anytime</p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="text-primary text-uppercase">Key Services</h4>
              <ul className="m-0 p-0" style={{ listStyle: "none" }}>
                <li>Warehousing Services</li>
                <li>Project Cargo</li>
                <li>Cargo Handling</li>
                <li>Chartered Flights</li>
                <li>Movable</li>
                <li>Haulage</li>
                <li>Customs Brokage</li>
                <li>Sea & Air Freight</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freight;
