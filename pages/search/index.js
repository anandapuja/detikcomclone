"use strict";

import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Search = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    `https://aeroindomagz.com/wp-json/wp/v2/search?search=${router.query.search}&per_page=10`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Head>
        <title></title>
      </Head>
      <Header />
      <div className="w-full px-4 mb-8 sm:w-4/5 m-auto sm:flex">
        <div className="w-full sm:w-4/6 m-auto">
          <h3 className="font-bold text-2xl text-blue-900 pl-6 mb-8">
            Search Result for: {router.query.search}
          </h3>
          {data.map((p) => (
            <div className="w-full shadow-sm hover:shadow-none py-4 pl-8 mb-2 bg-gray-100">
              <h3 className="hover:text-blue-900 hover:underline">
                <Link href={`/posts/${p.id}`}>
                  <a dangerouslySetInnerHTML={{ __html: p.title }}></a>
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
