import React from "react";
import Header from "components/header";
import Aside from "components/aside";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="row my-5">
        <div className="left_home col col-md-2 white">
          <Aside />
        </div>
        <div className="right_home col col-md-10 bg-warning">
          <div className="row">
            <div className="col col-md-6 bg-primary">tes</div>
            <div className="col col-md-6 bg-danger">tes</div>
          </div>
          Tes
        </div>
      </div>
    </div>
  );
}
