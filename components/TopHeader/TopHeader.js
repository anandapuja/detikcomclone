"use strict";

import LeftButton from "./LeftButton";
import SearchForm from "./SearchForm";
import TopMenu from "./TopMenu";

function TopHeader() {
  return (
    <div className="w-full shadow-xl fixed z-999998 bg-white">
      <div className="flex items-center justify-between md:w-4/5 m-auto">
        <TopMenu />
        <SearchForm />
        <LeftButton />
      </div>
    </div>
  );
}

export default TopHeader;
