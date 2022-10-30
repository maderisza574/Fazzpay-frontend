import React, { useState } from "react";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import axios from "utils/axios";

export default function Aside() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlelogout = () => {
    const logout = window.confirm("Are you sure?");
    if (logout) {
      Cookies.remove("token", "id", "receiverId");
      localStorage.clear();
      Router.push("/signin");
    } else {
    }
  };
  const [form, setForm] = useState({
    amount: "",
  });
  console.log(form);
  const handleTopup = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("/transaction/top-up", form);
      alert("succes");
    } catch (error) {
      alert(error);
    }
  };
  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container bg-white">
      <div className="row_dashboard row">
        <div className="col d-flex">
          <div className="img_dashboard">
            <img src="icon1.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_dashboard mt-1">
            <Link href="/home">Dashboard</Link>
          </div>
        </div>
      </div>
      <div className="row_transfer row">
        <div className="col d-flex">
          <div className="img_transfer">
            <img src="icon2.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_transfer mt-1">
            <Link href="/transfer">Transfer</Link>
          </div>
        </div>
      </div>
      <div className="row_topup row">
        <div className="col d-flex">
          <div className="img_topup">
            <img src="icon3.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_topup mt-1">
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Topup</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <label className="me-3">
                    Enter the amount of money, and click submit
                  </label>
                  <input
                    type="number"
                    className="w-100"
                    name="amount"
                    onChange={handleChangeText}
                  />
                  {/* {image && (
            )} */}

                  <button
                    type="submit"
                    className="w-100 my-5 btn btn-primary"
                    onClick={handleTopup}
                  >
                    Submit
                  </button>
                </form>
              </Modal.Body>
            </Modal>
            <button onClick={handleShow}>Topup</button>
          </div>
        </div>
      </div>
      <div className="row_topup row">
        <div className="col  d-flex">
          <div className="img_topup">
            <img src="icon4.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_profile mt-1">
            <Link href="/profile">Profile</Link>
          </div>
        </div>
      </div>
      <div className="row_logout row">
        <div className="col d-flex">
          <div className="img_transfer">
            <img src="icon 4.png" alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div className="icon_logout mt-1" onClick={handlelogout}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}
