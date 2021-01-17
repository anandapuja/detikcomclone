"use strict";
import { useState } from "react";
import FooterCategoryFull from "./Footer/FooterCategoryFull";
import FooterCategoryHalf from "./Footer/FooterCategoryHalf";
import FooterLogo from "./Footer/FooterLogo";

const Footer = () => {
  const [kategori, setKategori] = useState([
    "News",
    "Finance",
    "Teknologi",
    "Entertaiment",
    "Sport",
    "Sepakbola",
    "Otomotif",
    "Travel",
    "Food",
    "Health",
    "Wolipop",
    "DetikX",
    "20Detik",
    "Foto",
  ]);

  const [layanan, setLayanan] = useState([
    "Pasang Mata",
    "Adsmart",
    "Forum",
    "detikEvent",
    "detikPoint",
    "Trans Snow World",
    "Trans Studio",
  ]);

  const [informasi, setInformasi] = useState([
    "Redaksi",
    "Pedoman Media Siber",
    "Karir",
    "Kotak Pos",
    "Media Partner",
    "Info Iklan",
    "Privacy Policy",
    "Disclaimer",
  ]);

  const [jaringanMedia, setJaringanMedia] = useState([
    "CNN Indonesia",
    "CNBC Indonesia",
    "Haibunda",
    "Insertlive",
    "Beautynesia",
    "Female Daily",
  ]);

  return (
    <div className="w-full py-8 border-t-4 border-blue-900 bg-gray-100">
      <div className="flex flex-wrap w-4/5 m-auto">
        <div className="w-1/2 sm:w-1/5 px-2 sm:px-0">
          <FooterLogo />
        </div>
        <div className="w-1/2 sm:w-1/5 px-2 sm:px-0">
          <FooterCategoryHalf title={"Kategori"} nav={kategori} />
        </div>
        <div className="w-1/2 sm:w-1/5 px-2 sm:px-0">
          <FooterCategoryFull title={"Layanan"} nav={layanan} />
        </div>
        <div className="w-1/2 sm:w-1/5 px-2 sm:px-0">
          <FooterCategoryFull title={"Informasi"} nav={informasi} />
        </div>
        <div className="w-1/2 sm:w-1/5 px-2 sm:px-0">
          <FooterCategoryFull title={"Jaringan Media"} nav={jaringanMedia} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
