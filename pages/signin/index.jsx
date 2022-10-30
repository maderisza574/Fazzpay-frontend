import React, { useState } from "react";
import axiosClient from "utils/axios";
import { useDispatch } from "react-redux";

import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import { getDataUserById } from "/stores/actions/user";

export default function Signin() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form, setForm] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    try {
      const result = await axiosClient.post("/auth/login", form);
      dispatch(getDataUserById(result.data.data.id));
      // menjalankan get user by id dan menyimpan datanya ke redux
      Cookies.set("token", result.data.data.token);
      Cookies.set("userId", result.data.data.id);
      Cookies.set("pin", result.data.data.pin);
      {
        result.data.data.pin === null
          ? router.push("/createpin")
          : router.push("/home");
      }
      //   proses kondisi pengecekan pin jika ada akan diarahkan ke home jika tidak ada akan diarahkan ke create pin

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // const handleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };
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
              Start Accessing Banking Needs
              <br /> With All Devices and All Platforms <br />
              With 30.000+ Users
            </div>
            <div className="opinion__right mt-3 w-50">
              Transfering money is eassier than ever, you can acces FazzPay
              wherever you are. Dekstop,laptop,mobile phone? we cover all of
              that for you
            </div>
            <div className="input__grup w-75">
              <div>
                {/* This form */}
                <form>
                  <div className="omrs-input-group mt-3">
                    <label className="omrs-input-underlined">
                      <input
                        type="email"
                        name="email"
                        onChange={handleChangeText}
                        required
                      />
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
                  <div className="omrs-input-group mt-3">
                    <label className="omrs-input-underlined">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        onChange={handleChangeText}
                        required
                      />
                      <span className="omrs-input-label">
                        Enter your password
                      </span>
                      <span className="omrs-input-helper"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-lock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                      </svg>
                      <label
                        className="omrs-input-underlined2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-eye-slash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-eye"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                        )}
                      </label>
                    </label>
                  </div>
                </form>
                {/* end form */}
              </div>
            </div>
            <div className="forgot_button  mt-1">
              <Link href="/resetpass">Forgot Password?</Link>
            </div>
            <div className="login_button mt-3">
              <button
                className="btn btn-primary w-75"
                type="button"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            <div className="nav_signup mt-3">
              Dont have an account? Lets <Link href="/signup"> Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
