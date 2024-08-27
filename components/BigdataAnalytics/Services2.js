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

const Services2 = () => {
  const TitleStyle={
    fontSize:"20px",
    };
  const containerStyle = {
    padding: "80px 0",
    backgroundColor: "#f5f5f5",
  };

  const sectionTitleStyle = {
    textAlign: "center",
    marginBottom: "50px",
  };

  const barStyle = {
    width: "50px",
    height: "4px",
    backgroundColor: "#ff6347",
    margin: "20px auto",
  };

  const productTitleStyle = {
    color: "#333",
    fontSize: "28px",
    marginBottom: "10px",
  };

  const productDescriptionStyle = {
    color: "#666",
    fontSize: "16px",
  };

  const learnMoreBtnStyle = {
    display: "inline-flex",
    alignItems: "center",
    marginTop: "15px",
    color: "#ff6347",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.7s ease",
   
  };

  const iconStyle = {
    marginBottom: "20px",
  };

  const shapeStyle = {
    position: "absolute",
    bottom: "-20px",
    right: "-20px",
    zIndex: "-1",
    opacity: "0.7",
  };

  const servicesBoxItemStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    position: "relative",
    marginBottom: "30px",
    transition: "transform 0.3s ease",
  };

  const servicesBoxItemHoverStyle = {
    transform: "translateY(-10px)",
  };

  return (
    <>
      <div style={containerStyle}>
        <div className="container">
          <div style={sectionTitleStyle}>
            <h2 style={productTitleStyle}>Our Services So Far</h2>
            <div style={barStyle}></div>
            <p>
            From testing your ideas/assumption to launch MVP, pivot and Scaling. Consider us in.
            Explore {" "}
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                FULL list
              </span>{" "}
              of Services.
            </p>
          </div>

          <div className="row justify-content-center">
            {[
              { icon: icon1, title: " Custom AI Development (RAG, Fine Tuning, AI Chatbots, Big Data AI)", description: "Get Summaries & Automate Work. Join millions of students, researchers, YouTubers, podcasters, lawyers and professionals.", link: "https://www.skimming.ai/" },
              { icon: icon2, title: "Custom Web APP Developmen", description: "Instead of hiring full stack developers, you can directly access the ready-made AI repo built on the latest libraries, models, and practices.", link: "https://shipgpt.ai/" },
              { icon: icon3, title: "Fine Tuning Models", description: "Turn your Shopify/Amazon/WordPress/Ali Baba Images into SEO-Content. Improve your SEO up to 80% without content writers.", link: "https://www.recaster.ai/" },
              { icon: icon4, title: "Custom Mobile APP Development", description: "Create AI chatbots using Chatwebby AI. Add content (Website, docs, media, FAQs) and it builds bots for support, queries, and leads.", link: "https://chatwebby.com/" },
              { icon: icon5, title: "Launching Product", description: "A tailored-made accounting & inventory ERP for 100M+ SMEs to digitize the daily operations and finance according to their custom needs.", link: "https://www.ekhataerp.com/" },
              { icon: icon6, title: "Listing Products", description: "Use Olabooks to create unlimited free invoices & send beautiful looking & professional invoices to your clients.", link: "" },
              { icon: icon6, title: "Desktop Development", description: "Use Olabooks to create unlimited free invoices & send beautiful looking & professional invoices to your clients.", link: "" }
            ].map((product, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
                data-aos-duration="500"
                data-aos-once="true"
                style={servicesBoxItemStyle}
                onMouseEnter={(e) => e.currentTarget.style.transform = servicesBoxItemHoverStyle.transform}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
              >
                <div style={iconStyle}>
                  <Image src={product.icon} alt="image" width={50} height={50} />
                </div>
                <h3 style={TitleStyle}>
                  <Link href={product.link}>{product.title}</Link>
                </h3>
                <p style={productDescriptionStyle}>
                  {product.description}
                </p>
                <Link href={product.link} style={learnMoreBtnStyle}>
                  <Icon.ArrowRight /> Learn More
                </Link>
                <div style={shapeStyle}>
                  <Image
                    src={rectangle}
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services2;
