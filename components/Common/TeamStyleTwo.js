import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";

import teamImg1 from "/public/icons/zain.jpg";
import teamImg2 from "/public/icons/phool.jpg";
import teamImg3 from "/public/icons/husnain.jpg";
import teamImg4 from "/public/icons/umar.jpg";

const TeamStyleTwo = () => {
  return (
    <>
      <div className="team-area repair-team-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Awesome Team</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg1} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Zain Gohar</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    {/* <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <Icon.Facebook />
                      </a>
                    </li> */}
                    <li>
                      <a href="https://x.com/hey_sheikh" target="_blank">
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/zaingohar/"
                        target="_blank"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                  </ul>

                  {/* <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.
                  </p> */}
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg2} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Rana Phool</h3>
                    <span>Business Developer</span>
                  </div>

                  <ul>
                    {/* <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <Icon.Facebook />
                      </a>
                    </li> */}
                    <li>
                      <a href="https://x.com/ranaphoolmk" target="_blank">
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/ranaphool/"
                        target="_blank"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                  </ul>

                  {/* <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.
                  </p> */}
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg3} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Husnain Raza</h3>
                    <span>Project Manager</span>
                  </div>

                  <ul>
                    {/* <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <Icon.Facebook />
                      </a>
                    </li> */}
                    <li>
                      <a href="https://x.com/HusnainRSheikh" target="_blank">
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/sheikhhusnainraza/"
                        target="_blank"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                  </ul>

                  {/* <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.
                  </p> */}
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg4} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Umar Abdullah</h3>
                    <span>Sr Software Developer</span>
                  </div>

                  <ul>
                    {/* <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <Icon.Facebook />
                      </a>
                    </li> */}
                    <li>
                      <a href="https://x.com/umar_abdullah4" target="_blank">
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/umar-abdullah-07430822b/"
                        target="_blank"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                  </ul>

                  {/* <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamStyleTwo;
