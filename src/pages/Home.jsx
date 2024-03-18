import { Navbar, Product, MyFooter } from "../components";
import About from "./About";
import './App.css';
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