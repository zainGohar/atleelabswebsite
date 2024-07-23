import React from "react";
import Link from "next/link";

const BigdataFunFacts = () => {
  return (
    <>
      <div className="funfacts-area bg-image ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>We always try to understand users expectation</h2>
            <div className="bar"></div>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-3 col-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-funfact">
                <h3>10+</h3>
                <p>Products</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-funfact">
                <h3>100K</h3>
                <p>Users</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-funfact">
                <h3>20+</h3>
                <p>Team Members</p>
              </div>
            </div>

            {/* <div
              className="col-lg-3 col-md-3 col-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-funfact">
                <h3>70+</h3>
                <p>Contributors</p>
              </div>
            </div> */}
          </div>

          <div
            className="contact-cta-box"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h3>Have any question about us?</h3>
            <p>Don't hesitate to contact us</p>

            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigdataFunFacts;
