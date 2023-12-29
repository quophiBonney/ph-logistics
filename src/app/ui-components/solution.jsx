import React from "react";
import Link from "next/link";
const Solution = () => {
  return (
    <div
      className="container-fluid bg-primary text-light px-5"
      style={{ marginTop: "100px" }}
    >
      <div className="row">
        <div className="col-12 mt-5 mb-5">
          <h3 className="">
            <span className="text-dark">
              <em>Let&#39;s Help You</em>
            </span>
            &nbsp; Find A Reliable & Workable Solution To Meet Your Needs
          </h3>
          <div className="text-uppercase">
            <p>
              Call Us
              <strong>
                &nbsp;
                <Link
                  href="tel:+233549485984"
                  className="text-light text-decoration-none"
                >
                  +233549485984
                </Link>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
