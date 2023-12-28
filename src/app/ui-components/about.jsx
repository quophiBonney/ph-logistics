import React from "react";
import phlogo from "../assets/ph-logistics.png";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-4">
          <div className="flex-fill h-100">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <h3 className="text-uppercase">
                Welcome To&nbsp;
                <span className="text-primary">PH Logistics Company</span>, Your
                Authentic And Reliable Logistics Provider
              </h3>
              <p>
                PH Logistics was established in November 2020 with headquarter
                in Accra and branches in Tema. The Company has presence in over
                2400 major air and sea ports worldwide with our partnership with
                WCA (World Cargo Alliance) and JC Trans.
              </p>
            </div>
            <Image
              src={phlogo}
              alt="ph logistics management "
              className="img-fluid mb-3"
              data-aos="slide-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            />
            <div
              data-aos="slide-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <p>
                We are committed to maximizing productivity and efficiency by
                delivering uniquely designed Shipping and Logistics solutions to
                both corporate and individual clients.
              </p>
              <p>
                PH Logistics with long standing experience in its field of
                operations is ever ready to take over any job when called upon.
                The company has grown by providing high quality logistical
                services to meet the needs of operators and producers. It is in
                the forefront of quality development in the region, working to
                the world-class standards with a continual program of
                improvement.
              </p>
            </div>

            <div
              data-aos="flip-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <Link
                href="/contact"
                className="btn btn-primary text-uppercase px-5 p-3 mb-5"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-4">
          <div className="px-4 flex-fill">
            <div
              className="bg-primary p-3 text-light flex-fill h-100"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              <h4 className="text-uppercase mt-3">Our History</h4>
              <p>
                Founded by Miss Vida Akapo with a vision of becoming the most
                trusted partner for every individual and business, delivering
                exceptional experiences and personalized solutions that exceed
                expectations in shipping and logistics., we've grown from a a
                start-up into a household name in the world of logistics and
                shipping including warehousing, customs clearance, tracking of
                goods etc.
              </p>
            </div>
            <div
              className="bg-primary p-3 text-light flex-fill h-100 mt-3"
              data-aos="slide-left"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              <h4 className="text-uppercase mt-3">Our Mission</h4>
              <p>
                To empower global trade through intelligent, sustainable, and
                human-centered shipping and logistics solutions, exceeding
                expectations and leaving a positive footprint on the world.
              </p>
            </div>
            <div
              className="bg-primary p-3 text-light flex-fill h-100 mt-3"
              data-aos="slide-up"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              <h4 className="text-uppercase mt-3">Our Vision</h4>
              <p>
                Our vision is to be the most trusted partner for every
                individual and business, delivering exceptional experiences and
                personalized solutions that exceed expectations in shipping and
                logistics.
              </p>
            </div>
            <div
              className="bg-primary p-3 text-light flex-fill h-100 mt-3"
              data-aos="flip-right"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              <h4 className="text-uppercase mt-3">Our Values</h4>
              <p>
                We embrace change and constantly evolve to deliver smarter
                solutions. We minimize our environmental impact while ensuring
                responsible growth. We prioritize exceptional service and
                personalized experiences. We conduct business with honesty and
                transparency. We foster a diverse and supportive environment for
                all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
