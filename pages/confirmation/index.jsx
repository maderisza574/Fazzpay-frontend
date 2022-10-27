import React from "react";
import Header from "components/header";
import Aside from "components/aside";
import Footer from "components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main container-fluid py-2 bg-light rounded">
        <div className="row gap-2">
          <div className="left_home col col-md-2">
            <Aside />
          </div>
          <div className="right_home col col-md-9 bg-white rounded">
            <h6 className="mt-3">Transfer To</h6>
            <div className="card mt-3 d-flex">
              <div className="row">
                <div className="col">
                  <div className="avatar">
                    <img src="avatar.png" alt="" />
                  </div>
                  <div className="name_avatar flex">
                    <h6>Robert</h6>
                    <h6>+62 8124-4878-919</h6>
                  </div>
                </div>
                <div className="col col-md-3 ">
                  <h6>+Rp.50.000</h6>
                </div>
              </div>
            </div>
            {/* end card top */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
