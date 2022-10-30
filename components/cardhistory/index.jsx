import React from "react";

export default function CardHistory(props) {
  return (
    <div>
      <div className="card mt-3 d-flex">
        <div className="row">
          <div className="col">
            <div className="avatar">
              <img src="avatar.png" alt="" />
            </div>
            <div className="name_avatar flex">
              <h6>{props.data.firstName}</h6>
              <h6>+62 8124-4878-919</h6>
            </div>
          </div>
          <div className="col col-md-3 ">
            <h6>+Rp.50.000</h6>
          </div>
        </div>
      </div>
      History
    </div>
  );
}
