import { Navbar, Product, MyFooter , Services } from "../components";
import About from "./About";
import './App.css';
function Home() {
  return (
    <>
      <Navbar />
      {/* <Main /> */}
      <Services />
      {/* <About /> */}
      <MyFooter />
    </>
  )
}

export default Home