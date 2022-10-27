import React from "react";
import Header from "components/header";
import Aside from "components/aside";
import Footer from "components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main container-fluid py-2 bg-light">
        <div className="row gap-2">
          <div className="left_home col col-md-2">
            <Aside />
          </div>
          <div className="right_home col col-md-9 bg-light">
            <div className="crd_balance card">
              <div className="row">
                <div className="col col-md-8">
                  <h6>Balance</h6>
                  <h3>Rp.120.000</h3>
                  <h6>+62 81244-878919</h6>
                </div>
                <div className="col col-md-4">
                  <div className="row mb-2">
                    <div className="crd_trf">
                      <button className="btn btn-warning">Transfer</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="crd_top">
                      <button className="btn btn-success">Top up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end card top */}
            <div className="row gap-1 mx-1 my-5">
              <div className="row">
                <div className="col col-md-6 me-1 bg-white rounded">
                  <div className="row">
                    <div className="col">
                      <h6>Icome</h6>
                      <h5>Rp.2.120.000</h5>
                    </div>
                    <div className="col">
                      <h6>Expense</h6>
                      <h5>Rp.1.560.000</h5>
                    </div>
                  </div>
                </div>
                <div className="col col-md-5 bg-white rounded">
                  <h6>Transaction History</h6>
                  <div className="card">
                    <div className="avatar">
                      <img
                        src="avatar.png"
                        alt=""
                        style={{ height: 50, width: 50 }}
                      />
                    </div>
                    <div className="name_avatar flex">
                      <h6>Robert</h6>
                      <h6>+62 8124-4878-919</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
