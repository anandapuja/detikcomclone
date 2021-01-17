"use strict";

import Image from "next/image";
import Link from "next/link";

const MainHomeBig = ({ mainPost, relatedPosts }) => {
  return (
    <div className="sm:rounded-sm">
      <div className="w-full h-96 relative">
        <Image
          src={mainPost._embedded["wp:featuredmedia"][0]["source_url"]}
          layout="fill"
          objectFit="cover"
          className="sm:rounded-t-lg"
        />
      </div>
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 mt-0 p-4 sm:rounded-b-lg">
        <div className="flex items-center">
          <p className="text-yellow-400 mb-2">Berita Terkait</p>
          <hr />
        </div>
        <div className="flex items-start">
          {relatedPosts.map((p, key) => (
            <p
              className="text-white text-sm sm:font-bold leading-snug font-thin px-2 sm:px-0"
              key={key}
            >
              <Link href={`/posts/${p.id}`}>
                <a dangerouslySetInnerHTML={{ __html: p.title.rendered }}></a>
              </Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainHomeBig;
