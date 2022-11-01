/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Header from "components/header";
import Aside from "components/aside";
import Footer from "components/footer";
import { getAllUser } from "stores/actions/alluser";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CardReceiver from "../../components/cardreceiver";

export default function Transfer() {
  const dispatch = useDispatch();
  const userall = useSelector((state) => state.alluser.data);

  const data = userall.map((e) => {
    console.log(e);
  });
  // const [dataAllUser, setDataAllUser] = useState();
  useEffect(() => {
    getDataAllUser();
  }, []);
  const getDataAllUser = async () => {
    try {
      dispatch(getAllUser());
    } catch (error) {
      console.log(error);
    }

    // .then((response) =>setDataAllUser(response.value.data.data)
    // );
  };
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
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>

            {userall.length > 0 ? (
              userall.map((item) => (
                <div key={item.id}>
                  <CardReceiver data={item} />
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
