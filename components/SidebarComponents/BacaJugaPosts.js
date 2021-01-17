import Image from "next/image";
import Link from "next/link";

const BacaJugaPosts = ({ posts }) => {
  return (
    <div className="border-t-2 border-b-2 border-gray-200 py-4 my-4">
      <h3 className="font-bold text-2xl text-blue-900 pl-6 mb-2">Baca Juga</h3>
      <div className="w-full flex flex-wrap ">
        {posts.map((p, key) => (
          <div
            className="w-1/2 py-4 px-4  hover:text-blue-800 transition-all"
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
            <Link href={`/posts/${p.id}`}>
              <a
                className="font-thin leading-snug"
                dangerouslySetInnerHTML={{ __html: p.title.rendered }}
              ></a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BacaJugaPosts;
