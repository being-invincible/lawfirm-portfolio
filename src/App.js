import { useState } from "react";
import { useTranslation } from "react-i18next";

import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import Landing from "./scenes/Landing";
import About from "./scenes/About";
import Packages from "./scenes/Packages";
import Services from "./scenes/Services";
import Contact from "./scenes/Contact";
import Footer from "./components/Footer";


function App() {

  const { t, i18n } = useTranslation();

  const [selectedPage, setSelectedPage] = useState('home');
  const isAboutMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app">

      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} font={t("font")} home={t("home")} about={t("about")} packages={t("packages")} services={t("services")} contact={t("contact")} />

      <Landing setSelectedPage={setSelectedPage} companyName={t("companyName")} slogan={t("slogan")} button01={t("button01")} button02={t("button02")} font={t("font")}/>

      {/* About */}
      <div className="bg-olive">
        <div className="w-5/6 mx-auto">
        <About setSelectedPage={setSelectedPage} aboutTitle={t("aboutTitle")} aboutContent={t("aboutContent")} button02={t("button02")} button03={t("button03")} font={t("font")} />
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
        <Services services={t("services")} 
        serviceTitle01={t("serviceTitle01")} serviceContent01={t("serviceContent01")}
        serviceTitle02={t("serviceTitle02")} serviceContent02={t("serviceContent02")} 
        serviceTitle03={t("serviceTitle03")} serviceContent03={t("serviceContent03")} 
        serviceTitle04={t("serviceTitle04")} serviceContent04={t("serviceContent04")} 
        serviceTitle05={t("serviceTitle05")} serviceContent05={t("serviceContent05")}
        serviceTitle06={t("serviceTitle06")} serviceContent06={t("serviceContent06")}
        serviceTitle07={t("serviceTitle07")} serviceContent07={t("serviceContent07")}
        serviceTitle08={t("serviceTitle08")} serviceContent08={t("serviceContent08")}
        serviceTitle09={t("serviceTitle09")} serviceContent09={t("serviceContent09")}
        font={t("font")}
        />
        </div>
      </div>
      
      {/* Packages */}
      <div className="bg-olive">
        <div className="w-5/6 mx-auto md:h-full">
        <Packages packages={t("packages")} font={t("font")} />
        </div>
      </div>

      <div className="bg-olive md:justify-between md:items-center md:h-full bg-logo bg-no-repeat bg-contain bg-center">
        {/* <img className="absolute w-1/2" src='/logo.png' alt="logo-bg" /> */}
        {/* <div className="absolute bg-logo bg-no-repeat bg-contain bg-center"> */}
        
        <div className="w-5/6 mx-auto">
        <Contact contact={t("contact")} contactContent={t("contactContent")} or={t("or")} name={t("name")} email={t("email")} phone={t("phone")} selectPackage={t("selectPackage")} submit={t("submit")} whatsapp={t("whatsapp")} location={t("location")} />
        </div>
        {/* </div> */}
      </div>

      <div className="bg-antique-bronze md:justify-between md:items-center">
        <div className="w-5/6 mx-auto">
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
