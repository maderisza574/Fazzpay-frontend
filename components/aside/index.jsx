import React from "react";
import Link from "next/link";

export default function Aside() {
  return (
    <div className="container bg-white">
      <div className="row_dashboard row">
        <div className="col d-flex">
          <div className="img_dashboard">
            <img src="icon1.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_dashboard mt-1">
            <Link href="/home">Dashboard</Link>
          </div>
        </div>
      </div>
      <div className="row_transfer row">
        <div className="col d-flex">
          <div className="img_transfer">
            <img src="icon2.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_transfer mt-1">
            <Link href="/transfer">Transfer</Link>
          </div>
        </div>
      </div>
      <div className="row_topup row">
        <div className="col d-flex">
          <div className="img_topup">
            <img src="icon3.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_topup mt-1">
            <Link href="/topup">Topup</Link>
          </div>
        </div>
      </div>
      <div className="row_topup row">
        <div className="col  d-flex">
          <div className="img_topup">
            <img src="icon4.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_profile mt-1">
            <Link href="/profile">Profile</Link>
          </div>
        </div>
      </div>
      <div className="row_logout row">
        <div className="col d-flex">
          <div className="img_transfer">
            <img src="icon 4.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_logout mt-1">Logout</div>
        </div>
      </div>
    </div>
  );
}
