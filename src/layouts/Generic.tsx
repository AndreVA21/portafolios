import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

import logo from "../assets/icons/logo.svg";

function Generic() {
  const [isExpanded, changeStatus] = useState(false);

  function changeOnClick() {
    changeStatus(!isExpanded);
  }

  return (
    <div className="flex bg-slate-600">
      <div>
        <header></header>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Generic;
