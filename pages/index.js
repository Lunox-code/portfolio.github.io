import Head from "next/head";
import About from "./components/About";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* React Boostrap */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
        {/* END React Boostrap */}
      </Head>

      <main>
        <Header />
        <About />
      </main>

      <footer>
        <div></div>
      </footer>
    </div>
  );
}
