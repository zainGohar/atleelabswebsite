import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import icon1 from "/public/icons/skimming.png";
import icon2 from "/public/icons/shipgpt.png";
import icon3 from "/public/icons/recaster.png";
import icon4 from "/public/icons/chatwebby.png";
import icon5 from "/public/icons/Ekhata.png";
import icon6 from "/public/icons/olabooks.png";

import rectangle from "/public/images/bigdata-analytics/rectangle.png";

const Services = () => {
  return (
    <>
      <div className="bigdata-services-area ptb-80 bg-eef6fd">
        <div className="container">
          <div className="section-title">
            <h2>Products We Have Shipped So Far</h2>
            <div className="bar"></div>
            <p>
            We are not just a services company, we are the founders of these amazing products. 
            Explore <span style={{textDecoration:'underline',cursor:"pointer"}}>FULL list</span>  of Products.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image src={icon1} alt="image" width={50} height={50} />
                </div>
                <h3>
                  <Link href="https://www.skimming.ai/">Skimming AI</Link>
                </h3>
                <p>
                  Get Summaries & Automate Work. Join millions of students,
                  researchers, YouTubers, podcasters, lawyers and professionals.
                </p>

                <Link
                  href="https://www.skimming.ai/"
                  className="learn-more-btn"
                >
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <Image
                    src="/images/bigdata-analytics/rectangle.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image src={icon2} alt="image" width={50} height={50} />
                </div>
                <h3>
                  <Link href="https://shipgpt.ai/">ShipGPT AI</Link>
                </h3>
                <p>
                  Instead of hiring full stack developers, you can directly
                  access the ready made AI repo built on latest libraries,
                  models and practices.
                </p>

                <Link href="https://shipgpt.ai/" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <Image
                    src="/images/bigdata-analytics/rectangle.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image src={icon3} alt="image" width={50} height={50} />
                </div>
                <h3>
                  <Link href="https://www.recaster.ai/">Recaster AI</Link>
                </h3>
                <p>
                  Turn your Shopify/Amazon/WordPress/Ali Baba Images into
                  SEO-Content. Improve your SEO up to 80% without
                  content writers.
                </p>

                <Link
                  href="https://www.recaster.ai/"
                  className="learn-more-btn"
                >
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <Image
                    src="/images/bigdata-analytics/rectangle.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image src={icon4} alt="image" width={50} height={50} />
                </div>
                <h3>
                  <Link href="https://chatwebby.com/">Chatwebby AI</Link>
                </h3>
                <p>
                  Create AI chatbots using Chatwebby AI. Add content (Website,
                  docs, media, FAQs) and it builds bots for support,
                  queries, and leads.
                </p>

                <Link href="https://chatwebby.com/" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <Image
                    src="/images/bigdata-analytics/rectangle.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image src={icon5} alt="image" width={50} height={50} />
                </div>
                <h3>
                  <Link href="https://www.ekhataerp.com/">Ekhata ERP</Link>
                </h3>
                <p>
                  A tailored made accounting & inventory ERP for 100M+ SMEs to
                  digitize the daily operations and finance according to
                  their custom needs.
                </p>

                <Link
                  href="https://www.ekhataerp.com/"
                  className="learn-more-btn"
                >
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <Image
                    src="/images/bigdata-analytics/rectangle.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image src={icon6} alt="image" width={50} height={50} />
                </div>
                <h3>
                  <Link href="">Olabooks</Link>
                </h3>
                <p>
                  Use Olabooks to create unlimited free invoices & send
                  beautiful looking & professional invoices to your clients
                </p>

                <Link href="" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <Image src={rectangle} alt="image" width={230} height={226} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
