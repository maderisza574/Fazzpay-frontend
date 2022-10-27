import React from "react";

export default function Aside() {
  return (
    <div>
      <div className="row_dashboard row ">
        <div className="col d-flex">
          <div className="img_dashboard">
            <img src="icon1.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_dashboard mt-1">Dashboard</div>
        </div>
      </div>
      <div className="row_transfer row">
        <div className="col d-flex">
          <div className="img_transfer">
            <img src="icon2.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_transfer mt-1">Transfer</div>
        </div>
      </div>
      <div className="row_topup row">
        <div className="col d-flex">
          <div className="img_topup">
            <img src="icon3.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_topup mt-1">Topup</div>
        </div>
      </div>
      <div className="row_topup row">
        <div className="col  d-flex">
          <div className="img_topup">
            <img src="icon4.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_profile mt-1">Profile</div>
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
