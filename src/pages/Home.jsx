import { Navbar, Main, Product, Footer } from "../components";
import About from "./About";

function Home() {
  return (
    <>
      <Navbar />
      {/* <Main /> */}
      <Product />
      <About />
      <Footer />
    </>
  )
}

export default Home