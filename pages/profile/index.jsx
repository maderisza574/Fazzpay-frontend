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
          <div className="right_home col col-md-9 bg-white rounded text-center">
            <div className="Avatar mt-3">
              <img src="avatar.png" alt="" style={{ width: 50, height: 50 }} />
            </div>
            <div className="edit_avatar mt-2">
              <h6>Edit</h6>
            </div>
            <div className="number_avatar">
              <h6>+62-81244-878919</h6>
            </div>
            <div className="group_avatar">
              <div className="information mt-5">
                <button className="btn btn-primary">
                  Personal Information
                </button>
              </div>
              <div className="changepas mt-3">
                <button className="btn btn-primary w-40">
                  Change Password
                </button>
              </div>
              <div className="changepin mt-3">
                <button className="btn btn-primary">Change Pin</button>
              </div>
              <div className="information mt-3">
                <button className="btn btn-primary">Logout</button>
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
