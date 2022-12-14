import React, { useState } from "react";
// import Image from "next/image";
import PinInput from "react-pin-input";
import Cookies from "js-cookie";
import axios from "../../utils/axios";
import Router from "next/router";
export default function Signin() {
  const userid = Cookies.get("userId");
  console.log(userid);
  const [form, setForm] = useState({});

  const handleChangePin = (e) => {
    setForm({ ...form, pin: e });
  };
  const handlePin = async () => {
    try {
      console.log(form);
      const result = await axios.patch(`/user/pin/${userid}`, form);
      alert("succes update pin");
      Router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

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
              Secure Your Account, Your Wallet, <br />
              and Your Data With 6 Digits PIN <br />
              That You Created Yourself.
            </div>
            <div className="opinion__right mt-3 w-50">
              Create 6 digits pin to secure all your money and your data in
              FazzPay app. Keep it secret and dont tell anyone about your
              Fazzpay account password and the PIN
            </div>
            <div className="input__grup w-75">
              <div>
                {/* This form */}
                <form>
                  <div className="pin_input row d-flex justify-content-center mt-3">
                    <PinInput
                      length={6}
                      initialValue=""
                      secret
                      onChange={(value, index) => {
                        console.log(value, index);
                        handleChangePin(value);
                      }}
                      type="numeric"
                      inputMode="number"
                      style={{ padding: "10px" }}
                      inputStyle={{ borderColor: "red" }}
                      inputFocusStyle={{ borderColor: "blue" }}
                      onComplete={(value, index) => {
                        console.log(value, index);
                      }}
                      autoSelect={true}
                      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />
                  </div>
                </form>
                {/* end form */}
              </div>
            </div>
            <div className="login_button mt-5">
              <button className="btn btn-primary w-75" onClick={handlePin}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
