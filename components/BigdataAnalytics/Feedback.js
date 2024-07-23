import React from "react";
import Image from "next/image";

import authorImg1 from "/public/images/author1.jpg";
import authorImg2 from "/public/images/author2.jpg";
import authorImg3 from "/public/images/author3.jpg";

const Feedback = () => {
  return (
    <>
      <div className="bigdata-feedback-area pt-80 pb-50">
        <div className="container">
          <div className="section-title">
            <h2>What Users Saying</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-feedback-box">
                <div className="feedback-desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accus antium doloremque laudantium, totam rem
                    aperiam, eaque ipsaquaeab illo.
                  </p>
                </div>

                <div className="client-info">
                  <Image
                    src={authorImg1}
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>David Luis</h3>
                  <span>Founder & CEO</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-feedback-box">
                <div className="feedback-desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accus antium doloremque laudantium, totam rem
                    aperiam, eaque ipsaquaeab illo.
                  </p>
                </div>

                <div className="client-info">
                  <Image
                    src={authorImg2}
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>Steven Smith</h3>
                  <span>Developer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-feedback-box">
                <div className="feedback-desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accus antium doloremque laudantium, totam rem
                    aperiam, eaque ipsaquaeab illo.
                  </p>
                </div>

                <div className="client-info">
                  <Image
                    src={authorImg3}
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>Sarah Lucy</h3>
                  <span>Designer</span>
                </div>
              </div>
            </div>
          </div> */}

<div className="row my-5">
          <div className="col-lg-4">
            <div className="testi-question">
              <div className="_label">
                <div
                  className=""
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src="/assets/images/umar.PNG" alt="" />
                  <div className="auther">
                    <p className="_name">Umar Abdulllah</p>
                    <p style={{ fontSize: "14px " }}>
                      Student at Virtual University
                    </p>
                  </div>
                </div>

                {/* <img src="/assets/images/product.png" alt="" /> */}
              </div>

              {/* <div className="_bold">
                “Must have tool for creative agencies”
              </div> */}
              <div>
                <p style={{ marginTop: "24px", fontStyle: "italic" }}>
                  "I used Skimming as my study assistant during my exams, and it
                  helped me a lot. I gave it my class notes in PDF, and it made
                  a bunch of good multiple-choice questions for me. About 80% of
                  my exam questions came from these, and it really helped me do
                  well in my studies."
                </p>
              </div>
            </div>
            <div className="testi-question">
              <div className="_label">
                <div
                  className=""
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src="/assets/images/waseem.jpg" alt="" />
                  <div className="auther">
                    <p className="_name">Toni</p>
                    <p style={{ fontSize: "14px " }}>HR</p>
                  </div>
                </div>
                {/* <img src="/assets/images/product.png" alt="" /> */}
              </div>

              {/* <div className="_bold">
                “Must have tool for creative agencies”
              </div> */}
              <div>
                <p style={{ marginTop: "24px", fontStyle: "italic" }}>
                  "Skimming AI has revolutionized my HR role with over 400
                  employees. Paperwork and data privacy were big issues, but
                  Skimming simplifies document management, making data handling
                  efficient and secure. I'm thrilled with the results."
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testi-question">
              <div className="_label">
                <div
                  className=""
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src="/assets/images/josmel.jpg" alt="" />
                  <div className="auther">
                    <p className="_name">Josmel Pacheco Mendoza</p>
                    <p style={{ fontSize: "14px " }}>
                      Bibliometrics researcher, professor at ALFIN.
                    </p>
                  </div>
                </div>
                {/* <img src="/assets/images/product.png" alt="" /> */}
              </div>

              {/* <div className="_bold">
            “Must have tool for creative agencies”
          </div> */}
              <div>
                <p style={{ marginTop: "24px", fontStyle: "italic" }}>
                  "Skimming is a very important tool in supporting scientific
                  writing, as it allows me to synthesize information and locate
                  information within a pdf. Thanks to Skimming I can more
                  efficiently understand downloaded articles.Also, now that most
                  things are on video it also allows me to ask questions to the
                  videos about something they have mentioned in the video."
                </p>
              </div>
            </div>
            <div className="testi-question">
              <div className="_label">
                <div
                  className=""
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="https://ph-avatars.imgix.net/5418294/87bfde4a-b793-4238-b4d8-ea7809a470b9?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop&dpr=1"
                    alt=""
                  />
                  <div className="auther">
                    <p className="_name">Tejaswini Gopalaswamy</p>
                    <p style={{ fontSize: "14px " }}>sivi.ai</p>
                  </div>
                </div>
                {/* <img src="/assets/images/product.png" alt="" /> */}
              </div>

              {/* <div className="_bold">
            “Must have tool for creative agencies”
          </div> */}
              <div>
                <p style={{ marginTop: "24px", fontStyle: "italic" }}>
                  "I tried the Skimming AI to summarize the Future of Work
                  Document, quiet ironic but I must, I liked I liked what I saw.
                  Here are my top 3 likes 1. I liked that I was able to converse
                  and easily find the answers"
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testi-question">
              <div className="_label">
                <div
                  className=""
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="https://ph-avatars.imgix.net/5351040/a7bec6f5-494e-4a01-8106-342019609f92?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=40&h=40&fit=crop&dpr=1"
                    alt=""
                  />
                  <div className="auther">
                    <p className="_name">Stepan Cherkasov</p>
                    <p style={{ fontSize: "14px " }}>
                      Aiding novice crypto investors
                    </p>
                  </div>
                </div>
                {/* <img src="/assets/images/product.png" alt="" /> */}
              </div>

              {/* <div className="_bold">
            “Must have tool for creative agencies”
          </div> */}
              <div>
                <p style={{ marginTop: "24px", fontStyle: "italic" }}>
                  "Having a tool like ChatGPT and having interactive
                  conversations with documents is amazing. Great work."
                </p>
              </div>
            </div>
            <div className="testi-question">
              <div className="_label">
                <div
                  className=""
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="https://ph-avatars.imgix.net/3103572/318020c6-fabe-4fb6-86d9-c0e4135a8494?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop&dpr=1"
                    alt=""
                  />
                  <div className="auther">
                    <p className="_name">Alessandro Valentini</p>
                    <p style={{ fontSize: "14px " }}>Marketing Lead @ Qudo</p>
                  </div>
                </div>
                {/* <img src="/assets/images/product.png" alt="" /> */}
              </div>

              {/* <div className="_bold">
            “Must have tool for creative agencies”
          </div> */}
              <div>
                <p style={{ marginTop: "24px", fontStyle: "italic" }}>
                  "It works extremely well, including uploading a document made
                  of tables. Skimming is able to interpret the data and analyse
                  it! Considering that it's not even fine-tuned for that, it's
                  amazing!"
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

export default Feedback;
