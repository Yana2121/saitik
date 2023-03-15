import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { Main } from "./Pages/Main";
import { Variables } from "./Pages/Variables";
import { TestV } from "./Pages/Test/TestV";
import { Types } from "./Pages/Types";
import { TestT } from "./Pages/Test/TestT";
import { Operation } from "./Pages/Operation";
import { If } from "./Pages/If";
import { TestIf } from "./Pages/Test/TestIf";
import { Test } from "./Pages/Test/Test";

function App() {
  return (
    <>
      <div className="div1">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/V" element={<Variables />} />
          <Route path="/TestV" element={<TestV />} />
          <Route path="/T" element={<Types />} />
          <Route path="/TestT" element={<TestT />} />
          <Route path="/Opera" element={<Operation />} />
          <Route path="/If" element={<If />} />
          <Route path="/TestIf" element={<TestIf />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
