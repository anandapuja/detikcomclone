import Link from "next/link";

const PopulerPosts = ({ posts }) => {
  const parseDate = (date) => {
    return date.slice(0, 10).split("-").reverse().join("/");
  };
  return (
    <div className="px-4 sm:px-0">
      <h3 className="font-bold text-2xl text-blue-900 pl-0 sm:pl-6 mb-4">
        Berita Terpopuler
      </h3>
      {posts.map((p, key) => (
        <div className="flex p-2" key={key}>
          <div className=" w-1/6">
            <p className="text-gray-300 text-2xl text-center">#{key + 1}</p>
          </div>
          <div className="w-5/6">
            <Link href={`posts/${p.id}`}>
              <a
                className="mb-2 leading-snug hover:text-blue-900 transition-all"
                dangerouslySetInnerHTML={{ __html: p.title.rendered }}
              ></a>
            </Link>
            <p className="text-gray-500 text-sm font-light">
              {parseDate(p.date)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopulerPosts;
