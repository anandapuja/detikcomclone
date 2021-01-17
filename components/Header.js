"use strict";

import MainNavigation from "./MainNavigation";
import MiddleHeader from "./MiddleHeader/MiddleHeader";
import TopHeader from "./TopHeader/TopHeader";

const Header = () => {
  return (
    <div>
      <div class="flex flex-col">
        <TopHeader />
        <MiddleHeader />
        <MainNavigation />
      </div>
    </div>
  );
};

export default Header;
