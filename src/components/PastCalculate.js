import React from "react";
import { connect } from "react-redux";

const PastCalculateList = (props) => {
  return (
    <>
      <h2>Past Calculate List</h2>
      <ul>
        {props.listItems.slice(1).map((item, index) => (
          <li key={index}>{item.task}</li>
        ))}
      </ul>
    </>
  );
};

export default connect((state) => ({ listItems: state }))(PastCalculateList);