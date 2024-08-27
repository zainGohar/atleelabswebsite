import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const MainBanner = () => {
  return (
    <>
      <div 
        className="bigdata-analytics-banner"
        style={{ backgroundImage: `url(/images/bigdata-analytics/main-banner.jpg)` }}
      >
        <div className="container">
          <div className="bigdata-analytics-content">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Convert Your AI Imaginations into AI Apps In 30 Days
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              You want to bring your AI ideas in life?
              You want to embed AI in your apps?
            </p>

            <Link
              href="/contact"
              className="btn btn-primary"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Lets connect
            </Link>
          </div>
        </div>

        <div className="banner-boxes-area">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="single-banner-boxes">
                  <div className="icon">
                    <Icon.Server />
                  </div>
                  <h3>Custom AI Use Cases</h3>
                  <p>
                  We embed AI in everything we do.
                  Atlee labs helps organizations and individuals with tailored solutions to bring their imagination into realities.  
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="single-banner-boxes">
                  <div className="icon">
                    <Icon.Code />
                  </div>
                  <h3>Case Studies</h3>
                  <p>
                  Atlee Labs has solved many trending problems in AI already. Lets explore…
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="single-banner-boxes">
                  <div className="icon">
                    <Icon.Users />
                  </div>
                  <h3>Why and How 30 days</h3>
                  <p>
                  At Atlee, we believe in shipping fast and <span style={{ textDecoration: 'underline',cursor:"pointer" }}>MVP</span> should not take more than 30 days to hit markets. Here is <span style={{ textDecoration: 'underline',cursor:"pointer" }}>why</span>?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
