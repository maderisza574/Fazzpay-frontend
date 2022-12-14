/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import Header from "components/header";
import Aside from "components/aside";
import Footer from "components/footer";
import axios from "../../utils/axios";
import { useSelector } from "react-redux";
import { getDataUserById } from "stores/actions/user";
import Cookies from "js-cookie";
import Chart from "../../pages/handle-chart";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const [dataDashboard, setDataDashboard] = useState({});
  console.log(dataDashboard);
  const userid = Cookies.get("userId");

  useEffect(() => {
    getDataDashboard(), getbalance();
  }, []);
  // console.log(getDataDashboard);
  const getDataDashboard = async () => {
    try {
      const result = await axios.get(`/dashboard/${userid}`);
      console.log(result.data.data);
      setDataDashboard(result.data.data);

      // console.log(result);
    } catch (error) {
      // console.error(error);
    }
  };
  const getbalance = () => {
    dispatch(getDataUserById(userid));
  };

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
                  <h3>Rp.{user.balance}</h3>
                  <h6>{user.noTelp}</h6>
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
                      <h5>Rp.{dataDashboard.totalIncome}</h5>
                    </div>
                    <div className="col">
                      <h6>Expense</h6>
                      <h5>Rp.{dataDashboard.totalExpense}</h5>
                    </div>
                    <div className="chart">
                      <Chart data={dataDashboard} />
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
                      <h6>{user.firstName}</h6>
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
