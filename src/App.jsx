import { useState } from "react";
import Home from "./components/Home";
import WrongPlace from "./components/WrongPlace";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

import Youtube_photo from "./assets/youtube.png";
import Twitter_photo from "./assets/twitter.png";
import Github_photo from "./assets/github.png";

/**
 * Main App component for the portfolio site.
 * Handles routing, navigation, and layout.
 */

function App() {
  // Navigation links and their associated components
  const LINKS = [
    { name: "Home", link: "/", component: Home },
    { name: "Projects", link: "/projects", component: Projects },
    { name: "About Me", link: "/about", component: AboutMe },
    { name: "Wrong Place", link: "*", component: WrongPlace }, // Catch-all route
  ];

  const SOCIALS = [
    {
      name: "GitHub",
      link: "https://github.com/ethanvfour",
      photo: Github_photo,
    },
    {
      name: "Twitter/X",
      link: "https://x.com/ethan_guillem_?s=21",
      photo: Twitter_photo,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@Ethan_Guillem",
      photo: Youtube_photo,
    },
  ];

  // Tracks which navigation link is currently active
  const [whichOne, setWhichOne] = useState("");

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen font-serif">
        {/* Header section with site title and navigation */}
        <header className="w-full sm:min-h-[100px] md:min-h-[150px] lg:min-h-[175px] bg-[#FFFFFF] mx-auto flex flex-col justify-evenly items-center border-b-3">
          <div className="text-4xl text-center ">Ethan Guillem</div>

          {/* Navigation bar with responsive font sizes */}
          <nav className="flex mt-4 w-full justify-evenly sm:text-sm md:text-base lg:text-lg">
            {LINKS.filter((l) => l.link !== "*").map((l, index) => (
              <Link
                key={index}
                to={l.link}
                className={` hover:text-[#000000] focus:text-[#000000] transition-all duration-250 ${
                  whichOne === l.name ? "text-[#000000]" : "text-[#999999]"
                }`}
                aria-current={whichOne === l.name ? "page" : ""}
                onClick={() => setWhichOne(l.name)} // Update active link
              >
                {l.name}
              </Link>
            ))}
          </nav>
        </header>
        {/* Main content area with route rendering */}
        <main className="flex-1 p-1">
          <Routes>
            {LINKS.map((com, i) => (
              <Route
                key={i}
                path={com.link}
                element={
                  // Pass name and setter to each route component
                  <com.component name={com.name} setterForStyle={setWhichOne} />
                }
              />
            ))}
          </Routes>
        </main>
        {/* Footer section */}

        <footer className="w-full min-h-[100px] bg-[#ededed] shadow-xl/30 border-solid border-[#000000] border-t-3 text-[#000000] text-xs flex flex-col justify-evenly">
          <div id="socials" className="w-full">
            <ul className="flex justify-center gap-x-8 m-1">
              {SOCIALS.map((s) => (
                <li key={s.link} className="mx-1">
                  <a
                    href={s.link}
                    target="_blank"
                    className="hover:text-[#000000] focus:text-[#000000] text-[#838383] transition-all duration-250 flex items-center gap-2"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={s.photo}
                      alt={`${s.name} icon`}
                      loading="lazy"
                      className="w-5 h-5 object-contain"
                    />
                    <span>{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <br></br>
          <h1 className="w-full text-center">Ethan Guillem</h1>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
