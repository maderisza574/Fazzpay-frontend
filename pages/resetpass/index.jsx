import React from "react";
// import Image from "next/image";

export default function Signin() {
  return (
    <div>
      <div className="contsign container-fluid py-0 text center">
        <div className="home my-0">
          <div className="left d-md-flex d-none px-0 flex-column col-lg-6">
            <div className="tittle_app mt-5">FazzPay</div>
            <div className="icon__image text-center mt-5">
              <img
                src="Group 57.png"
                alt="icon1"
                style={{ width: "60vh", height: "60vh" }}
              />
            </div>
            <div className="opinion__left w-50">
              App that Covering Banking Needs
            </div>
            <div className="opinion_left mt-3 mb-5 w-50">
              FazzPay is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 50000+ users registered in Fazzpay everyday with worldwide
              users coverage
            </div>
          </div>
          <div className="right col-lg-6 bg-white mt-5">
            <div className="opinion_right">
              Did You Forgot Your Password? <br />
              Dont Worry, You Can Reset Your <br />
              Password In a Minute
            </div>
            <div className="opinion__right mt-3 w-50">
              To reset your password, you must type your e-mail and we will send
              a link to your email and you will be directed to the reset
              password screens.
            </div>
            <div className="input__grup w-75">
              <div>
                {/* This form */}
                <form>
                  <div className="omrs-input-group mt-3">
                    <label className="omrs-input-underlined">
                      <input required />
                      <span className="omrs-input-label">
                        Enter your e-mail
                      </span>
                      <span className="omrs-input-helper"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </label>
                  </div>
                </form>
                {/* end form */}
              </div>
            </div>
            <div className="login_button mt-3">
              <button className="btn btn-primary w-75">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
