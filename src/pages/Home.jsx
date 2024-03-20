import { Navbar, Product, MyFooter , Services, SlideShow, Themes } from "../components";
import About from "./About";
import './App.css';
function Home() {
  return (
    <>
      <Navbar />
      <SlideShow />
      <Services />
      <Themes />
      <MyFooter />
    </>
  )
}

export default Home