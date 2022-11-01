/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Header from "components/header";
import Aside from "components/aside";
import Footer from "components/footer";
import { gethistory } from "/stores/actions/history";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import CardHistory from "components/cardhistory";

export default function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      dispatch(gethistory())
        .then((response) => setData(response.value.data.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <div>
      <Header />
      <div className="main container-fluid py-2 bg-light rounded">
        <div className="row gap-2">
          <div className="left_home col col-md-2">
            <Aside />
          </div>
          <div className="right_home col col-md-9 bg-white rounded">
            <h6 className="mt-3">Search Receiver</h6>
            <div className="button_filter">
              <button className="btn btn-primary">-- Select Filter --</button>
            </div>
            {data.length > 0 ? (
              data.map((item) => (
                <div key={item.id}>
                  <CardHistory />
                </div>
              ))
            ) : (
              <div>
                <span>Data Not Found !</span>
              </div>
            )}

            {/* end card top */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
