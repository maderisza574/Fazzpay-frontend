import React from "react";
import Header from "components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col col-md-6 bg-primary">Tes</div>
        <div className="col col-md-6 bg-warning">Tes</div>
      </div>
      <h1>HOme</h1>
    </div>
  );
}
