"use strict";

import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const MainNavigation = () => {
  const [mainNav, setMainNav] = useState([
    "detikNews",
    "detikFinance",
    "detikHot",
    "detikInet",
    "detikSport",
    "detikOto",
    "detikTravel",
    "detikFood",
    "detikHealth",
    "Wolipop",
    "20Detik",
  ]);
  const [secondNav, setSecondNav] = useState([
    "Live TV",
    "Adsmart",
    "Foto",
    "detikX",
    "Sepakbola",
    "Pasangmata",
    "Hikmah",
    "dYouthizen",
  ]);

  return (
    <div className="w-full sm:w-4/5 m-0 sm:m-auto mb-4 sm:mb-8">
      <div className="overflow-x-auto whitespace-nowrap w-full font-bold items-center justify-start bg-gradient-to-r from-red-900 via-blue-700 to-red-500 text-white sm:rounded">
        <ul>
          {mainNav.map((nav, key) => (
            <li
              className="inline-block px-3 py-2 hover:text-yellow-400"
              key={key}
            >
              {nav}
            </li>
          ))}
        </ul>
      </div>
      <div className="overflow-x-auto whitespace-nowrap w-full font-bold flex items-center justify-start bg-gray-200 text-gray-600 sm:rounded-b-lg">
        <ul className="flex flex-nowrap sm:flex-wrap">
          {secondNav.map((nav, key) =>
            nav === "Live TV" ? (
              <li className="px-3 py-2 text-blue-700 flex" key={key}>
                <FontAwesomeIcon
                  icon={faDesktop}
                  className="w-4 mr-2 inline-block"
                />
                {nav}
              </li>
            ) : (
              <li
                className="inline-block px-3 py-2 hover:text-blue-900"
                key={key}
              >
                {nav}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MainNavigation;
