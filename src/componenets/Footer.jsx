import React from "react";
import styles from "../CSS/Footer.module.scss";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavLi = styled(NavLink)`
  &.top_navlink {
    /* display: block; */
    content: url("https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/icon_top1.png");
  }
  &.new_navlink {
    content: url("https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/icon_new1.png");
  }
  &.ask_navlink {
    content: url("https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/icon_ask1.png");
  }
  &.show_navlink {
    content: url("https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/icon_show1.png");
  }
  &.job_navlink {
    content: url("https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/icon_job1.png");
  }
`;

export default function Footer() {
  return (
    <ul className={styles["footer"]}>
      <li>
        <NavLi to="/Top" activeClassName="top_navlink">
          <img
            src="https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/icon_top.png"
            alt="top_icon"
          />
          {/* <img src="img/icon_top1.png" alt="new1" className={styles["top1"]} /> */}
        </NavLi>
      </li>
      <li>
        <NavLi to="/New" activeClassName="new_navlink">
          <img
            src="https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/icon_new.png"
            alt="new_icon"
          />
        </NavLi>
      </li>
      <li>
        <NavLi to="/Ask" activeClassName="ask_navlink">
          <img
            src="https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/icon_ask.png"
            alt="ask_icon"
          />
        </NavLi>
      </li>
      <li>
        <NavLi to="/Show" activeClassName="show_navlink">
          <img
            src="https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/icon_show.png"
            alt="show_icon"
          />
        </NavLi>
      </li>
      <li>
        <NavLi to="/Job" activeClassName="job_navlink">
          <img
            src="https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/icon_job.png"
            alt="job_icon"
          />
        </NavLi>
      </li>
    </ul>
  );
}
