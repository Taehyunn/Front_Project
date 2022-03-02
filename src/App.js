import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Main from "./routes/Main";
import Top from "./routes/Top";
import New from "./routes/New";
import Ask from "./routes/Ask";
import Show from "./routes/Show";
import Job from "./routes/Job";
import Detail from "./routes/Detail";
import User from "./routes/User";
import Footer from "./componenets/Footer";
import Search from "./componenets/Search";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Search text={text} setText={setText} />
        <Route path="/" exact component={Main} />
        <Route path="/Top/:id" component={Detail} />
        <Route path="/Top" exact component={Top} />

        <Route path="/New/:id" component={Detail} />
        <Route path="/New" exact component={New} />

        <Route path="/Ask/:id" component={Detail} />
        <Route path="/Ask" exact component={Ask} />

        <Route path="/Show/:id" component={Detail} />
        <Route path="/Show" exact component={Show} />

        <Route path="/Job/:id" component={Detail} />
        <Route path="/Job" exact component={Job} />
        <Route path="/User/:id" component={User} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

// .main {
//   position: relative;
//   left: 0;
//   right: 0;
//   margin: auto;
//   text-align:center;
//   padding: 60px 20px 0;
//   box-sizing: border-box;
//   // overflow-y: scroll ;//scroll hide

// }
/*
<전체><Search>

  <Main 페이지>
  <top component>
    <Top 주제의 글 목록 페이지 >
  <new component>
    <New 주제의 글 목록>
  <Ask component>
    <Ask 주제의 글 목록 >
  <show component>
    <Show 주제의 글 목록>
  <job component>
    <Job 주제의 글 목록>
    
  <Main 페이지>

</전체><Footer>
*/
//{require("../../public/img/icon_top.png")}
//require(...).default --> 를 통해서 이미지를 동적으로 로드한다.
// Top/:id 등 주소 이동 시 이미지 깨짐 발생 방지.

// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   setTimeout(() => {
//     setLoading(false);
//   }, 1000);
//   return () => {
//     setLoading();
//   };
// }, []);
// return loading ? (
//   <Loading />
// ) :
