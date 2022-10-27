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
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="tittle navbar-brand">FazzPay</a>
          <form class="d-flex" role="search">
            <div className="avatar bg-primary">
              <img src="avatar.png" alt="" />
            </div>
            <div className="name_avatar flex">
              <h6>Robert</h6>
              <h6>+62 8124-4878-919</h6>
            </div>
            <button class="btn btn-outline-primary" type="submit">
              Login
            </button>
          </form>
        </div>
      </nav>
      {/* Navbar */}
      <button onClick={handleLogout}>Logout</button>
      <button className="btn btn-primary">CLICK</button>
      <h6 className="tes">TES</h6>
    </div>
  );
}
