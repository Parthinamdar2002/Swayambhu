// import { BrowserRouter } from "react-router-dom";
import { StarsCanvas } from './canvas';
import Navbar from "./Navbar";
import EventsAll from "./EventsAll";

const SecondPageAllEvents = () => {
  return (
    // <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
        <div className='relative z-0'>
            <StarsCanvas />
            <Navbar />
            <EventsAll/>
        </div>
      </div>
    // </BrowserRouter>
  );
}

export default SecondPageAllEvents;
