import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";
import parseDate from "../../lib/parseDate";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const res = await fetch(
    "https://aeroindomagz.com/wp-json/wp/v2/posts?_embed"
  );
  const posts = await res.json();
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://aeroindomagz.com/wp-json/wp/v2/posts/${params.id}?_embed`
  );
  const post = await res.json();
  return {
    props: { post },
    revalidate: 1,
  };
}

const DetailPost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{post.title.rendered}</title>
      </Head>
      <Header />
      <div className="w-full px-4 sm:w-4/5 m-auto sm:flex sm:justify-between">
        <div className="w-full sm:w-4/6">
          <div className="py-4">
            <h3
              className="text-center font-bold text-4xl text-blue-900 px-8 mb-4"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></h3>
            <p className="mb-4 text-sm text-gray-400 text-center font-thin">
              {parseDate(post.date)}
            </p>
            <Image
              src={post._embedded["wp:featuredmedia"][0]["source_url"]}
              width={900}
              height={500}
            />
            <div
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></div>
          </div>
        </div>
        <div className="w-full sm:w-2/6 text-center">
          <Image
            src="https://aeroindomagz.com/wp-content/uploads/2021/01/345x345.jpg"
            width={345}
            height={345}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPost;
