import { Navbar, Product, MyFooter } from "../components";
import About from "./About";

function Home() {
  return (
    <>
      <Navbar />
      {/* <Main /> */}
      <Product />
      <About />
      <MyFooter />
    </>
  )
}

export default Home