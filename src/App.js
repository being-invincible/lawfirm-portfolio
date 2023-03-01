import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import Landing from "./scenes/Landing";
import About from "./scenes/About";
import Packages from "./scenes/Packages";
import Services from "./scenes/Services";

function App() {

  const [selectedPage, setSelectedPage] = useState('home');
  const isAboutMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app">

      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      <Landing setSelectedPage={setSelectedPage} companyName="Ahattah law & legal consultations Co." slogan="We save your rights and protect your business" />

      {/* About */}
      <div className="bg-olive">
        <div className="w-5/6 mx-auto">
        <About setSelectedPage={setSelectedPage} />
        </div>
      </div>
      
      {/* Nav Floating Dots */}
      <div className="">
        {isAboutMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
      </div>

      {/* Services */}
      <div className="bg-gradient-to-tr from-coyote to-arylide-yellow">
        <div className="w-5/6 mx-auto">
        <Services />
        </div>
      </div>
      
      {/* Packages */}
      <div className="bg-olive">
        <div className="w-5/6 mx-auto md:h-full">
        <Packages />
        </div>
      </div>

    </div>
  );
}

export default App;
