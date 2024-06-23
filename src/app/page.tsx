import Image from "next/image";
import Hero from "./Components/Hero";
import WhyChoose from "./Components/WhyChoose";
import ClientList from "./Components/ClientList";
import How from "./Components/How";
import Skills from "./Components/Skills";
import Cta from "./Components/Cta";
import Encryption from "./Components/Encryption";
import FintechProjects from "./Components/OurProjects";
import EmailSection from './Components/EmailSection';

export default function Home() {
  return (
    <main className="h-full w-full">
      {/* <HomePage/> */}
      <div className="flex flex-col gap-20">
       <Hero/>
       <WhyChoose/>
       <ClientList/>
       <How/>
       <Skills/>
       <Cta/>
       <FintechProjects/>
       <Encryption />
        {/* <Contact/> */}
       <EmailSection/>
      </div>

    </main>
  );
}
