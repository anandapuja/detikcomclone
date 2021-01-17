"use strict";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchForm() {
  const [searchType, setSearchType] = useState("");
  const router = useRouter();

  const handleSearchType = (e) => {
    setSearchType(e.target.value);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?search=${searchType}`);
  };

  return (
    <div className="w-full mx-4 sm:mx-0 sm:w-2/5 border border-gray-200 rounded-3xl">
      <form className="flex items-center" onSubmit={searchSubmit}>
        <input
          className="w-4/5 font-thin text-sm my-2 mx-2"
          placeholder="Cari Berita"
          onChange={handleSearchType}
        />
        <div className="flex justify-center w-1/5" onClick={searchSubmit}>
          <FontAwesomeIcon icon={faSearch} className="text-gray-400 w-4" />
        </div>
      </form>
    </div>
  );
}
