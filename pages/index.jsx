import React, { useState } from "react";
import { useRouter } from "next/router";
import Footer from "components/footer";
import IconLanding from "../public/phone_landing.png";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Prof from "../public/prof.png";
export default function Home() {
  const router = useRouter();
  const abouts = [
    {
      icon: "telephone",
      title: "24 / 7",
      content:
        "We have 24/7 contact support so you can contact us whenever you want and we will respond it.",
    },
    {
      icon: "lock",
      title: "Data Privacy",
      content:
        "We make sure your data is safe in our database and we will encrypt any data you submitted to us.",
    },
    {
      icon: "download",
      title: "Easy Download",
      content:
        "FazzPay is 100% totally free to use it’s now available on Google Play Store and App Store.",
    },
  ];
  const handleNext = () => {
    if (testi < testimonials.length - 1) {
      setTesti((state) => state + 1);
    } else {
      setTesti(0);
    }
  };

  const handlePrev = () => {
    if (testi > 0) {
      setTesti((state) => state - 1);
    } else {
      setTesti(testimonials.length - 1);
    }
  };
  const testimonials = [
    {
      avatar: 56,
      name: "Alex Hansinburg",
      job: "Designer",
      content:
        "This is the most outstanding app that I've ever try in my live. This app is suitable for you who's busy with their bussiness and frequently transfer money. Just try this app and see the power!",
    },
    {
      avatar: 32,
      name: "Sherina Chaw",
      job: "Accountant",
      content:
        "I use this app since 2 years ago and this is the best app that I've ever use in my entire life. I use this app to manage all my financial needs. It's super easy to use and it's 100% free app",
    },
  ];
  const [testi, setTesti] = useState(0);
  return (
    // new landingpage
    <div>
      <header className={styles.header_landing}>
        <div className="container-lg d-flex justify-content-between align-items-center py-3">
          <span className="h3 fw-bold text-white mb-0">FazzPay</span>
          <div>
            <button
              className="btn btn-outline-light px-4 me-3"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
            <button
              className="btn btn-light text-primary px-3"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <div className="row">
        <div className="col col-md-4 left_landing">
          <div className={styles.image_landing}>
            <Image src={IconLanding} width="463" height="892" />
          </div>
        </div>
        <div className="col col-md-8 right_landing">
          <div className={styles.desc_landing_grup}>
            <div className={styles.desc_landing}>
              Awesome App For Saving
              <span className={styles.desc_landing_span}>Time</span>
            </div>
          </div>
          <div className={styles.opinion_landing_grup}>
            <div>
              We bring you a mobile app for banking problems that oftenly
              wasting much of your times.
            </div>
          </div>
          <div className={styles.button_landing_group}>
            <button className={styles.button_try_landing}>Try It Free</button>
          </div>
          <div className={styles.landing_available}>
            <div className={styles.available_landing}>Available On</div>
            <div className={styles.icon_landing}>
              <img
                src="playstore.png"
                alt=""
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 40,
                  marginTop: 30,
                }}
              />
              <img
                src="apple.png"
                alt=""
                style={{ width: 30, height: 30, marginTop: 30 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row bg-light">
        <div className={styles.grup_icon_landing}>
          <div className={styles.icon_landing}>
            <img
              src="microsoft.png"
              alt=""
              style={{ width: 80, height: 50, marginTop: 30, marginLeft: 400 }}
            />
          </div>
          <div className={styles.icon_landing}>
            <img
              src="dropbox.png"
              alt=""
              style={{ width: 80, height: 50, marginTop: 30 }}
            />
          </div>
          <div className={styles.icon_landing}>
            <img
              src="h&m.png"
              alt=""
              style={{ width: 80, height: 50, marginTop: 30 }}
            />
          </div>
          <div className={styles.icon_landing}>
            <img
              src="airbnb.png"
              alt=""
              style={{ width: 80, height: 50, marginTop: 30 }}
            />
          </div>
          <div className={styles.icon_landing}>
            <img
              src="canon.png"
              alt=""
              style={{ width: 80, height: 50, marginTop: 30 }}
            />
          </div>
          <div>
            <img
              src="dell.png"
              alt=""
              style={{ width: 50, height: 50, marginTop: 30 }}
            />
          </div>
        </div>
      </div>
      <div className="row bg-white">
        <div className={styles.about_landing}>
          <span className={styles.desc_landing_span}>About</span> the Aplication
        </div>
        <div className={styles.desc_about_landing}>
          <div className={styles.opinion_landing}>
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </div>
        </div>
        <div className="row">
          {abouts.map((about) => (
            <div className="col-sm-4 px-4 mb-4 mb-md-0" key={about.icon}>
              <div className="bg-white rounded px-4 py-5 shadow d-flex flex-column align-items-center h-100">
                <div
                  className="bg-primary bg-opacity-25 rounded-circle mb-3 d-flex justify-content-center align-items-center"
                  style={{ width: 56, height: 56 }}
                >
                  <i className={`bi bi-${about.icon} text-primary fs-4`}></i>
                </div>
                <h4 className="fw-bold mb-4">{about.title}</h4>
                <p className="mb-0">{about.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col bg-light mt-5 ">
          <img src="phone_landing.png" alt="" />
        </div>
        <div className="col bg-light mt-5">
          <div className={styles.opinion_promotion}>
            All The <span className={styles.opinion_promotion_span}>Great</span>{" "}
            Fazzpay Features
          </div>
          <div className="card mt-3 mb-3 w-50">
            <div className="mb-3">
              <div className={styles.card_opinion_landing}>
                <span className={styles.opinion_promotion_span}>1.</span> Small
                Free
              </div>
            </div>
            <div className={styles.card_opinion_landing}>
              We only charge 5% of every success transaction done in FazzPay
              app.
            </div>
          </div>
          <div className="card mt-3 mb-3 w-50">
            <div>
              <span className={styles.opinion_promotion_span}>2.</span> Data
              Secured
            </div>
            <div className={styles.card_opinion_landing}>
              All your data is secured properly in our system and it’s
              encrypted.
            </div>
          </div>
          <div className="card mt-3 mb-3 w-50">
            <div>
              <span className={styles.opinion_promotion_span}>3.</span> User
              Friendly
            </div>
            <div className={styles.card_opinion_landing}>
              FazzPay come up with modern and sleek design and not complicated.
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <section className="container-fluid py-5">
          <div className="container-lg text-center py-0 py-md-5">
            <h2 className="fw-extrabold mb-4">
              What Our Users <span className="text-primary">Say</span>
            </h2>
            <p className="mb-5">
              We have some great features from the application and {"it's"}
              totally free <br /> to use by all users around the world.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div
                role="button"
                className="bg-white rounded shadow px-2 py-0 d-none d-sm-block"
                onClick={handlePrev}
              >
                <i className="bi bi-arrow-left fs-2"></i>
              </div>
              <div className="bg-white rounded shadow py-4 px-2 p-md-5 mx-3 mx-md-5">
                <div className="mb-3">
                  <Image
                    src={Prof}
                    alt="user avatar"
                    className="rounded"
                    width={72}
                    height={72}
                  />
                </div>
                <h4 className="fw-semibold">{testimonials[testi].name}</h4>
                <p className="mb-4">{testimonials[testi].job}</p>
                <p className="mb-0 w-75 mx-auto">
                  {testimonials[testi].content}
                </p>
              </div>
              <div
                role="button"
                className="bg-white rounded shadow px-2 py-0 d-none d-sm-block"
                onClick={handleNext}
              >
                <i className="bi bi-arrow-right fs-2"></i>
              </div>
            </div>
            <div className="d-flex d-sm-none mt-3 justify-content-center">
              <div
                role="button"
                className="bg-white rounded shadow px-2 py-0 me-4"
                onClick={handlePrev}
              >
                <i className="bi bi-arrow-left fs-2"></i>
              </div>
              <div
                role="button"
                className="bg-white rounded shadow px-2 py-0"
                onClick={handleNext}
              >
                <i className="bi bi-arrow-right fs-2"></i>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
