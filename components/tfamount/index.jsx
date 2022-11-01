import React from "react";

export default function TfAmount() {
  return (
    <div>
      <div>
        <div className="card mt-3">
          <div className="avatar">
            <img src="avatar.png" alt="" style={{ height: 50, width: 50 }} />
          </div>
          <div className="name_avatar flex">
            <h6>{props.data.firstName}</h6>
            <h6>+62 8124-4878-919 {props.data.noTelp}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
