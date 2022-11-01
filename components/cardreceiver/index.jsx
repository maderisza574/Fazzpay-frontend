import React, { useState } from "react";
import { getAllUser } from "stores/actions/alluser";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function CardReceiver() {
  const dispatch = useDispatch();
  const userall = useSelector((state) => state.alluser.data);
  console.log(userall);
  const [dataAllUser, setDataAllUser] = useState();
  useEffect(() => {
    getDataAllUser();
  }, []);
  const getDataAllUser = () => {
    dispatch(getAllUser());
    // .then((response) =>setDataAllUser(response.value.data.data)
    // );
  };
  return (
    <div>
      <div className="card mt-3">
        <div className="avatar">
          <img src="avatar.png" alt="" style={{ height: 50, width: 50 }} />
        </div>
        <div className="name_avatar flex">
          <h6>Robert{userall.firstName}</h6>
          <h6>+62 8124-4878-919 {userall.noTelp}</h6>
        </div>
      </div>
    </div>
  );
}
