import React from "react";
import Image from "next/image";
import partner1 from "../assets/partner1.png";
import partner5 from "../assets/partner5.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";

const Partners = () => {
  return (
    <section
      className="container mb-5"
      style={{ marginTop: "100px" }}
      data-aos="slide-up"
      data-aos-duration="1500"
      data-aos-delay="200"
    >
      <div className="text-center">
        <h3 className="text-uppercase text-primary">They Trust Us</h3>
        <p>
          Their word is our bond. At PH Logistics, customer trust is our
          greatest asset
        </p>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5 d-flex justify-content-between">
          <div className="mx-2">
            <Image
              src={partner1}
              alt="partner of PH Logistics Ghana"
              className="img-fluid"
              width={200}
            />
          </div>
          <div className="mx-2">
            <Image
              src={partner5}
              alt="partner of PH Logistics Ghana"
              className="img-fluid"
              width={250}
            />
          </div>
          <div className="mx-2">
            <Image
              src={partner3}
              alt="partner of PH Logistics Ghana"
              className="img-fluid"
              width={200}
            />
          </div>
          <div className="mx-2">
            <Image
              src={partner4}
              alt="partner of PH Logistics Ghana"
              className="img-fluid"
              width={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
