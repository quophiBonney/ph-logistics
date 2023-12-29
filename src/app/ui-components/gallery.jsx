import React from "react";
import Image from "next/image";
import Link from "next/link";
import car from "../assets/car.jpg";
import machine from "../assets/machine.jpg";
import truck from "../assets/truck.jpg";
import excavator from "../assets/excavator.jpg";
import item from "../assets/item.jpg";
import yellow from "../assets/yellow.jpg";
import products from "../assets/products.jpg";
import boxes from "../assets/boxes.jpg";
import { FaEnvelope } from "react-icons/fa";
const Gallery = () => {
  return (
    <div className="container-fluid px-5 mb-5" style={{ marginTop: "100px" }}>
      <div className="text-center mb-3">
        <h3 className="text-uppercase fw-bold text-primary">Our Gallery</h3>
        <p>Our warehousing services, delivery works and a lot more.</p>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-4 gallery-img">
          <div className="flex-fill h-100 card shadow">
            <Image src={car} alt="shipping car" className="img-fluid h-100" />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-4 gallery-img">
          <div className="flex-fill h-100 card shadow">
            <Image
              src={machine}
              alt="shipping heavy duty"
              className="img-fluid h-100"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-4 gallery-img">
          <div className="flex-fill h-100 card shadow">
            <Image
              src={truck}
              alt="truck carrying container"
              className="img-fluid h-100"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-4 gallery-img">
          <div className="flex-fill h-100 card shadow">
            <Image
              src={excavator}
              alt="excavator"
              className="img-fluid h-100"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-4 gallery-img">
          <div className="flex-fill h-100 card shadow">
            <Image
              src={item}
              alt="PH logistics Ghana delivery"
              className="img-fluid h-100"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-4 gallery-img">
          <div className="flex-fill h-100 card shadow">
            <Image
              src={boxes}
              alt="shipping and warehouse products"
              className="img-fluid h-100"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-4 gallery-img">
          <div className="flex-fill h-100 card shadow">
            <Image
              src={yellow}
              alt="shipping and warehouse instrumentss"
              className="img-fluid h-100"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-4 gallery-img">
          <div className="flex-fill h-100 card shadow">
            <Image
              src={products}
              alt="products at warehouse"
              className="img-fluid h-100"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <p>
          We are committed to maximizing productivity and efficiency by
          delivering uniquely designed Shipping and Logistics solutions to both
          corporate and individual clients. Unleash the power of both worlds
          with PH Logistics seamless Sea & Air Freight solutions. Whether you
          need the speed of air or the cost-efficiency of sea, we expertly
          navigate every route, ensuring your cargo arrives on time and on
          budget.
        </p>
        <Link href="/contact" className="btn btn-primary text-light p-2">
          <FaEnvelope size={20} className="mx-2" /> Contact Us Now
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
