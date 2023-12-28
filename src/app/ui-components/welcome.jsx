import React from "react";
import Image from "next/image";
import cargo from "../assets/cargo.jpg";
import Link from "next/link";
const Welcome = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div
          className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-5"
          data-aos="slide-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="flex-fill h-100">
            <h3 className="text-uppercase text-primary">
              Welcome To PH Logistics
            </h3>
            <p>
              PH Logistics is a Shipping and Logistics service provider. We are
              located in Ghana, and the West African sub-region. Your delivery
              is our priority. Futhermore our dedicated team of professional
              logistics experts work 24/7 in order to ensure that the right
              cargo is delivered to the right customer, at the right place and
              similarly, at the right time. Above all, in the right condition,
              in the right quantity, and at the right price.
            </p>
            <p>
              Our comprehensive expert services cover the fields of shipping,
              clearing and logistics, with a strong international network to
              further bolster our operations. We provide a proximity service
              combined with significant local and international capacity. Our
              aim is to supply simple, yet innovative, logistics solutions to
              meet even the most complex requirements. Our team of logistics
              professionals work 24/7 to ensure your 100% satisfaction.
            </p>
            <div>
              <Link
                href="/"
                className="btn btn-primary text-light p-3 text-uppercase w-50"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-5"
          data-aos="slide-left"
          data-aos-delay="400"
          data-aos-duration="1500"
        >
          <div className="flex-fill h-100">
            <Image
              src={cargo}
              alt="cargo & logistics"
              className="img-fluid h-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
