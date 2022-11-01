import React, { useState } from "react";
import Header from "components/header";
import Aside from "components/aside";
import Footer from "components/footer";
import axios from "utils/axios";
import Cookies from "js-cookie";

export default function TransferForm() {
  const receiverid = Cookies.get("receiverId");
  const [form, setForm] = useState({
    receiverId: receiverid,
    amount: "",
    notes: "",
  });
  const handleTransfer = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("/transaction/transfer", form);
      console.log(result.data.data);
      alert("succes");
    } catch (error) {
      alert("gagal");
    }
  };
  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);
  return (
    <div>
      <div>
        <Header />
        <div className="main container-fluid py-2 bg-light rounded">
          <div className="row gap-2">
            <div className="left_home col col-md-2">
              <Aside />
            </div>
            <div className="right_home col col-md-9 bg-white rounded">
              <h6 className="mt-3">Transfer Money</h6>
              <div className="name_avatar flex">
                <h6>Robert</h6>
                <h6>+62 8124-4878-919 </h6>
              </div>
              <div className="amount">
                <input
                  type="number"
                  placeholder="00"
                  name="amount"
                  onChange={handleChangeText}
                />
                <br />
                <div className="balance mt-3">
                  <h6>Balance:</h6>
                </div>
                <input
                  type="text"
                  placeholder="add some notes"
                  name="notes"
                  onChange={handleChangeText}
                />
              </div>
              <div className="confbutton mt-4" onClick={handleTransfer}>
                <button className="btn btn-primary">Confirm</button>
              </div>

              {/* end card top */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
