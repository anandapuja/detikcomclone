"use strict";

import Image from "next/image";
import Link from "next/link";

const TopHomeGrid = ({ topPosts }) => {
  return (
    <div className=" overflow-x-auto flex flex-nowrap sm:flex-wrap items-start w-full sm:w-4/5 m-auto justify-start sm:justify-between mb-0 sm:mb-12">
      {topPosts.map((p, key) => (
        <div
          className="px-2 sm:px-2 w-full mb-8 leading-snug text-gray-600 font-thin sm:mb-0 sm:w-1/5 hover:text-blue-900"
          key={key}
        >
          <div className="relative w-28 sm:w-full h-16 sm:h-32 mb-3">
            <Image
              src={p._embedded["wp:featuredmedia"][0]["source_url"]}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="w-full text-xs sm:text-sm">
            <Link as={`/posts/${p.id}`} href={`/posts/${p.id}`}>
              <a dangerouslySetInnerHTML={{ __html: p.title.rendered }}></a>
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default TopHomeGrid;
