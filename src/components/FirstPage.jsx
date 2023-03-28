import { StarsCanvas } from './canvas';
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Events from "./Events";
import Instructions from "./Instructions";
import Team from "./Team";
import Contact from "./Contact";
import CanvasLoader from "./Loader";

const FirstPage = () => {
  return (
      <div className='relative z-0 bg-primary'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
        <div className='relative z-0'>
          <Navbar />
          <StarsCanvas />
          <Hero />
        </div>
        
        <div className='relative z-0'>
          <StarsCanvas />
          <About />
        </div>
        
        <div className='relative z-0'>
          <StarsCanvas />
          <Events />
        </div>
        
        <div className='relative z-0'>
          <StarsCanvas />
          <Instructions />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
        <StarsCanvas />
        <Team />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
  );
}

export default FirstPage;
