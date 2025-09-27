import Home from "../components/Home";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import WrongPlace from "../components/WrongPlace";

export const navigationLinks = [
  { name: "Home", link: "/", component: Home },
  { name: "Projects", link: "/projects", component: Projects },
  { name: "About Me", link: "/about", component: AboutMe },
  { name: "Wrong Place", link: "*", component: WrongPlace }, // Catch-all route
];