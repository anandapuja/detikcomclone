import { useState } from "react";

const CanvasNavigation = () => {
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

  return (
    <div className="bg-white h-full fixed z-999999 w-3/4 sm:w-1/4 top-12 bottom-0 left-0 shadow-inner overflow-auto">
      <ul>
        {kategori.map((kate) => (
          <li className="text-gray-800 font-thin font-sm py-2 px-8 border-b border-gray-200">
            {kate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CanvasNavigation;
