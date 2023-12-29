import React from "react";

const Map = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254065.9011895051!2d-0.4226303100586293!3d5.744825592241616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf7813750f31c5%3A0xfd4418116c93e661!2sRufus%20Green%20Parks!5e0!3m2!1sen!2sgh!4v1703083667669!5m2!1sen!2sgh"
            className="img-fluid w-100"
            style={{ border: "0", height: "450px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
