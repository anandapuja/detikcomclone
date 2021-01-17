import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainHomeBig from "../components/HomeComponents/MainHomeBig";
import MainHomeGrid from "../components/HomeComponents/MainHomeGrid";
import MainHomeList from "../components/HomeComponents/MainHomeList";
import TopHomeGrid from "../components/HomeComponents/TopHomeGrid";
import BacaJugaPosts from "../components/SidebarComponents/BacaJugaPosts";
import PopulerPosts from "../components/SidebarComponents/PopulerPosts";

export default function Home({
  posts,
  topPosts,
  mainPost,
  relatedPosts,
  mainGridPosts,
}) {
  return (
    <div>
      <Head>
        <title>detikcom - Informasi Berita Terkini dan Terbaru Hari Ini</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TopHomeGrid topPosts={topPosts} />
      <div className="w-full sm:w-4/5 m-auto sm:flex">
        <div className="w-full sm:w-3/5">
          <MainHomeBig mainPost={mainPost} relatedPosts={relatedPosts} />
          <div className="py-4">
            <MainHomeList posts={topPosts} />
            <MainHomeGrid posts={mainGridPosts} />
            <MainHomeList posts={posts} />
          </div>
        </div>
        <div className="w-full sm:w-2/5">
          <PopulerPosts posts={topPosts} />
          <BacaJugaPosts posts={mainGridPosts} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const sbPost = await fetch(
    "https://aeroindomagz.com/wp-json/wp/v2/posts?_embed"
  );
  const posts = await sbPost.json();
  const topPosts = posts.slice(0, 5);
  const mainGridPosts = posts.slice(0, 6);
  const mainPost = posts[0];
  const relatedPosts = posts.slice(1, 3);
  return {
    props: {
      posts,
      topPosts,
      mainPost,
      relatedPosts,
      mainGridPosts,
    },
    revalidate: 1,
  };
}
