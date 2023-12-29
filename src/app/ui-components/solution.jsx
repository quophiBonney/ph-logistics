import React from "react";
import Link from "next/link";
const Solution = () => {
  return (
    <div
      className="container-fluid bg-primary text-light"
      style={{ marginTop: "100px" }}
    >
      <div className="container p-5">
        <div className="row">
          <div className="col-12">
            <h3 className="">
              <span className="text-dark">
                <em>Let&#39;s Help You</em>
              </span>
              &nbsp; Find A Reliable & Workable Solution To Meet Your Needs
            </h3>
            <div className="d-flex">
              <div>
                <Link
                  href="/contact"
                  className="btn btn-outline-light text-uppercase"
                >
                  Send Us A Message
                </Link>
              </div>
              <div className="text-uppercase mx-4">
                <p>
                  OR Call Us
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
      </div>
    </div>
  );
};

export default Solution;
