import React from "react";
import { connect } from "react-redux";
import './PastCalculate.css';

const PastCalculateList = (props) => {
  return (
    <section>
      <h1>Past Calculate List!</h1>
      <ul>
        {props.listItems.slice(1).map((item, index) => (
          <li key={index}>{item.task}</li>
        ))}
      </ul>
    </section>
  );
};

export default connect((state) => ({ listItems: state }))(PastCalculateList);