import { BrowserRouter, Routes, Route } from "react-router-dom";

import { EventsAll, FirstPage, SecondPageAllEvents } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
        <div className='relative z-0'>
          <Routes>
            <Route exact path="/"
               element={<FirstPage />} /> 
              
            <Route exact path="/allEvents" element={<SecondPageAllEvents />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
