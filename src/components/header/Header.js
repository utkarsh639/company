import React from "react";
import { ImSpoonKnife } from "react-icons/im";
import { BsCartFill } from "react-icons/bs";
import "./head.css";

const h = (props) => {
  return (
    <ul>
      <li>
        <ImSpoonKnife className="I" />
      </li>
      <li>
        <a href="#about">
          <h5>Food's Restaurant</h5>
        </a>
      </li>
      <li>
        <BsCartFill className="cart" />
      </li>
    </ul>
  );
};
export default h;
