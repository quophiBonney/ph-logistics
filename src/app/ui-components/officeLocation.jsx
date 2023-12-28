import React from "react";

const OfficeLocation = () => {
  return (
    <div className="container-fluid bg-primary" style={{ marginTop: "100px" }}>
      <div
        className="container"
        data-aos="flip-right"
        data-aos-delay="100"
        data-aos-duration="1500"
      >
        <div className="text-center py-4">
          <h3 className="text-uppercase text-light">
            Office & Warehouse Locations
          </h3>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-4">
            <div>
              <h4 className="fw-bold text-uppercase">Ghana Office</h4>
              <ul className="p-0 m-0 mb-5" style={{ listStyle: "none" }}>
                <li>Floor #20</li>
                <li>Airport Shell Road</li>
                <li>+233549485984</li>
                <li>Accra, Ghana</li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-4">
            <div>
              <h4 className="fw-bold text-uppercase">Ghana Warehouse</h4>
              <ul className="p-0 m-0 mb-5" style={{ listStyle: "none" }}>
                <li>23 Avenue</li>
                <li>Madina - Adenta</li>
                <li>+233549485984</li>
                <li>Accra, Ghana</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;
