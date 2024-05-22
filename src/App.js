import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Nav from "./components/Projet2/Nav";
import Intro from "./components/Projet2/Intro";
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Hero />
      <Menu />
      <Contact />
      <AboutUs />
      <Footer /> */}
      <Nav />
      <Intro />
    </div>
  );
}

export default App;
