"use strict";
import {
  faBowlingBall,
  faBug,
  faAngleUp,
  faAtlas,
  faBaseballBall,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const FooterLogo = () => {
  return (
    <div className="w-full sm:text-center mb-8 sm:mb-0">
      <Image
        src="/logo-detikcom.png"
        alt="logo"
        width={150}
        height={32}
        layout="intrinsic"
      />
      <div className="flex justify-center mb-4 sm:mb-8">
        <p className="text-sm text-gray-500 mr-2">part of</p>
        <Image src="/logo_detiknetwork.png" width={80} height={5} />
      </div>
      <p className="text-sm text-gray-700 mb-2">Connect with us</p>
      <div id="sosmed-footer" className="flex px-2 mb-4 sm:mb-8">
        <FontAwesomeIcon
          icon={faBowlingBall}
          className="w-1/5 text-gray-400 px-2"
        />
        <FontAwesomeIcon icon={faBug} className="w-1/5 text-gray-400 px-2" />
        <FontAwesomeIcon
          icon={faAngleUp}
          className="w-1/5 text-gray-400 px-2"
        />
        <FontAwesomeIcon icon={faAtlas} className="w-1/5 text-gray-400 px-2" />
        <FontAwesomeIcon
          icon={faBaseballBall}
          className="w-1/5 text-gray-400 px-2"
        />
      </div>
      <p className=" text-xs text-gray-700 mb-2">
        Copyright @ 2021 detikcom. All right reserved
      </p>
    </div>
  );
};

export default FooterLogo;
