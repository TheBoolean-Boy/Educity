import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import { useState } from "react";

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="testimonials" title="What Students Say"/>
        <Testimonials />
        <Title subtitle="Contact Us" title="Get in Touch"/>
        <Contact />
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
        <Footer />

        
      </div>
    </div>
  )
}

export default App;