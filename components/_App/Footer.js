import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <div/>
                <div className="single-footer-widget ps">
                <h3>Bring Your AI Ideas into AI Apps in 30 Days.</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3>Projects</h3>

                <ul className="list">
                  <li>
                    <Link href="/about">Skimming AI</Link>
                  </li>
                  <li>
                    <Link href="/services">ShipGPT AI</Link>
                  </li>
                  <li>
                    <Link href="/features">Recaster AI</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Chatwebby AI</Link>
                  </li>
                  <li>
                    <Link href="/blog">Ekhata ERP</Link>
                  </li>
                </ul>
              </div>
            </div>
            

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Support</h3>

                <ul className="list">
                  {/* <li>
                    <Link href="/faq">FAQ's</Link>
                  </li> */}
                  {/* <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li> */}
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    US: 2055 Limestone Rd Ste 200c,
Wilmington, <br /> DE 19808, US
                  </li>
                  <li>
                    <Icon.MapPin />
                    UK: basement flat, 11 tredegar square, London, <br /> E3 5AD, United Kingdom
                  </li>
                  <li>
                    <Icon.MapPin />
                    PK: 346-Ferozpur Road Lahore, 9th Floor,  <br />Arfa Karim Tower Lahore 
                  </li>

                 

                  {/* <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:321984754">+ (321) 984 754</a>
                  </li> */}
                </ul>

                {/* <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="facebook"
                      target="_blank"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagramcom/"
                      className="instagram"
                      target="_blank"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} StartP. All rights reserved by{" "}
                  <a href="https://envytheme.com/" target="_blank">
                    EnvyTheme
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/map.png"
          className="map"
          alt="map"
          width={910}
          height={443}
        />

        {/* Shape Images */}
        <div className="shape1">
          <Image
            src="/images/shape1.png"
            alt="shape"
            width={202}
            height={202}
          />
        </div>

        <div className="shape8 rotateme">
          <Image src="/images/shape2.svg" alt="shape" width={22} height={22} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
