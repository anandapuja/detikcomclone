import Image from "next/image";
import Link from "next/link";

const MainHomeGrid = ({ posts }) => {
  return (
    <div className="w-full flex flex-wrap justify-center border-t-2 border-b-2 border-gray-200 py-4 my-4">
      {posts.map((p, key) => (
        <Link href={`/posts/${p.id}`}>
          <div
            className="w-1/2 sm:w-1/3 py-4 px-3 hover:text-blue-800 transition-all"
            key={key}
          >
            <div className="w-full relative h-28 shadow-md mb-4 rounded-md">
              <Image
                src={p._embedded["wp:featuredmedia"][0]["source_url"]}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="font-thin leading-snug">
              <Link href={`/posts/${p.id}`}>
                <a dangerouslySetInnerHTML={{ __html: p.title.rendered }}></a>
              </Link>
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainHomeGrid;
