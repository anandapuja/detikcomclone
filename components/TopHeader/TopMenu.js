"use strict";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CanvasNavigation from "../CanvasNavigation";

function TopMenu() {
  const [menu, setMenu] = useState("MENU");

  const changeMenu = () => {
    if (menu === "MENU") setMenu("TUTUP");
    if (menu === "TUTUP") setMenu("MENU");
  };

  return (
    <>
      <div
        className="flex items-center border-r border-gray-200 border-opacity-100 px-4"
        onClick={changeMenu}
      >
        <div className="m-3 p-1 bg-blue-900 rounded-full">
          {menu === "MENU" && (
            <FontAwesomeIcon icon={faBars} className="w-4 h-4 text-white" />
          )}
          {menu === "TUTUP" && (
            <FontAwesomeIcon icon={faTimes} className="w-4 h-4 text-white" />
          )}
        </div>
        <div className="font-bold text-gray-500 cursor-pointer">{menu}</div>
      </div>
      <div
        className={
          menu === "TUTUP"
            ? "opacity-100 transition duration-300 ease-in-out"
            : "opacity-0 transition duration-300 ease-in-out"
        }
      >
        <CanvasNavigation />
      </div>
    </>
  );
}

export default TopMenu;
