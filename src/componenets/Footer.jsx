import React from "react";
import styles from "../CSS/Footer.module.scss";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavLi = styled(NavLink)`
  &.top_navlink {
    /* display: block; */
    content: url("/img/icon_top1.png");
  }
  &.new_navlink {
    content: url("/img/icon_new1.png");
  }
  &.ask_navlink {
    content: url("/img/icon_ask1.png");
  }
  &.show_navlink {
    content: url("/img/icon_show1.png");
  }
  &.job_navlink {
    content: url("/img/icon_job1.png");
  }
`;

export default function Footer() {
  return (
    <ul className={styles["footer"]}>
      <li>
        <NavLi to="/Top" activeClassName="top_navlink">
          <img src="img/icon_top.png" alt="top_icon" />
          {/* <img src="img/icon_top1.png" alt="new1" className={styles["top1"]} /> */}
        </NavLi>
      </li>
      <li>
        <NavLi to="/New" activeClassName="new_navlink">
          <img src="img/icon_new.png" alt="new_icon" />
          {/* <img
            src={require("../../public/img/icon_new1.png")}
            alt="new1"
            className={styles["new1"]}
          /> */}
        </NavLi>
      </li>
      <li>
        <NavLi to="/Ask" activeClassName="ask_navlink">
          <img src="img/icon_ask.png" alt="ask_icon" />
          {/* <img
            src={require("../../public/img/icon_ask1.png")}
            alt="ask1"
            className={styles["ask1"]}
          /> */}
        </NavLi>
      </li>
      <li>
        <NavLi to="/Show" activeClassName="show_navlink">
          <img src="img/icon_show.png" alt="show_icon" />
          {/* <img
            src={require("../../public/img/icon_show1.png")}
            alt="show1"
            className={styles["show1"]}
          /> */}
        </NavLi>
      </li>
      <li>
        <NavLi to="/Job" activeClassName="job_navlink">
          <img src="img/icon_job.png" alt="job_icon" />
          {/* <img
            src={require("../../public/img/icon_job1.png")}
            alt="show1"
            className={styles["job1"]}
          /> */}
        </NavLi>
      </li>
    </ul>
  );
}
