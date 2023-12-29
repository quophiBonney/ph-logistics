import React from "react";
import Image from "next/image";
import cargo from "../assets/cargo.jpg";
import haulage from "../assets/haulage.jpg";
import cargohandling from "../assets/cargo-handling.jpg";
import Link from "next/link";
import { FaLock, FaEdit } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
const ServicesCard = () => {
  return (
    <section
      className="container-fluid bg-primary"
      style={{ marginTop: "100px" }}
    >
      <div className="container">
        <div className="text-center py-4">
          <h3 className="text-uppercase text-light fw-bold">
            Our Major Services
          </h3>
          <p className="text-light">
            We offer a complete range of logistical solutions to suit importers
            and shippers worldwide.
          </p>
        </div>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3"
            data-aos="flip-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="flex-fill h-100 shadow services-card-container">
              <Image src={cargo} alt="project cargo" className="img-fluid" />
              <div className="px-2 mt-3 mb-3">
                <h5 className="fw-bold">Project Cargo</h5>
                <p>
                  Tame the logistics beast with our specialized handling for
                  oversized and complex project cargo. Wind turbines, oil rigs,
                  even entire factories - we conquer the challenges of moving
                  your behemoths safely and efficiently.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3"
            data-aos="flip-right"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="flex-fill h-100 shadow services-card-container">
              <Image
                src={cargohandling}
                alt="cargo handling"
                className="img-fluid"
              />
              <div className="px-2 mt-3 mb-3">
                <h5 className="fw-bold">Cargo Handling</h5>
                <p>
                  Move your goods faster, safer, and more cost-effectively with
                  our comprehensive cargo handling expertise. We navigate the
                  complex world of logistics, ensuring your shipments arrive on
                  time and in perfect condition.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3"
            data-aos="flip-right"
            data-aos-delay="500"
            data-aos-duration="3000"
          >
            <div className="flex-fill h-100 shadow services-card-container">
              <Image
                src={haulage}
                alt="haulage service"
                className="img-fluid"
              />
              <div className="px-2 mt-3 mb-3">
                <h5 className="fw-bold">Haulage</h5>
                <p>
                  From farm fresh produce to factory machines, we get your cargo
                  where it needs to be, on time and on budget. Forget logistical
                  headaches – our diverse haulage solutions keep your supply
                  chain smooth and your business thriving.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <Link
            href="/services"
            className="btn btn-outline-light text-uppercase px-5 p-3 mb-5"
          >
            Explore all services
          </Link>
        </div>
      </div>
      <div className="row mt-5 mb-3">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex-fill bg-light h-100 mt-3">
          <h3 className="fw-bold text-uppercase text-primary mb-5 mx-5 px-5 mt-3">
            Why Choose Us
          </h3>
          <div className="d-flex mt-3 mx-5 px-5">
            <div className="">
              <FaLock size={30} className="text-primary" />
            </div>
            <div className="mx-4">
              <h5 className="text-uppercase fw-bold text-primary">
                Good In Transit Insurance
              </h5>
              <p>
                We place premium value on your goods. With us your goods are
                comprehensively insured against loss, damage, theft, and delay.
              </p>
            </div>
          </div>
          <div className="d-flex mt-3 mx-5 px-5">
            <div className="">
              <TbWorld size={30} className="text-primary" />
            </div>
            <div className="mx-4">
              <h5 className="text-uppercase fw-bold text-primary">
                Wider Global Footprints
              </h5>
              <p>
                With a presence in 189 countries and over 6,253 member offices,
                we can connect your cargo to virtually any corner of the globe.
              </p>
            </div>
          </div>
          <div className="d-flex mt-3 mx-5 px-5">
            <div className="">
              <FaEdit size={30} className="text-primary" />
            </div>
            <div className="mx-4">
              <h5 className="text-uppercase fw-bold text-primary">
                Customer Clearance
              </h5>
              <p>
                Get your cargo cleared and delivered fast! PH Logistics
                typically completes clearance within 3-5 working days from the
                moment we receive your documents and your goods arrive.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex-fill bg-primary m-0 p-0 text-light">
          <h3 className="h-100 text-uppercase mt-5 px-5 fw-bold py-5 mb-3">
            Boost your supply chain efficiency and cut costs with PH
            Logistic&#39;s custom-tailored logistics solutions. We cater to both
            corporations and individuals, ensuring your cargo moves seamlessly
            and arrives on time
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
