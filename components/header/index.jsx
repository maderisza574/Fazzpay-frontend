import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navcont container-fluid">
          <a className="tittle navbar-brand">FazzPay</a>
          <form className="d-flex" role="search">
            <div className="avatar bg-primary">
              <img src="avatar.png" alt="" />
            </div>
            <div className="name_avatar flex">
              <h6>Robert</h6>
              <h6>+62 8124-4878-919</h6>
            </div>
            <div className="notification">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>
            </div>
            <div className="button_navbar">
              <button className="btn btn-outline-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </nav>
      {/* Navbar */}
      {/* <button onClick={handleLogout}>Logout</button>
      <button className="btn btn-primary">CLICK</button>
      <h6 className="tes">TES</h6> */}
    </div>
  );
}
