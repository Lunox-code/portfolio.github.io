import Head from "next/head";
import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";

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

        {/* Social Networks */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        {/* END Social Networks */}
      </Head>

      <main>
        <Header />
        <About />
        <Skills />
      </main>

      <footer>
        <div></div>
      </footer>
    </div>
  );
}
