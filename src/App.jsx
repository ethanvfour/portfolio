import { useState } from "react";
import Home from "./components/Home";
import WrongPlace from "./components/WrongPlace";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

function App() {
  const LINKS = [
    { name: "Home", link: "/", component: <Home /> },
    { name: "Projects", link: "/projects", component: <Projects /> },
    { name: "About Me", link: "/about", component: <AboutMe /> },
    { name: "Wrong Place", link: "*", component: <WrongPlace /> },
  ];
  const [whichOne, setWhichOne] = useState("Home");
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-serif">
        <header className="w-full min-h-[100px] bg-[#FFFFFF] mx-auto flex flex-col justify-center items-center   border-b-3">
          <div className="text-4xl text-center">Ethan Guillem</div>

          <nav className="flex mt-4 w-full justify-evenly">
            {LINKS.filter((l) => l.link !== "*").map((l, index) => (
              <Link
                key={index}
                to={l.link}
                className={` hover:text-[#000000] focus:text-[#000000] transition-all duration-250 ${
                  whichOne === l.name ? "text-[#000000]" + `aria-current="page"` : "text-[#999999]"
                }`}
                onClick={() => setWhichOne(l.name)}
              >
                {l.name}
              </Link>
            ))}
          </nav>
        </header>
        <main className="flex-1 p-1">
          <Routes>
            {LINKS.map((com, i) => (
              <Route key={i} path={com.link} element={com.component} />
            ))}
          </Routes>
        </main>
        <footer className="w-full min-h-[100px] bg-[#686868] shadow-xl/30 border-solid border-[#ffffff] border-t-3 text-[#FFFFFF]"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
