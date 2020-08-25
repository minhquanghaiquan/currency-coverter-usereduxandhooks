import React, { useEffect, useState } from "react";
// import { bindActionCreators, compose } from "redux";
// import * as dataActions from "./../actions/index";
import {fetchDataRequest} from "./../actions/index";
import { connect, useSelector, useDispatch } from "react-redux";
import { OPTIONS } from "./../constants/index";

const Home = (props) => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  // const { dataActions, data } = props;
  // const { fetchDataRequest } = dataActions;
  const [first, setFirst] = useState("AUD");
  const [second, setSecond] = useState("USD");

  // console.log(dispatch);

  useEffect(() => {
    // fetchDataRequest(first, second);
    dispatch(fetchDataRequest(first, second));

  }, []);

  const getRate = (first, second) => {
    // fetchDataRequest(first, second);
    dispatch(fetchDataRequest(first, second));
  };

  

  const showOption = () => {
    return (
      <>
        {OPTIONS.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </>
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70px",
          width: "100%",
          backgroundColor: "#cdff63",
          fontSize: "30px",
          color: "blue",
        }}
      >
        Currency Converter PRO
      </div>
      <div
        style={{ height: "5px", width: "100%", backgroundColor: "#9ffe36" }}
      ></div>
      <br />
      <div style={{ marginLeft: "33%" }}>
        <div
          style={{
            height: "150px",
            width: "400px",
            backgroundColor: "#94e5ff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
          }}
        >
          1 {first} = {data[`${first}_${second}`]} {second}
        </div>
        <br />
        From
        <select value={first} onChange={(e) => setFirst(e.target.value)}>
          {showOption()};
        </select>
        To
        <select value={second} onChange={(e) => setSecond(e.target.value)}>
          {showOption()};
        </select>
        <button
          onClick={() => {
            getRate(first, second);
          }}
        >
          Convert
        </button>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   data: state.data,
// });

// const mapDispatchToProps = (dispatch) => ({
//   dataActions: bindActionCreators(dataActions, dispatch),
// });

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// export default compose(withConnect)(Home);
export default Home;
