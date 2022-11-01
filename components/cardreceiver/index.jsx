import React, { useState } from "react";
import { getAllUser } from "stores/actions/alluser";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import Router from "next/router";

// import { useEffect } from "react";

export default function CardReceiver(props) {
  const dispatch = useDispatch();
  const userall = useSelector((state) => state.alluser.data);
  const [dataAllUser, setDataAllUser] = useState();

  const getDataAllUser = () => {
    dispatch(getAllUser());
  };
  const handleReceiver = () => {
    const transferid = props.data.id;
    Cookies.set("receiverId", props.data.id);
    Router.push(`/transfer/${transferid}`);
  };
  // const [form, setForm] = useState({
  //   amount: "",
  // });
  // const handleTransfer = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await axios.post("/transaction/top-up", form);
  //     console.log(result.data.data);
  //     setData(result.data.data);
  //     console.log(setData);
  //     alert("succes");
  //     window.open(`${data.redirectUrl}`, "_blank");
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  // const handleChangeText = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  return (
    <div>
      <div className="card mt-3">
        <div className="avatar">
          <img src="avatar.png" alt="" style={{ height: 50, width: 50 }} />
        </div>
        <div className="name_avatar flex" onClick={handleReceiver}>
          <h6>{props.data.firstName}</h6>
          <h6>+62 8124-4878-919 {props.data.noTelp}</h6>
        </div>
      </div>
    </div>
  );
}
