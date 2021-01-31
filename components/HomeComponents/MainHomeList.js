import Image from "next/image";
import Link from "next/link";

const MainHomeList = ({ posts }) => {
  const parseDate = (date) => {
    return date.slice(0, 10).split("-").reverse().join("/");
  };
  return (
    <>
      {posts.map((p, key) => (
        <Link as={`/posts/${p.id}`} href={`/posts/${p.id}`}>
          <div
            className="flex w-full items-start sm:items-center py-4 px-3 sm:px-0 transition"
            key={key}
          >
            <div className="relative w-2/5 h-28 sm:h-44 rounded shadow-md">
              <Image
                src={p._embedded["wp:featuredmedia"][0]["source_url"]}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="w-3/5 px-4 sm:px-6">
              <a>
                <h3 className="text-lg mb-2 sm:mb-4 font-bold text-gray-700 sm:text-black leading-tight hover:text-blue-900">
                  <Link as={`/posts/${p.id}`} href={`/posts/${p.id}`}>
                    <a
                      dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                    ></a>
                  </Link>
                </h3>
              </a>
              <p className="text-gray-500 text-sm font-light">
                {parseDate(p.date)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default MainHomeList;
