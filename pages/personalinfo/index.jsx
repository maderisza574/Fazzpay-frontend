import React from "react";
import Header from "components/header";
import Aside from "components/aside";
import Footer from "components/footer";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

export default function Home() {
  const user = useSelector((state) => state.user.data);
  const userid = Cookies.get("userId");
  console.log(userid);
  console.log(user);
  return (
    <div>
      <Header />
      <div className="main container-fluid py-2 bg-light rounded">
        <div className="row gap-2">
          <div className="left_home col col-md-2">
            <Aside />
          </div>
          <div className="right_home col col-md-9 bg-white rounded">
            <div className="tittle_info">
              <h5>Personal Information</h5>
            </div>
            <div className="tittle_opinion w-25 mt-3">
              <h6>
                We Got your personal information from the sign up proccess. if
                you want to make changes on your information. contact our
                support
              </h6>
            </div>
            <div className="group_card_info">
              <div className="crd_first">
                <div className="card">
                  <h5>First Name</h5>
                  <h6>{user.firstName}</h6>
                </div>
              </div>
              <div className="crd_last mt-3">
                <div className="card">
                  <h5>Last Name</h5>
                  <h6>{user.lastName}</h6>
                </div>
              </div>
              <div className="crd_email mt-3">
                <div className="card">
                  <h5>Verified E-mail</h5>
                  <h6>{user.email}</h6>
                </div>
              </div>
              <div className="crd_number mt-3">
                <div className="card">
                  <div className="row">
                    <div className="col col-md-6 w-75">
                      <h5>Phone Number</h5>
                    </div>
                    <div className="col col-md-2 w-25 text-right">Manage</div>
                  </div>

                  <h6>+62 {user.noTelp}</h6>
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
